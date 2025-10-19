"use client";

import * as React from "react";
import { Plus } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SelectCategory } from "./SelectCategory";
import { QuantityInput } from "./quantityInput";

interface ShoppingFormProps {
  onAddItem: (item: {
    name: string;
    quantity: number;
    unit: string;
    category: string;
  }) => void;
}

export function ShoppingForm({ onAddItem }: ShoppingFormProps) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState<number>(1);
  const [unit, setUnit] = useState<string>("UN");
  const [category, setCategory] = useState<string>("");

  // Handles form submission Validates inputs and calls onAddItem callback
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (!name.trim() || !category || quantity <= 0) {
      alert("Por favor, preencha o Item, a Categoria e garanta que a Quantidade seja maior que zero.");
      return;
    }
    
    // Create new item object
    const newItem = {
      name: name.trim(),
      quantity: Number(quantity),
      unit: unit.toLowerCase(),
      category,
    };

    // Call the onAddItem prop with the new item
    onAddItem(newItem);

    // Reset form fields
    setName("");
    setQuantity(1);
    setUnit("UN");
    setCategory("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-wrap justify-center items-end gap-3 sm:gap-4">
      {/* Item name input */}
      <div className="flex flex-col flex-grow min-w-[120px]">
        <label htmlFor="item-name" className="text-gray-200 text-sm mb-1">
          Item
        </label>
        <Input
          id="item-name"
          placeholder=""
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-gray-500 border-gray-400 h-10"
        />
      </div>

      <div className="flex gap-4 items-baseline-last min-w-[120px] overflow-x-auto">
        {/* Quantity and unit input */}
        <div className="flex flex-col">
          <label className="text-gray-200 text-sm mb-1">Quantidade</label>
          <QuantityInput
            quantityValue={quantity}
            onQuantityChange={(e) => setQuantity(Number(e.target.value))}
            unitValue={unit}
            onUnitChange={setUnit}
          />
        </div>

        {/* Category selector */}
        <div className="flex flex-col min-w-[120px]">
          <SelectCategory value={category} onValueChange={setCategory} />
        </div>

        {/* Submit button */}
        <Button 
          type="submit"
          size="icon" 
          className="h-10 w-10 bg-purple hover:bg-purple-dark shrink-0" 
          disabled={!name.trim() || !category || quantity <= 0}
        >
          <Plus className="h-5 w-5" />
        </Button>
      </div>
    </form>
  );
}