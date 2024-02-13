import { Category } from "../models/category.model.ts";
import { Product } from "../models/product.model.ts";


export interface CreateProductDTO extends Omit<Product, 'id' | 'category' | 'creationAt' | 'updatedAt'> {
  categoryId: Category['id'];
}

export interface UpdateProductDTO extends Partial<CreateProductDTO> {}
