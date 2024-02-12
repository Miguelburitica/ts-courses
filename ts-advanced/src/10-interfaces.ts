type Sizes = 's' | 'm' | 'l' | 'xl';
// type Product = {
//   id: string | number;
//   title: string;
//   createdAt: Date;
//   stock: number;
//   size?: Sizes;
// };

interface Product {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  size?: Sizes;
};

const products: Product[] = [];

products.push({
  id: 1,
  title: "Product 1",
  createdAt: new Date(),
  stock: 10,
  size: 'm',
});

function addProduct(product: Product) {
  products.push(product);
}
