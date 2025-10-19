import { ShoppingItemProps } from "@/types/itemProps";
import { Checkbox } from "../ui/checkbox";
import Tag from "./tag";
import { ItemActions } from "./itemActions";
import unitType from "@/utils/unit/unitType";

// Defines the properties for the ShoppingItem component with onFunctions to toggle completion, edit, and delete the item
interface ShoppingItemComponentProps {
  item: ShoppingItemProps;
  onToggle: (id: number, completed: boolean) => void;
  onEdit: (id: number, updatedItem: Omit<ShoppingItemProps, "id" | "checked">) => Promise<void>;
  onDelete: (id: number) => Promise<void>;
}

export default function ShoppingItem({ item, onToggle, onEdit, onDelete }: ShoppingItemComponentProps) {
  const handleCheckboxChange = (checked: boolean) => {
    onToggle(item.id, checked);
  };

  return (
      <div className={`flex w-full items-center gap-3 rounded-lg bg-gray-400 p-4 text-white transition-all duration-200 ${item.checked ? 'opacity-60' : 'opacity-100'}`}>
        {/* Checkbox to mark item as completed */}
        <Checkbox 
          className="shrink-0" 
          checked={item.checked}
          onCheckedChange={handleCheckboxChange}
        />

        {/* Item name and quantity */}
        <div className="flex min-w-0 flex-1 flex-col gap-0.5">
          <span className={`truncate font-medium transition-all ${item.checked ? 'line-through text-gray-200' : 'text-white'}`}>
            {item.name}
          </span>
          <span className="text-sm text-gray-200">
            {`${unitType(item.unit, item.quantity)}`}
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
