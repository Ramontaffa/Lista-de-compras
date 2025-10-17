export interface ShoppingItemProps {
  id: string;
  name: string;
  quantity: string;
  unit: string;
  category: string;
  isCompleted: boolean;
  onToggle?: (id: string, completed: boolean) => void;
  onDelete?: (id: string) => void;
}