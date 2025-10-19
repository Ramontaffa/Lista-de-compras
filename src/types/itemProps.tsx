// Defines the properties of a shopping item
export interface ShoppingItemProps {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  category: string;
  checked?: boolean;
}