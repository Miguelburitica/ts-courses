import { ProductHTTPSService } from "./services/product-https.service.ts";

(async () => {
  const serviceHttp = new ProductHTTPSService();

  console.log('Before getAll');
  const products = await serviceHttp.getAll();
  console.log('first product ---->', products[0]);
  console.log(products.map(product => product.title));

  const productId = products[0].id;
  console.log('Before update');
  const productUpdated = await serviceHttp.update(productId, {
    title: 'My Product Updated'
  });

  console.log('productUpdated ---->', productUpdated);
})();
