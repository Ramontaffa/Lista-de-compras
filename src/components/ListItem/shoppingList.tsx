"use client";

import * as React from "react";
import { useMemo } from "react";
import ShoppingItem from "./shoppingItem";
import { ShoppingItemProps } from "@/types/itemProps";

interface ShoppingListProps {
  items: ShoppingItemProps[];
  onToggle: (id: number, completed: boolean) => void;
  onEdit: (id: number, updatedItem: Omit<ShoppingItemProps, "id" | "checked">) => Promise<void>;
  onDelete: (id: number) => Promise<void>;
}

export function ShoppingList({ items, onToggle, onEdit, onDelete }: ShoppingListProps) {
  // optimize filtering with useMemo
  const { activeItems, completedItems } = useMemo(
    () => ({
      activeItems: items.filter((item) => !item.checked),
      completedItems: items.filter((item) => item.checked),
    }),
    [items]
  );

  return items.length === 0 ? (
    <p className="text-white text-center py-8">
      Sua lista está vazia. Adicione um item!
    </p>
  ) : (
    <div className="space-y-4">
      <div className="space-y-3">
        {activeItems.length === 0 ? (
          <p className="text-gray-300 text-center py-6">
            Todos os itens foram comprados!
          </p>
        ) : (
          activeItems.map((item) => (
            <ShoppingItem
              key={item.id}
              item={item}
              onToggle={onToggle}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))
        )}
      </div>

      {completedItems.length > 0 && (
        <div className="pt-4 border-t border-gray-500">
          <h2 className="text-xl font-semibold text-gray-300 mb-4">
            Comprados ({completedItems.length})
          </h2>
          <div className="space-y-3">
            {completedItems.map((item) => (
              <ShoppingItem
                key={item.id}
                item={item}
                onToggle={onToggle}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
