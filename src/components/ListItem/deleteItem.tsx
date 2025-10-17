"use client";

import { useState } from "react";
import { MoreVertical, Trash2, Pencil } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
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
  onEdit: (id: string, updatedItem: Omit<ShoppingItemProps, "id" | "isCompleted">) => void;
  onDelete: (id: string) => void;
}

export function ItemActions({ item, onEdit, onDelete }: ItemActionsProps) {
  const [editOpen, setEditOpen] = useState(false);
  const [name, setName] = useState(item.name);
  const [quantity, setQuantity] = useState(item.quantity);
  const [unit, setUnit] = useState(item.unit);
  const [category, setCategory] = useState(item.category);

  // Reset form when edit dialog opens
  const handleEditOpen = () => {
    setName(item.name);
    setQuantity(item.quantity);
    setUnit(item.unit);
    setCategory(item.category);
    setEditOpen(true);
  };

  // Handle save edit
  const handleSaveEdit = () => {
    if (!name.trim() || !category || parseFloat(quantity) <= 0) {
      alert("Por favor, preencha todos os campos corretamente.");
      return;
    }

    onEdit(item.id, {
      name: name.trim(),
      quantity,
      unit,
      category,
    });

    setEditOpen(false);
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
            className="cursor-pointer flex items-center gap-2 text-white hover:!text-white hover:bg-gray-400 focus:bg-gray-400 focus:!text-white"
          >
            <Pencil className="h-4 w-4 text-purple-light" />
            Editar
          </DropdownMenuItem>

          {/* Delete option with alert dialog */}
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <DropdownMenuItem
                onSelect={(e) => e.preventDefault()}
                className="cursor-pointer flex items-center gap-2 text-white hover:!text-white hover:bg-gray-400 focus:bg-gray-400 focus:!text-white"
              >
                <Trash2 className="h-4 w-4 text-purple-light" />
                Excluir
              </DropdownMenuItem>
            </AlertDialogTrigger>

            {/* Alert dialog content */}
            <AlertDialogContent className="bg-gray-600 border-gray-400 text-gray-100">
              <AlertDialogHeader>
                <AlertDialogTitle className="text-xl">
                  Tem certeza que deseja excluir?
                </AlertDialogTitle>
                
                <AlertDialogDescription>
                  Esta ação irá remover permanentemente o item *{item.name}* da sua
                  lista de compras.
                </AlertDialogDescription>
              </AlertDialogHeader>

              <AlertDialogFooter>
                <AlertDialogCancel className="bg-gray-500 hover:bg-gray-400 border-none text-gray-100">
                  Cancelar
                </AlertDialogCancel>
                <AlertDialogAction
                  onClick={() => onDelete(item.id)}
                  className="border border-gray-300 hover:bg-purple-light bg-purple text-white"
                >
                  Sim, Excluir
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Edit Dialog */}
      <Dialog open={editOpen} onOpenChange={setEditOpen}>
        <DialogContent className="bg-gray-600 border-gray-400 text-gray-100">
          <DialogHeader>
            <DialogTitle className="text-xl">Editar Item</DialogTitle>
            <DialogDescription className="text-gray-300">
              Faça as alterações necessárias no item da sua lista.
            </DialogDescription>
          </DialogHeader>
          
          {/* Edit form fields */}
          <div className="space-y-4 py-4">
            {/* Item name */}
            <div className="flex flex-col">
              <label className="text-gray-200 text-sm mb-1">Item</label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-gray-500 border-gray-400"
              />
            </div>

            {/* Quantity and unit */}
            <div className="flex flex-col">
              <label className="text-gray-200 text-sm mb-1">Quantidade</label>
              <QuantityInput
                quantityValue={quantity}
                onQuantityChange={(e) => setQuantity(e.target.value)}
                unitValue={unit}
                onUnitChange={setUnit}
              />
            </div>

            {/* Category */}
            <SelectCategory value={category} onValueChange={setCategory} />
          </div>

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setEditOpen(false)}
              className="bg-gray-500 hover:bg-gray-400 border-gray-300 text-gray-100"
            >
              Cancelar
            </Button>
            <Button
              onClick={handleSaveEdit}
              className="bg-purple-light hover:bg-purple-dark text-white"
            >
              Salvar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
