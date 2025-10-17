"use client";

import * as React from 'react';
import { useState } from 'react';
import ShoppingItem from './shoppingItem';
import { ShoppingItemProps } from '@/types/itemProps';


const initialList: ShoppingItemProps[] = [
  { id: '1', name: 'Maçã', quantity: '2', unit: 'unidades', category: 'fruta', isCompleted: false },
  { id: '2', name: 'Pão francês', quantity: '4', unit: 'unidades', category: 'padaria', isCompleted: false },
  { id: '3', name: 'Brócolis', quantity: '1', unit: 'unidade', category: 'legume', isCompleted: false },
  { id: '4', name: 'Leite', quantity: '2', unit: 'litros', category: 'bebida', isCompleted: false },
  { id: '5', name: 'Peito de Frango', quantity: '2', unit: 'kg', category: 'carne', isCompleted: true },
];

export function ShoppingList() {
  const [items, setItems] = useState<ShoppingItemProps[]>(initialList);

  const handleAddItem = (newItemData: Omit<ShoppingItemProps, 'id' | 'isCompleted'>) => {
    const newItem: ShoppingItemProps = {
      ...newItemData,
      id: Date.now().toString(),
      isCompleted: false,
      quantity: `${newItemData.quantity} ${newItemData.unit.toLowerCase()}${newItemData.quantity !== '1' ? 's' : ''}`, 
    };
    setItems(prevItems => [newItem, ...prevItems]);
  };

  const handleToggle = (id: string, completed: boolean) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, isCompleted: completed } : item
      )
    );
  };

  const handleDelete = (id: string) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  };
  
  const activeItems = items.filter(item => !item.isCompleted);
  const completedItems = items.filter(item => item.isCompleted);


  return (
    <div className="space-y-4">
      
      <div className="space-y-3">
        {activeItems.map((item) => (
          <ShoppingItem 
            key={item.id}
            item={item}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        ))}
      </div>

      {/* Separador e Título para Itens Completos, se houver */}
      {completedItems.length > 0 && (
        <div className="pt-4 border-t border-gray-500">
          <h2 className="text-xl font-semibold text-gray-300 mb-4">Comprados ({completedItems.length})</h2>
          <div className="space-y-3">
            {completedItems.map((item) => (
              <ShoppingItem
                key={item.id}
                item={item}
                onToggle={handleToggle}
                onDelete={handleDelete}
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