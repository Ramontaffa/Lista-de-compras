"use client";

import * as React from "react";
import { ShoppingForm } from "@/components/ListForm/ShoppingForm";
import { ShoppingList } from "@/components/ListItem/shoppingList";
import { useShoppingStore } from "@/store/useShoppingStore";

export default function ShoppingClientPage() {
  // Get store state and actions
  const { items, handleAddItem, handleEditItem, handleToggleItem, handleDeleteItem, _hasHydrated } = useShoppingStore();

  return (
    <div className="relative z-10 pt-20 sm:pt-24 md:pt-26 lg:pt-30 p-8 sm:p-12 md:p-16 lg:p-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-100 mb-8 mt-[-3rem]">
          Lista de Compras
        </h1>
        <ShoppingForm onAddItem={handleAddItem} />
        <div className="my-8 h-px bg-gray-500" /> {/* Divider */}

        {/* Show loading while hydrating from API */}
        {!_hasHydrated ? (
          <div className="flex items-center justify-center py-12">
            <div className="text-gray-300 text-lg">Carregando lista...</div>
          </div>
        ) : (
          <ShoppingList
            items={items}
            onToggle={handleToggleItem}
            onEdit={handleEditItem}
            onDelete={handleDeleteItem}
          />
        )}
      </div>
    </div>
  );
}
