// Nico => ['N', 'i', 'c', 'o'] => string -> string[]
// ['N', 'i', 'c', 'o'] => 'Nico' => string[] -> string

function parseStr(input: string | string[]): string | string[] {
  if (typeof input === 'string') return input.split('');
  return input.join('');
}

const str1 = parseStr('Nico');
console.log(str1);

const str2 = parseStr(['N', 'i', 'c', 'o']);
console.log(str2);

