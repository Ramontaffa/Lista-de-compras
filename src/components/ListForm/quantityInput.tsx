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
  quantityValue: string;
  onQuantityChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  unitValue: string;
  onUnitChange: (value: string) => void;
}

export function QuantityInput({
  quantityValue,
  onQuantityChange,
  unitValue,
  onUnitChange,
}: QuantityInputProps) {
  // Available unit of measurement options
  const UNIT_OPTIONS = ["UN", "KG", "L", "PCT"];

  return (
    // Main container with rounded border and palette colors
    <div className="flex rounded-md overflow-hidden bg-gray-500 border border-gray-400">
      {/* Numeric input for quantity */}
      <Input
        type="number"
        value={quantityValue}
        onChange={onQuantityChange}
        className="bg-transparent border-none w-14 text-center p-0 focus-visible:ring-0"
        min="1"
      />

      {/* Visual divider between quantity and unit */}
      <div className="w-px bg-gray-400 my-1"></div>

      {/* Select for choosing unit of measurement */}
      <Select onValueChange={onUnitChange} value={unitValue}>
        <SelectTrigger className="w-[70px] bg-gray-400 border-none text-gray-200 focus:ring-0 [&>span]:w-full">
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
  );
}
