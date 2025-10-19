'use client';
import { ShoppingItemProps } from "@/types/itemProps";
import { useEffect, useState, useCallback } from "react";
import { getItems, addItem, updateItem, deleteItem } from "@/services/items";

interface ShoppingStore {
  items: ShoppingItemProps[];
  _hasHydrated: boolean;
  setHasHydrated: (state: boolean) => void;
  handleAddItem: (item: Omit<ShoppingItemProps, "id" | "checked">) => Promise<void>;
  handleEditItem: (id: number, item: Omit<ShoppingItemProps, "id" | "checked">) => Promise<void>;
  handleToggleItem: (id: number, completed: boolean) => Promise<void>;
  handleDeleteItem: (id: number) => Promise<void>;
}

export function useShoppingStore(): ShoppingStore {
  const [items, setItems] = useState<ShoppingItemProps[]>([]);
  const [_hasHydrated, setHasHydrated] = useState(false);

  // Fetch items from API on mount
  useEffect(() => {
    getItems().then((data) => {
      setItems(data);
      setHasHydrated(true);
    });
  }, []);

  const handleAddItem = useCallback(async (itemData: Omit<ShoppingItemProps, "id" | "checked">) => {
    try {
      const newItem = await addItem(itemData);
      setItems((prev) => [newItem, ...prev]);
    } catch (error) {
      console.error("Error adding item:", error);
    }
  }, []);

  const handleEditItem = useCallback(async (id: number, itemData: Omit<ShoppingItemProps, "id" | "checked">) => {
    try {
      const updatedItem = await updateItem(id, itemData);
      setItems((prev) =>
        prev.map((item) => (item.id === id ? updatedItem : item))
      );
    } catch (error) {
      console.error("Error updating item:", error);
    }
  }, []);

  const handleToggleItem = useCallback(async (id: number, completed: boolean) => {
    try {
      const updatedItem = await updateItem(id, { checked: completed });
      setItems((prev) =>
        prev.map((item) => (item.id === id ? updatedItem : item))
      );
    } catch (error) {
      console.error("Error toggling item:", error);
    }
  }, []);

  const handleDeleteItem = useCallback(async (id: number) => {
    try {
      await deleteItem(id);
      setItems((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  }, []);

  return {
    items,
    _hasHydrated,
    setHasHydrated,
    handleAddItem,
    handleEditItem,
    handleToggleItem,
    handleDeleteItem
  };
}
