import { Product } from "./product.model";

export const products: Product[] = [];

export function addProduct(productData: Product) {
  products.push(productData);
}

export const calcStock = (): number => {
  let totalStock = 0;
  products.forEach((product) => {
    totalStock += product.stock;
  });

  return totalStock;
}
