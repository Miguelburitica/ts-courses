import { Product } from "./product.model.ts";
import { CreateProductDTO, UpdateProductDTO } from "../dtos/product.dto.ts";

export interface ProductService {
  getAll(): Product[] | Promise<Product[]>;
  update(id: Product['id'], changes: UpdateProductDTO): Product | Promise<Product>;
  create(product: CreateProductDTO): Product | Promise<Product>;
  findOne(id: Product['id']): Product | undefined | Promise<Product | undefined>;
}
