import { BaseModel } from "../base.model";
import { Category } from "../category/category.model";

export type Sizes = 's' | 'm' | 'l' | 'xl';
export interface Product extends BaseModel {
  title: string;
  image: string;
  description: string;
  stock: number;
  size?: Sizes;
  color: string;
  price: number;
  category: Category;
  isNew: boolean;
  tags: string[];
};
