import * as React from "react";
import { categories } from "@/lib/category";

interface CategorySelectFilterProps {
  value: string;
  onChange: (value: string) => void;
}

export const CategorySelectFilter: React.FC<CategorySelectFilterProps> = ({
  value,
  onChange,
}) => {
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");

  // filter categories based on search input
  const filteredCategories = categories.filter((cat) =>
    cat.label.toLowerCase().includes(search.toLowerCase())
  );

  // Close dropdown on selection
  const handleSelect = (val: string) => {
    onChange(val);
    setOpen(false);
    setSearch("");
  };

  // selected category data
  const selected = categories.find((cat) => cat.value === value);

  return (
    <div className="relative w-full min-w-[160px]">
      <button
        type="button"
        className={`w-full flex items-center justify-between p-2 h-9 rounded-md border-[2px] bg-gray-500 text-gray-200 border-gray-300  focus:outline-none focus:ring-2 focus:ring-purple transition-colors ${
          open ? "ring-2 ring-purple" : ""
        }`}
        onClick={() => setOpen((o) => !o)}
      >
        <span className="flex items-center gap-2 text-gray-200">
          {selected ? <selected.icon className="w-4 h-4" /> : null}
          {selected ? selected.label : "Selecione categoria"}
        </span>
      </button>
      {open && (
        <div className="absolute z-20 mt-2 w-full bg-gray-600 border border-gray-400 rounded-md shadow-lg p-2">
          <input
            type="text"
            placeholder="Buscar categoria..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full mb-2 px-2 py-1 rounded bg-gray-500 text-gray-100 border border-gray-400 focus:outline-none"
            autoFocus
          />
          <button
            type="button"
            onClick={() => handleSelect("")}
            className={`w-full flex items-center gap-2 px-3 py-2 rounded hover:bg-purple-light hover:text-white text-sm ${
              value === "" ? "bg-purple text-white" : "text-gray-200"
            }`}
          >
            Todas
          </button>
          {filteredCategories.length === 0 && (
            <div className="text-gray-400 text-sm px-3 py-2">
              Nenhuma categoria
            </div>
          )}
          {filteredCategories.map((cat) => (
            <button
              key={cat.value}
              type="button"
              onClick={() => handleSelect(cat.value)}
              className={`w-full flex items-center gap-2 px-3 py-2 rounded hover:bg-purple-light hover:text-white text-sm ${
                value === cat.value ? "bg-purple text-white" : "text-gray-200"
              }`}
            >
              <cat.icon className="w-4 h-4" />
              {cat.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
