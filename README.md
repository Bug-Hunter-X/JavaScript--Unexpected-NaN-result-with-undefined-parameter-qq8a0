# JavaScript Bug: Unexpected NaN Result with undefined parameter

This repository demonstrates a common JavaScript bug related to how the plus (+) operator behaves with `undefined` values.

## Bug Description
The `foo` function is intended to add two numbers. It correctly handles `null` values by returning `null`. However, when either `a` or `b` is `undefined`, the function returns `NaN` because `undefined + number` results in `NaN`.

## Solution
The improved solution explicitly checks for `undefined` values using strict equality (`===`) and handles them appropriately by either returning `null`, throwing an error, or using a default value.

## How to reproduce the bug
1. Clone this repository.
2. Open `bug.js` and run the code in a JavaScript environment.
3. Observe that the result of `foo(undefined, 5)` is `NaN`.

## How to run the solution
1. Open `bugSolution.js` and run the code.
2. Observe the difference in handling of `undefined` values.