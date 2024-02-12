import { randBoolean, randColor, randImg, randNumber, randProductDescription, randProductName, randUuid, random } from "@ngneat/falso";
import { addProduct, findProducts, products, updateProduct } from "./products/product.service";

const addedProduct = addProduct({
  title: randProductName(),
  stock: randNumber(),
  categoryId: randUuid(),
  color: randColor(),
  description: randProductDescription(),
  image: randImg(),
  isNew: randBoolean(),
  price: randNumber(),
  tags: [randProductName(), randProductName()],
})

console.log({ products, addedProduct });

const product = products[0];
updateProduct(product.id, {
  title: randProductName(),
  stock: randNumber(),
  updatedAt: new Date(),
});

findProducts({
  stock: 10,
  color: 'red',
  tags: ['tag1', 'tag2'],
});
