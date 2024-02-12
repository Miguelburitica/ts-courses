let anyVar: any;
anyVar = 1;
anyVar = 'string';
anyVar = true;
anyVar = null;

let booleanVar: boolean;
booleanVar = anyVar;

anyVar.doSomething(); // No error

let unknownVar: unknown;
unknownVar = true;
unknownVar = null;
unknownVar = 1;

// unknownVar.doSomething(); // Error: Property 'doSomething' does not exist on type 'unknown'.
// unknownVar.toUpperCase(); // Error: Property 'toUpperCase' does not exist on type 'unknown'.
if (typeof unknownVar === 'string') unknownVar.toUpperCase(); // No error

let isNew: boolean;
// isNew = unknownVar; // Error: Type 'unknown' is not assignable to type 'boolean'.

if (typeof unknownVar === 'boolean') isNew = unknownVar; // No error

const parse = (str: string): unknown => {
  return JSON.parse(str);
}
