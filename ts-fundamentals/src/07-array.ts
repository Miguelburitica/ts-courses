(() => {
  let prices = [100, 200, 300, 'hola', true];

  prices.push('lalaa')
  prices.push(false)
  // prices.push(null)

  // let products: (Object)[] = ['hola', true]
  let products: (string | boolean | number)[] = ['hola', true]
  products.push(12)
  for (const product of products) {
    if (typeof product === 'string') product.toUpperCase();
  }

  let numbers = [1, 2, 3, 4, 5];
  numbers.map((number) => number * 2);
})();
