"use client";

import * as React from "react";
import { Plus } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SelectCategory } from "./SelectCategory";
import { QuantityInput } from "./quantityInput";


export function ShoppingForm() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState<string>("0");
  const [unit, setUnit] = useState<string>("UN");
  const [category, setCategory] = useState<string>("");

  const addItemToList = (item: {
    name: string;
    quantity: string;
    unit: string;
    category: string;
  }) => {
    console.log("Item Submetido:", item);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !category) {
      alert("Por favor, preencha o Item e selecione a Categoria.");
      return;
    }
    const newItem = {
      name: name.trim(),
      quantity,
      unit,
      category,
    };

    addItemToList(newItem);
    setName("");
    setQuantity("0");
    setUnit("UN");
    setCategory("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-end gap-3 sm:gap-4">
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

      <div className="flex flex-col">
        <label className="text-gray-200 text-sm mb-1">Quantidade</label>
        <QuantityInput
          quantityValue={quantity}
          onQuantityChange={(e) => setQuantity(e.target.value)}
          unitValue={unit}
          onUnitChange={setUnit}
        />
      </div>

      <div className="flex flex-col min-w-[120px]">
        <SelectCategory value={category} onValueChange={setCategory} />
      </div>

      <Button disabled={!name.trim() || !category}>
        <Plus className="h-5 w-5" />
      </Button>
    </form>
  );
}
