function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null values
  }

  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 5)); // Output: null
console.log(foo(undefined, 5)); // Output: NaN