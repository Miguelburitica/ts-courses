import { Product } from "../models/product.model";
import { BaseHttpService } from "./base-http.service";

export class ProductHttpService extends BaseHttpService<Product> {
  request() {
    this._url;
  }
}
