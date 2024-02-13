import axios from "axios";

(async () => {
  function delay(ms: number) {
    const promise = new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve('true');
      }, ms);
    })

    return promise;
  }

  async function getProducts() {
    return axios.get('https://api.escuelajs.co/api/v1/products');
  }

  async function getProductsAsync() {
    const response = await axios.get('https://api.escuelajs.co/api/v1/products');
    return response.data;
  }

  // console.log('Before delay');
  // const rta = await delay(0);
  // console.log('rta ---->', rta);

  console.log('Before getProducts');
  const products = await getProducts();
  console.log('products ---->', products);

  console.log('Before getProductsAsync');
  const productsAsync = await getProductsAsync();
  console.log('productsAsync ---->', productsAsync);
})();
