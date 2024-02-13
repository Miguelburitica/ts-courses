const prices: (number | string)[] = [1, 2, 3, '4', 5];
prices.push(6);
prices.push('7');

const user: [string, number] = ['nicobytes', 15];
console.log(user);

user.push('nicobytes');
console.log(user);
const [userName, age] = user;
console.log(userName, age);
