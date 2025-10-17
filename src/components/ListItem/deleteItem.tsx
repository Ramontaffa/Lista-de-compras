"use client";

import { MoreVertical, Trash2 } from "lucide-react";
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

// Props for the ItemActions component
interface ItemActionsProps {
  itemId: string;
  itemName: string;
  onDelete: (id: string) => void;
}

export function ItemActions({ itemId, itemName, onDelete }: ItemActionsProps) {
  return (
    <DropdownMenu>
      {/* Trigger button for dropdown menu */}
      <DropdownMenuTrigger asChild>
        <Button className="p-0 bg-transparent hover:bg-gray-500 border-none">
          <MoreVertical className="h-4 w-4 text-gray-200" />
        </Button>
      </DropdownMenuTrigger>

      {/* Dropdown menu content */}
      <DropdownMenuContent className="w-48 border-1 border-purple-light bg-gray-600 p-1">
        <AlertDialog>
          {/* Trigger to open alert dialog */}
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
                Esta ação irá remover permanentemente o item *{itemName}* da sua
                lista de compras.
              </AlertDialogDescription>
            </AlertDialogHeader>

            <AlertDialogFooter>
              <AlertDialogCancel className="bg-gray-500 hover:bg-gray-400 border-none text-gray-100">
                Cancelar
              </AlertDialogCancel>
              <AlertDialogAction
                onClick={() => onDelete(itemId)}
                className="border border-gray-300 hover:bg-purple-light bg-purple text-white"
              >
                Sim, Excluir
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
