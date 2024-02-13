import { UpdateProductDTO } from "../dtos/product.dto";
import { Category } from "../models/category.model.ts";
import { Product } from "../models/product.model.ts";
import axios from "axios";

export class BaseHttpService<TypeClass> {
  // data: TypeClass[] = [];
  constructor(
    protected _url: string
  ) {}

  async getAll(): Promise<TypeClass[]> {
    const { data } = await axios.get<TypeClass[]>(this._url);
    return data;
  }

  async update<ID, DTO>(id: ID, changes: DTO) {
    const { data } = await axios.put<TypeClass>(`${this._url}/${id}`, changes);
    return data;
  }
}

const url1 = 'https://api.escuelajs.co/api/v1/products';
const productService = new BaseHttpService<Product>(url1);
productService.update<Product['id'], UpdateProductDTO>(1, { title: 'new title' });

productService.getAll()
  .then(products => {
    console.log(products.length);
    console.log(products[0]);

  });

const url2 = 'https://api.escuelajs.co/api/v1/categories';
const categoryService = new BaseHttpService<Category>(url2);

categoryService.getAll()
  .then(categories => {
    console.log(categories.length);
    console.log(categories[0]);

  });
