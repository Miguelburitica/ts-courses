console.log('Math.PI ---->', Math.PI);
console.log('Math.max ---->', Math.max(1, 2, 2, 8, 1, 0));

// Math.PI = 4; // Error: Cannot assign to 'PI' because it is a read-only property.

export class CustomMath {
  static readonly PI = 3.14159265;
  static max(...values: number[]): number {
    let max = values[0]; // Assume the first value is the largest
    for (const value of values) {
      if (value > max) max = value;
    }

    return max;
  }
}

// CustomMath.PI = 4; // Error: Cannot assign to 'PI' because it is a read-only property.
console.log(CustomMath.PI);
console.log(CustomMath.max(1, 2, 2, 8, 1, 0)); // 8

