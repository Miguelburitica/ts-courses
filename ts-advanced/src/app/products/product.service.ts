import { CreateProductDTO, FindProductDTO, UpdateProductDTO } from "./product.dto";
import { Product } from "./product.model";
import { randUuid } from '@ngneat/falso'

export const products: Product[] = []

export const addProduct = (product: CreateProductDTO): Product => {
  const categoryMatched = {
    id: product.categoryId,
    createdAt: new Date(),
    updatedAt: new Date(),
    name: "Category 1"
  }
  const newProduct = {
    ...product,
    id: randUuid(),
    createdAt: new Date(),
    updatedAt: new Date(),
    category: categoryMatched
  }
  products.push(newProduct);
  return newProduct;
}

export const updateProduct = (id: Product['id'], changes: UpdateProductDTO): Product => {
  const index = products.findIndex(product => product.id === id);
  const product = products[index];
  const updatedProduct = {
    ...product,
    ...changes,
    updatedAt: new Date()
  }

  products[index] = updatedProduct;
  return updatedProduct;
}

export const findProducts = (dto: FindProductDTO): Product[] => {
  dto.tags?.push('tag1');
  return products
}
