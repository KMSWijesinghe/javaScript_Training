var numbers = [1,7,9,24,55,26,17,78,49,44];

//console.log(numbers.slice(1,5));
// Output: [7, 9, 24, 55]

//console.log(numbers.slice(3));
// Output: [24, 55, 26, 17, 78, 49, 44]

console.log(numbers.splice(1,3,"hello"));
// Output: [7, 9, 24]
console.log(numbers);
// Output: [1, "hello", 55, 26, 17, 78, 49, 44]