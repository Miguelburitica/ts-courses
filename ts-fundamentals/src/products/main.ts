import { addProduct, calcStock } from './product.service';

addProduct({
  title: 'Shirt',
  createAt: new Date(),
  stock: 10,
  size: 'M'
});

addProduct({
  title: 'Pants',
  createAt: new Date(),
  stock: 5,
  size: 'L'
});

console.log('Total stock:', calcStock());
