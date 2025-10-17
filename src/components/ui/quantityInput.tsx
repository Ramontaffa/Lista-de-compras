"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function QuantityInput() {
  return (
    <div className="flex overflow-hidden">
      
      <Input
        type="number"
        defaultValue="1"
        className="flex-1 focus-visible:ring-0 shadow-none text-center rounded-r-none"
        min="1"
      />

      <Select defaultValue="un">
        <SelectTrigger
          className="focus-visible:ring-0 shadow-none text-xs"
        >
          <SelectValue placeholder="UN." />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="un">UN.</SelectItem>
          <SelectItem value="kg">KG</SelectItem>
          <SelectItem value="l">L</SelectItem>
          <SelectItem value="pacote">PCT</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}