// function getValue(value: number | string) {
//   return value;
// }
// function getValue(value: unknown) {
//   return value;
// }

function getValue<T>(value: T) {
  return value;
}

const number = getValue<number>(5);
const string = getValue<String>('6');
