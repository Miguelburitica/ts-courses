const withoutEnd = () => {
  while (true) {
    console.log('Never give up!');
  }
};

const fail = (msg: string) => {
  throw new Error(msg);
}

const example = (input: unknown) => {
  if (typeof input === 'string') return 'Es un string';
  else if (Array.isArray(input)) return 'Es un array';

  return fail('No se que es');
}

console.log(example('Hola'));
console.log(example([1, 2, 3]));
console.log(example(123));
console.log(example('Después de un error no se ejecuta nada más'));
