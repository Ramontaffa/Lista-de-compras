"use client";

import * as React from "react";
import { ShoppingForm } from "@/components/ListForm/ShoppingForm";
import { ShoppingList } from "@/components/ListItem/shoppingList";
import { useShoppingStore } from "@/store/useShoppingStore";
import Image from "next/image";
import Cover from "@/assets/Cover.png";

export default function ShoppingPage() {
    const items = useShoppingStore((state) => state.items);
    const addItem = useShoppingStore((state) => state.addItem);
    const toggleItem = useShoppingStore((state) => state.toggleItem);
    const deleteItem = useShoppingStore((state) => state.deleteItem);
    const hasHydrated = useShoppingStore((state) => state._hasHydrated);

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

                    <ShoppingForm onAddItem={addItem} />

                    <div className="my-8 h-px bg-gray-500" />

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
        </div>
    );
}