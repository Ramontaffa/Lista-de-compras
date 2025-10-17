import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ShoppingItemProps } from '@/types/itemProps';

interface ShoppingStore {
  items: ShoppingItemProps[];
  addItem: (item: Omit<ShoppingItemProps, 'id' | 'isCompleted'>) => void;
  toggleItem: (id: string, completed: boolean) => void;
  deleteItem: (id: string) => void;
}

const initialItems: ShoppingItemProps[] = [
  {
    id: "1",
    name: "Maçã",
    quantity: "2",
    unit: "UN",
    category: "fruta",
    isCompleted: false,
  },
  {
    id: "2",
    name: "Pão francês",
    quantity: "4",
    unit: "UN",
    category: "padaria",
    isCompleted: false,
  },
  {
    id: "3",
    name: "Brócolis",
    quantity: "1",
    unit: "UN",
    category: "legume",
    isCompleted: false,
  },
];

export const useShoppingStore = create<ShoppingStore>()(
  persist(
    (set) => ({
      items: initialItems,

      addItem: (itemData) => {
        const newItem: ShoppingItemProps = {
          ...itemData,
          id: crypto.randomUUID(),
          isCompleted: false,
        };
        
        set((state) => ({
          items: [newItem, ...state.items],
        }));
      },

      toggleItem: (id, completed) => {
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item, isCompleted: completed } : item
          ),
        }));
      },

      deleteItem: (id) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        }));
      },
    }),
    {
      name: 'shopping-list-storage',
    }
  )
);
