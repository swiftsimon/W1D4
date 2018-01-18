[]
// WHAT DO I WANT ?
// AN ARRAY OF NUMBERS CORRESPONDING TO THE X Y PAIRS I AM GIVEN
// THE ARRAY SHOULD CONTAIN THE LIST OF NUMBER Z
// WHERE Z^2 = X^2 + Y^2

var arr = [
 { x: 3, y: 4 },
 { x: 12, y: 5 },
 { x: 8, y: 15 },
];

// var multiply = function(inputGiven){
//   console.log(inputGiven.x);
// }


// var new_array = arr.map(function callback(currentValue[, index[, array]]) {
//     // Return element for new_array
// }[, thisArg])

// var multiply = function(index){
//  console.log(input[index]);
// }


// MAP ?
// CREATE A NEW ARRAY
// WE FEED IT AN ARRAY
// IT APPLIES THE FUNCTION ON EVERY ELEMENT OF THAT ARRAY


var result = arr.map(function multiply(data) {
  var zSquare = (data.x * data.x) + (data.y * data.y);
  var z = Math.sqrt(zSquare);
  return z;

}

);


console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);