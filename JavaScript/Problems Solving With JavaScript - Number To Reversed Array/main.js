function convert(n) {
  // Convert To String
  let arr = n.toString();
  // Convert To Array
  arr = arr.split("");
  // Convert Every Element To Number
  arr = arr.map((x) => parseInt(x));
  // Reverse Array Elements
  arr = arr.reverse();
  return arr;
}
console.log(convert(564987654)); // [4, 5, 6, 7, 8, 9, 4, 6, 5]
console.log(convert(529132)); // [2, 3, 1, 9, 2, 5]


function convert(n) {
  return n.toString().split("").map((x) => parseInt(x)).reverse();
}
console.log(convert(564987654)); // [4, 5, 6, 7, 8, 9, 4, 6, 5]
console.log(convert(529132)); // [2, 3, 1, 9, 2, 5]


/********************************************************************************************* */


function convert(n) {
  // Convert To String
  let arrayOfChars = n.toString();

  // Create Empty Array
  let emptyArray = [];

  // Loop On String
  for (let i = 0; i < arrayOfChars.length; i++) {
    emptyArray.push(+arrayOfChars[i]);
  }

  // Reverse Array Order
  let result = emptyArray.reverse();

  return result;
}

console.log(convert(564987654)); // [4, 5, 6, 7, 8, 9, 4, 6, 5]
console.log(convert(529132)); // [2, 3, 1, 9, 2, 5]


/********************************************************************************************* */


function convert(n) {
  // Convert To String
  let arrayOfChars = n.toString();

  // Create Empty Array
  let emptyArray = [];

  // Loop On String
  for (let i = 0; i < arrayOfChars.length; i++) {
    // Use Unshift To Add Element In The Start
    emptyArray.unshift(+arrayOfChars[i]);
  }

  return emptyArray;
}

console.log(convert(564987654)); // [4, 5, 6, 7, 8, 9, 4, 6, 5]
console.log(convert(529132)); // [2, 3, 1, 9, 2, 5]
