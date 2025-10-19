"use client";

import { useState } from "react";
import { MoreVertical, Trash2, Pencil, Loader2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
// Removido AlertDialog imports
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { SelectCategory } from "../ListForm/SelectCategory";
import { QuantityInput } from "../ListForm/quantityInput";
import { ShoppingItemProps } from "@/types/itemProps";

// Props for the ItemActions component
interface ItemActionsProps {
  item: ShoppingItemProps;
  onEdit: (
    id: number,
    updatedItem: Omit<ShoppingItemProps, "id" | "checked">
  ) => Promise<void>;
  onDelete: (id: number) => Promise<void>;
}

export function ItemActions({ item, onEdit, onDelete }: ItemActionsProps) {
  const [editOpen, setEditOpen] = useState(false);
  const [deleteAlertOpen, setDeleteAlertOpen] = useState(false);
  const [name, setName] = useState(item.name);
  const [quantity, setQuantity] = useState(item.quantity);
  const [unit, setUnit] = useState(item.unit.toUpperCase());
  const [category, setCategory] = useState(item.category);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  // Reset form when edit dialog opens
  const handleEditOpen = () => {
    setName(item.name);
    setQuantity(item.quantity);
    setUnit(item.unit.toUpperCase());
    setCategory(item.category);
    setEditOpen(true);
  };

  // Handle save edit
  const handleSaveEdit = async () => {
    if (!name.trim() || !category || quantity <= 0) {
      alert("Por favor, preencha todos os campos corretamente.");
      return;
    }
    setIsEditing(true);
    try {
      await Promise.resolve(
        onEdit(item.id, {
          name: name.trim(),
          quantity: Number(quantity),
          unit: unit.toLowerCase(),
          category,
        })
      );
      setEditOpen(false);
    } catch (error) {
      console.error("Error saving edit:", error);
    } finally {
      setIsEditing(false);
    }
  };

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await onDelete(item.id);
      setDeleteAlertOpen(false);
    } catch (error) {
      console.error("Error deleting item:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <>
      <DropdownMenu>
        {/* Trigger button for dropdown menu */}
        <DropdownMenuTrigger asChild>
          <Button className="p-0 bg-transparent hover:bg-gray-500 border-none">
            <MoreVertical className="h-4 w-4 text-gray-200" />
          </Button>
        </DropdownMenuTrigger>

        {/* Dropdown menu content */}
        <DropdownMenuContent className="w-48 border-1 border-purple-light bg-gray-600 p-1">
          {/* Edit option */}
          <DropdownMenuItem
            onSelect={handleEditOpen}
            disabled={isEditing}
            className="cursor-pointer flex items-center gap-2 text-white hover:!text-white hover:bg-gray-400 focus:bg-gray-400 focus:!text-white"
          >
            <Pencil className="h-4 w-4 text-purple-light" />
            Editar
          </DropdownMenuItem>

          {/* Delete option with dialog */}
          <Dialog open={deleteAlertOpen} onOpenChange={setDeleteAlertOpen}>
            <DropdownMenuItem
              onSelect={(e) => {
                e.preventDefault();
                setDeleteAlertOpen(true);
              }}
              disabled={isDeleting}
              className="cursor-pointer flex items-center gap-2 text-white hover:!text-white hover:bg-gray-400 focus:bg-gray-400 focus:!text-white"
            >
              <Trash2 className="h-4 w-4 text-purple-light" />
              Excluir
            </DropdownMenuItem>
            <DialogContent className="bg-gray-600 border-gray-400 text-gray-100 max-w-sm">
              <DialogHeader>
                <DialogTitle className="text-xl">Tem certeza que deseja excluir?</DialogTitle>
                <DialogDescription className="text-gray-200">
                  Esta ação irá remover permanentemente o item <b>{item.name}</b> da sua lista de compras.
                </DialogDescription>
              </DialogHeader>
              <div className="flex gap-3 justify-end mt-6">
                <Button
                  variant="outline"
                  onClick={() => setDeleteAlertOpen(false)}
                  className="bg-gray-500 hover:bg-gray-400 border-none text-gray-100 px-3"
                  disabled={isDeleting}
                >
                  Cancelar
                </Button>
                <Button
                  onClick={handleDelete}
                  disabled={isDeleting}
                  className="border border-gray-300 hover:bg-purple-light bg-purple text-white"
                >
                  {isDeleting ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    "Sim, Excluir"
                  )}
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Edit Dialog */}
      <Dialog open={editOpen} onOpenChange={setEditOpen}>
        <DialogContent className="bg-gray-600 border-gray-400 text-gray-100">
          <DialogHeader>
            <DialogTitle className="text-xl">Editar Item</DialogTitle>
            <DialogDescription className="text-gray-200">
              Faça as alterações necessárias no item da sua lista.
            </DialogDescription>
          </DialogHeader>

          {/* Edit form fields */}
          <div className="space-y-4 py-4">
            {/* Item name */}
            <div className="flex flex-col">
              <label>Item</label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="p-2"
              />
            </div>

            <div className="flex gap-4 w-full">
              {/* Quantity and unit */}
              <div className="flex flex-col w-2/5">
                <label>Quantidade</label>
                <QuantityInput
                  quantityValue={quantity}
                  onQuantityChange={(e) => setQuantity(Number(e.target.value))}
                  unitValue={unit}
                  onUnitChange={setUnit}
                  isFilter={true}
                />
              </div>

              {/* Category */}
              <div className="flex flex-col w-3/5">
                <SelectCategory value={category} onValueChange={setCategory} />
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setEditOpen(false)}
              className="bg-gray-500 hover:bg-gray-400 border-gray-300 text-gray-100 px-3"
            >
              Cancelar
            </Button>
            <Button
              onClick={handleSaveEdit}
              className="bg-purple-light hover:bg-purple-dark text-white px-3"
            >
              {isEditing ? "Salvando..." : "Salvar"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
