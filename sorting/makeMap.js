// Implement your own version of the built-in array map function.

// Yours will take in two arguments. The first will be an array to map and the second will be a callback function. The function will return a new array based on the results of the callback function.

// MAP ?
// CREATE A NEW ARRAY
// WE FEED IT AN ARRAY
// IT APPLIES THE FUNCTION ON EVERY ELEMENT OF THAT ARRAY

var map = function(array, callback){

 var newArray = [];
 for (var i = 0; i < array.length; i++){
    newArray.push(callback(array[i]));
 }
 // for ( var value of array ){
 //   array[value] = callback(value);
 // }
 return newArray;
}


var words = ["ground", "control", "to", "major", "tom"];

// testingFunction = function(arg){
//   return arg.length;
// }

var test1 = map(words, function(word) {
 return word.length;
});

var test2 = map(words, function(word) {
 return word.toUpperCase();
});

var test3 = map(words, function(word) {
 return word.split('').reverse().join('');
});

console.log(test1);
console.log(test2);
console.log(test3);


// EXCPECTED OUTPUT ::: ================================
var exOutput1 = [6, 7, 2, 5, 3];
var exOutput2 = [ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ];
var exOutput3 = [ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ];