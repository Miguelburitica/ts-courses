import { CreateProductDTO, UpdateProductDTO } from "../dtos/product.dto.ts";
import { ProductService } from "../models/product-service.model.ts";
import { Product } from "../models/product.model.ts";
import { randImg, randNumber, randProductCategory } from '@ngneat/falso'


export class ProductMemoryService implements ProductService {
  private _products: Product[] = []

  getAll() {
    return this._products;
  }

  create(product: CreateProductDTO): Product {
    const categoryMatched = {
      id: product.categoryId,
      name: randProductCategory(),
      image: randImg(),
      creationAt: new Date(),
      updatedAt: new Date()
    }
    return this.add({
      ...product,
      id: randNumber(),
      category: categoryMatched,
      creationAt: new Date(),
      updatedAt: new Date()
    })
  }

  private add(newProduct: Product) {
    this._products.push(newProduct);
    return newProduct
  }

  update(id: Product['id'], changes: UpdateProductDTO): Product {
    const index = this._products.findIndex(product => product.id === id);
    const product = this._products[index];
    const updatedProduct = {
      ...product,
      ...changes,
      updatedAt: new Date()
    }

    this._products[index] = updatedProduct;
    return updatedProduct;
  }

  findOne(id: Product['id']) {
    return this._products.find(product => product.id === id);
  }
}
