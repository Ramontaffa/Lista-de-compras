import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { ShoppingItemProps } from "@/types/itemProps";

interface ShoppingStore {
  items: ShoppingItemProps[];
  _hasHydrated: boolean;
  setHasHydrated: (state: boolean) => void;
  addItem: (item: Omit<ShoppingItemProps, "id" | "isCompleted">) => void;
  editItem: (id: string, item: Omit<ShoppingItemProps, "id" | "isCompleted">) => void;
  toggleItem: (id: string, completed: boolean) => void;
  deleteItem: (id: string) => void;
}

const initialItems: ShoppingItemProps[] = [
  {
    id: "1",
    name: "Maçã",
    quantity: "2",
    unit: "UN",
    category: "Fruta",
    isCompleted: false,
  },
  {
    id: "2",
    name: "Pão francês",
    quantity: "4",
    unit: "UN",
    category: "Padaria",
    isCompleted: false,
  },
  {
    id: "3",
    name: "Brócolis",
    quantity: "1",
    unit: "UN",
    category: "Legume",
    isCompleted: false,
  },
];

export const useShoppingStore = create<ShoppingStore>()(
  persist(
    (set) => ({
      items: initialItems,
      _hasHydrated: false,

      setHasHydrated: (state) => {
        set({ _hasHydrated: state });
      },

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

      editItem: (id, itemData) => {
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id 
              ? { ...item, ...itemData } 
              : item
          ),
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
      name: "shopping-list-storage",
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);
