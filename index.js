// INSTRUCTIONS:
// Create a function that converts a string to an array of individual words.
// The output should be an array.

// ***Bonus***
// Convert a number to a string

//Convert an array to a string

function strArr(str) {
  return str.split(" ");
}

let aString = "Today is Saturday";
console.log(strArr(aString));

function numToStr(num) {
  return num.toString();
}
console.log(numToStr(100));

function arrStr(arr) {
  return arr.toString();
}
let arr = ["tree", "flowers", "cars", "lake", "ocean"];
console.log(arrStr(arr));
