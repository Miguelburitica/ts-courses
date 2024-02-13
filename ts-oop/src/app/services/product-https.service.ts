import axios from "axios";
import { CreateProductDTO, UpdateProductDTO } from "../dtos/product.dto.ts";
import { ProductService } from "../models/product-service.model.ts";
import { Product } from "../models/product.model.ts";

export class ProductHTTPSService implements ProductService {
  private _products: Product[] = []
  private _url: string = 'https://api.escuelajs.co/api/v1/products'

  async getAll() {
    const { data } = await axios.get<Product[]>(this._url);
    return data;
  }

  async update(id: Product['id'], changes: UpdateProductDTO) {
    const { data } = await axios.put<Product>(`${this._url}/${id}`, changes);
    return data;
  }

  async create(dto: CreateProductDTO) {
    const { data } = await axios.post<Product>(this._url, dto);
    return data;
  }

  async findOne(id: Product['id']) {
    const { data } = await axios.get<Product>(`${this._url}/${id}`);
    return data;
  }
}
