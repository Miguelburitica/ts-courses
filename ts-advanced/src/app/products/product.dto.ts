import { Category } from "../category/category.model";
import { Product } from "../products/product.model";


export interface CreateProductDTO extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: Category['id'];
}

type example = Pick<Product, 'title' | 'stock'>;

export interface UpdateProductDTO extends Partial<CreateProductDTO>, Pick<Product, 'updatedAt'> {}

type example2 = Required<Product>;

export interface FindProductDTO extends Readonly<Partial<Omit<Product, 'tags'>>> {
  readonly tags?: ReadonlyArray<string>;
}

