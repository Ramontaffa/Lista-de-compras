"use client";

import * as React from "react";
import { ShoppingForm } from "@/components/ListForm/ShoppingForm";
import { ShoppingList } from "@/components/ListItem/shoppingList";
import { useShoppingStore } from "@/store/useShoppingStore";
import { useState } from "react";
import { Input } from "../ui/input";
import { CategorySelectFilter } from "./CategorySelectFilter";

export default function ShoppingClientPage() {
  // Get store state and actions
  const {
    items,
    handleAddItem,
    handleEditItem,
    handleToggleItem,
    handleDeleteItem,
    _hasHydrated,
  } = useShoppingStore();

  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  // Filtra por nome e categoria
  const filteredItems = items.filter((item) => {
    const matchesName = item.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = categoryFilter === "" || item.category === categoryFilter;
    return matchesName && matchesCategory;
  });

  return (
    <div className="relative z-10 p-8 sm:p-12 md:p-16 lg:p-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-100 mb-8">
          Lista de Compras
        </h1>
        <ShoppingForm onAddItem={handleAddItem} />


        {/* search bar + category filter */}
        <div className="my-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:gap-4">
          <div className="flex-1 flex flex-col">
            <label htmlFor="search" >
              Pesquisar item
            </label>
            <Input
              id="search"
              type="text"
              placeholder="Pesquisar item..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-9 text-white"
            />
          </div>
          <div className="flex flex-col">
            <label>Filtrar categoria</label>
            <CategorySelectFilter value={categoryFilter} onChange={setCategoryFilter} />
          </div>
        </div>

        <div className="my-8 h-px bg-gray-500" /> {/* Divider */}
        
        {/* Show loading while hydrating from API */}
        {!_hasHydrated ? (
          <div className="flex items-center justify-center py-12">
            <div className="text-gray-300 text-lg">Carregando lista...</div>
          </div>
        ) : (
            <ShoppingList
              items={filteredItems}
              onToggle={handleToggleItem}
              onEdit={handleEditItem}
              onDelete={handleDeleteItem}
            />
        )}
      </div>
    </div>
  );
}
