"use client";

import * as React from "react";
import { useState } from "react";
import { ShoppingForm } from "@/components/ListForm/ShoppingForm";
import { ShoppingList } from "@/components/ListItem/shoppingList";
import { ShoppingItemProps } from "@/types/itemProps";
import Image from "next/image";
import Cover from "@/assets/Cover.png";

const initialList: ShoppingItemProps[] = [
    { id: "1", name: "Maçã", quantity: "2 unidades", unit: "UN", category: "fruta", isCompleted: false },
    { id: "2", name: "Pão francês", quantity: "4 unidades", unit: "UN", category: "padaria", isCompleted: false },
    { id: "3", name: "Brócolis", quantity: "1 unidade", unit: "UN", category: "legume", isCompleted: false },
];

export default function ShoppingPage() {
    const [items, setItems] = useState<ShoppingItemProps[]>(initialList);

    const handleAddItem = (
        newItemData: Omit<ShoppingItemProps, "id" | "isCompleted">
    ) => {
        const newItem: ShoppingItemProps = {
            ...newItemData,
            id: crypto.randomUUID(),
            isCompleted: false,
            quantity: `${newItemData.quantity} ${newItemData.unit.toLowerCase()}${newItemData.quantity !== '1' ? 's' : ''}`, 
        };
        
        setItems((prevItems) => [newItem, ...prevItems]);
    };

    const handleToggle = (id: string, completed: boolean) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, isCompleted: completed } : item
            )
        );
    };

    const handleDelete = (id: string) => {
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    return (
        <div className="min-h-screen bg-gray-600 relative overflow-hidden">
            
            <div className="absolute left-0 top-0 w-full h-[300px] sm:h-[400px] z-0">
                <Image
                    src={Cover}
                    alt="Background Image"
                    priority
                    className="object-cover object-center" 
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-gray-600 to-gray-600/50"></div>
            </div>

            <div className="relative z-10 pt-20 sm:pt-24 md:pt-32 lg:pt-40 p-4 sm:p-8 md:p-10 lg:p-12">
                <div className="max-w-4xl mx-auto">
                    
                    <h1 className="text-4xl font-bold text-gray-100 mb-8 mt-[-3rem]">
                        Lista de Compras
                    </h1>

                    <ShoppingForm onAddItem={handleAddItem} />

                    <div className="my-8 h-px bg-gray-500" />

                    <ShoppingList
                        items={items}
                        onToggle={handleToggle}
                        onDelete={handleDelete}
                    />
                </div>
            </div>
        </div>
    );
}