import { ShoppingItemProps } from "@/types/itemProps";
import { Checkbox } from "../ui/checkbox";
import Tag from "./tag";
import { ItemActions } from "./deleteItem";

interface ShoppingItemComponentProps {
  item: ShoppingItemProps;
  onToggle: (id: string, completed: boolean) => void;
  onDelete: (id: string) => void;
}

export default function ShoppingItem({ item, onToggle, onDelete }: ShoppingItemComponentProps) {
  const handleCheckboxChange = (checked: boolean) => {
    onToggle(item.id, checked);
  };

  return (
    <div className="w-full">
      <div className={`flex items-center gap-3 rounded-lg bg-gray-400 p-4 text-white transition-opacity ${item.isCompleted ? 'opacity-60' : 'opacity-100'}`}>
        <Checkbox 
          className="shrink-0" 
          checked={item.isCompleted}
          onCheckedChange={handleCheckboxChange}
        />

        <div className="flex min-w-0 flex-1 flex-col">
          <span className={`truncate font-medium ${item.isCompleted ? 'line-through' : ''}`}>
            {item.name}
          </span>
          <span className="text-sm text-gray-200">
            {item.quantity}
          </span>
        </div>

        <div className="shrink-0 flex-row items-center gap-1 flex">
          <Tag category={item.category} />
          <ItemActions 
            itemId={item.id} 
            itemName={item.name} 
            onDelete={onDelete}
          />
        </div>
      </div>
    </div>
  );
}
