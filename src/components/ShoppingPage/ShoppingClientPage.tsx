"use client";

import * as React from "react";
import { ShoppingForm } from "@/components/ListForm/ShoppingForm";
import { ShoppingList } from "@/components/ListItem/shoppingList";
import { useShoppingStore } from "@/store/useShoppingStore";

export default function ShoppingClientPage() {
  // Get store state and actions
  const items = useShoppingStore((state) => state.items);
  const addItem = useShoppingStore((state) => state.addItem);
  const toggleItem = useShoppingStore((state) => state.toggleItem);
  const deleteItem = useShoppingStore((state) => state.deleteItem);
  const hasHydrated = useShoppingStore((state) => state._hasHydrated);

  return (
    <div className="relative z-10 pt-20 sm:pt-24 md:pt-26 lg:pt-30 p-8 sm:p-12 md:p-16 lg:p-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-100 mb-8 mt-[-3rem]">
          Lista de Compras
        </h1>
        <ShoppingForm onAddItem={addItem} />
        <div className="my-8 h-px bg-gray-500" /> {/* Divider */}
        {/* Show loading while hydrating from localStorage */}
        {!hasHydrated ? (
          <div className="flex items-center justify-center py-12">
            <div className="text-gray-300 text-lg">Carregando lista...</div>
          </div>
        ) : (
          <ShoppingList
            items={items}
            onToggle={toggleItem}
            onDelete={deleteItem}
          />
        )}
      </div>
    </div>
  );
}
