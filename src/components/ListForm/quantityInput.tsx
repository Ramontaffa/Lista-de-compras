"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface QuantityInputProps {
  quantityValue: number;
  onQuantityChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  unitValue: string;
  onUnitChange: (value: string) => void;
  isFilter?: boolean;
}

export function QuantityInput({
  quantityValue,
  onQuantityChange,
  unitValue,
  onUnitChange,
  isFilter,
}: QuantityInputProps) {
  // Available unit of measurement options
  const UNIT_OPTIONS = ["UN", "KG", "L", "PCT"];

  return (
    // Main container with rounded border and palette colors
    <div className="flex overflow-hidden rounded-md bg-gray-500">
      {/* Numeric input for quantity */}
      <Input
        type="number"
        value={quantityValue}
        onChange={onQuantityChange}
        className={`bg-transparent rounded-l-md rounded-r-none text-center p-0 ${isFilter ? "w-16 min-w-[5rem]" : "w-14"}`}
        min="1"
      />
      {/* Select for choosing unit of measurement */}
      <div className="flex-1 min-w-0">
        <Select onValueChange={onUnitChange} value={unitValue}>
          <SelectTrigger className="border w-full">
            <SelectValue placeholder="UN." />
          </SelectTrigger>
          <SelectContent className="bg-gray-500 border-gray-400 text-gray-200">
            {UNIT_OPTIONS.map((opt) => (
              <SelectItem key={opt} value={opt} className="focus:bg-purple-dark">
                {opt}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
