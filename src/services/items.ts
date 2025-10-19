import api from "./api";
import { ShoppingItemProps } from "../types/itemProps";

export const getItems = async () => {
  const response = await api.get("items");
  return response.data;
};

export const addItem = async (item: Omit<ShoppingItemProps, "id">) => {
  const response = await api.post("items", item);
  return response.data;
};

export const deleteItem = async (id: number) => {
  const response = await api.delete(`items/${id}`);
  return response.data;
};

export const updateItem = async (id: number, item: Partial<ShoppingItemProps>) => {
  const response = await api.put(`items/${id}`, item);
  return response.data;
};