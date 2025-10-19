// Defines the properties of a shopping item
export interface ShoppingItemProps {
  id: number;
  name: string;
  quantity: number;
  unit: string;
  category: string;
  checked?: boolean;
}