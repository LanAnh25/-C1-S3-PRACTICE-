let numbers = [1, 2, 3, 4, 5];

// Write the function to filter out even numbers from an array
// You need to use the array.filter() function
function filterEvenNumbers(arr) {
    var a = arr.filter( b => b % 2 ==0)
    return a;
  // TODO - Your code here (1 line)
}

// Function to map array elements to their squared values
// You need to use the array.map() function
function squareNumbers(arr) {
    var square = arr.map(b => b * b)
    return square;
  //  TODO - Your code here (1 line)
}

// Function to compute the sum of array elements
// You need to use the array.reduce() function
function sumArray(arr) {
    var sum = arr.reduce((c, b) => c + b, 0 )
    console.log(sum);
    return sum;
  //  TODO - Your code here (1 line)
}

console.log("Even numbers:", filterEvenNumbers(numbers)); // [2, 4]
console.log("Squared numbers:", squareNumbers(numbers)); // [1, 4, 9, 16, 25]
console.log("Sum of numbers:", sumArray(numbers)); // 15