import { UpdateProductDTO } from "../dtos/product.dto";
import { Product } from "../models/product.model";
import { BaseHttpService } from "./base-http.service";
import { ProductHttpService } from "./product-http2.service";

export class ProductCRUDService {
  private _url = 'https://api.escuelajs.co/api/v1/products';
  private http = new ProductHttpService(this._url);

  async update(id: Product['id'], dto: UpdateProductDTO) {
    return this.http.update(id, dto);
  }
}
