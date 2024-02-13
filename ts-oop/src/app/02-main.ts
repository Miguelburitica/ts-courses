import { ProductMemoryService } from "./services/product-memory.service.ts";

const productService: ProductMemoryService = new ProductMemoryService();

productService.create({
  title: 'My Product',
  price: 100,
  description: 'My Product Description',
  categoryId: 1,
  images: ['https://via.placeholder.com/150']
})

const products = productService.products;
console.log(products);

const productId = products[0].id;
productService.update(productId, {
  title: 'My Product Updated'
})
console.log(productService.products);

