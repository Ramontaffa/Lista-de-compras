import { ItemProps } from "@/types/itemProps";
import { Checkbox } from "./ui/checkbox";
import Tag from "./tag";
import { ItemActions } from "./deleteItem";

export default function ItemList({ item }: { item: ItemProps }) {
  return (
    <div className="w-full">
      <div className="flex items-center gap-3 rounded-lg bg-gray-400 p-4 text-white">
        <Checkbox className="shrink-0" />

        <div className="flex min-w-0 flex-1 flex-col">
          <span className="truncate font-medium">{item.name}</span>
          <span className="text-sm text-gray-200">
            {item.quantity} {item.quantity === 1 ? "Unidade" : "Unidades"}
          </span>
        </div>

        <div className="shrink-0 flex-row items-center gap-1 flex">
          <Tag category={item.category} />
          <ItemActions itemId={item.id} itemName={item.name} onDelete={() => {}} />
        </div>
      </div>
    </div>
  );
}
