import { Category } from "./category";

export interface ProductsType {
  id: number;
  title: string;
  price: number;
  description?: string;
  images?: [string];
  createdAt?: string;
  updatedAt?: string;
  category: Category;
}
