import { TagIcon, getTagColor } from "@/utils";

interface TagProps {
  category: string;
}

export default function Tag({ category }: TagProps) {
  return (
    <div>
      <span className={`flex flex-row items-center px-4 py-2 rounded-full gap-2 ${getTagColor(category)}`}>
        <TagIcon category={category} />
        {category}
      </span>
    </div>
  );
}
