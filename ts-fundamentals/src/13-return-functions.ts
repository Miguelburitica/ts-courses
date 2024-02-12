(() => {
  const calcTotal = (prices: number[]): string => {
    let total = 0;
    prices.forEach(price => total += price);

    return `Total: ${total}`;
  }

  const rta = calcTotal([100, 200, 300]);
});
