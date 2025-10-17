import { ShoppingItemProps } from "@/types/itemProps";
import { Checkbox } from "../ui/checkbox";
import Tag from "./tag";
import { ItemActions } from "./deleteItem";

// Defines the properties for the ShoppingItem component with onFunctions to toggle completion, edit, and delete the item
interface ShoppingItemComponentProps {
  item: ShoppingItemProps;
  onToggle: (id: string, completed: boolean) => void;
  onEdit: (id: string, updatedItem: Omit<ShoppingItemProps, "id" | "isCompleted">) => void;
  onDelete: (id: string) => void;
}

export default function ShoppingItem({ item, onToggle, onEdit, onDelete }: ShoppingItemComponentProps) {
  const handleCheckboxChange = (checked: boolean) => {
    onToggle(item.id, checked);
  };

  return (
      <div className={`flex w-full items-center gap-3 rounded-lg bg-gray-400 p-4 text-white transition-all duration-200 ${item.isCompleted ? 'opacity-60' : 'opacity-100'}`}>
        {/* Checkbox to mark item as completed */}
        <Checkbox 
          className="shrink-0" 
          checked={item.isCompleted}
          onCheckedChange={handleCheckboxChange}
        />

        {/* Item name and quantity */}
        <div className="flex min-w-0 flex-1 flex-col gap-0.5">
          <span className={`truncate font-medium transition-all ${item.isCompleted ? 'line-through text-gray-200' : 'text-white'}`}>
            {item.name}
          </span>
          <span className="text-sm text-gray-200">
            {`${item.quantity} ${item.quantity === "1" ? 'Unidade' : 'Unidades'}`}
          </span>
        </div>

        {/* Item category and actions */}
        <div className="shrink-0 flex items-center gap-1">
          <Tag category={item.category} />
          <ItemActions 
            item={item}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        </div>
      </div>
  );
}
