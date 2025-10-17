"use client";

import * as React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { categories } from "@/lib/category";

interface ItemContentProps {
  icon: React.ElementType;
  label: string;
}

const ItemContent: React.FC<ItemContentProps> = ({ icon: Icon, label }) => (
  <div className="flex items-center gap-3">
    <Icon className="h-4 w-4 text-purple-light" />
    <span>{label}</span>
  </div>
);

export function SelectCategory() {
  const [selectedCategory, setSelectedCategory] = React.useState<string>("");
  const currentCategoryData = categories.find(c => c.value === selectedCategory);

  return (
    <div className="">
      <label className="text-gray-200 text-sm">Categoria</label>
      
      <Select 
        value={selectedCategory} 
        onValueChange={setSelectedCategory}
      >
        
        <SelectTrigger 
          className="w-full rounded-md bg-gray-400 border-none text-gray-100 data-[state=open]:border-purple data-[state=open]:ring-1 data-[state=open]:ring-purple"
        >
          {currentCategoryData ? (
            <ItemContent icon={currentCategoryData.icon} label={currentCategoryData.label} />
          ) : (
            <SelectValue placeholder="Selecione a categoria" />
          )}
        </SelectTrigger>
        
        <SelectContent 
          className="bg-gray-600 border-none shadow-lg mt-1 p-0 rounded-lg text-gray-100"
        >
          {categories.map((cat) => (
            <SelectItem 
              key={cat.value} 
              value={cat.value}
              className="py-3 px-4 hover:bg-gray-500 cursor-pointer data-[state=checked]:text-purple data-[state=checked]:bg-gray-500"
            >
              <ItemContent icon={cat.icon} label={cat.label} />
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}