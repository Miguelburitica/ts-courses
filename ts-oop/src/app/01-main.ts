import axios from "axios";
import { Product } from "./models/product.model.ts";

(async () => {
  async function getProducts() {
    const { data } = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products');
    return data;
  }
  console.log('Before getProducts');
  const productsAsync = await getProducts();
  productsAsync.map((product: Product) => {
    console.log('product ---->', `${product.title} - ${product.price}`);
  })
})();
