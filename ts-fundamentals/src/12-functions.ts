(() => {
  type Sizes = 's' | 'm' | 'l' | 'xl';

  function createProductToJson(
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes
    ) {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }

  const product1 = createProductToJson('Shirt', new Date(), 10, 's');
  console.log('product1', product1);

  const createProductToJsonV2 = (
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
    ) => {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }

  const product2 = createProductToJsonV2('Shirt', new Date(), 10);

})
