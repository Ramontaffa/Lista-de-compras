"use client";

import * as React from 'react';
import { useMemo } from 'react';
import ShoppingItem from './shoppingItem';
import { ShoppingItemProps } from '@/types/itemProps';

interface ShoppingListProps {
  items: ShoppingItemProps[];
  onToggle: (id: string, completed: boolean) => void;
  onDelete: (id: string) => void;
}

export function ShoppingList({ items, onToggle, onDelete }: ShoppingListProps) {
  // Otimiza o filtro para não recalcular em cada render
  const { activeItems, completedItems } = useMemo(() => ({
    activeItems: items.filter(item => !item.isCompleted),
    completedItems: items.filter(item => item.isCompleted),
  }), [items]);

  return (
    <div className="space-y-4">
      <div className="space-y-3">
        {activeItems.map((item) => (
          <ShoppingItem 
            key={item.id}
            item={item}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
      </div>

      {completedItems.length > 0 && (
        <div className="pt-4 border-t border-gray-500">
          <h2 className="text-xl font-semibold text-gray-300 mb-4">Comprados ({completedItems.length})</h2>
          <div className="space-y-3">
            {completedItems.map((item) => (
              <ShoppingItem
                key={item.id}
                item={item}
                onToggle={onToggle}
                onDelete={onDelete}
              />
            ))}
          </div>
        </div>
      )}
      
      {items.length === 0 && (
        <p className="text-gray-400 text-center py-8">Sua lista está vazia. Adicione um item!</p>
      )}
    </div>
  );
}