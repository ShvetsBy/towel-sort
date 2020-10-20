
// You should implement your task here.

module.exports = 
function towelSort (matrix) {
  
let arr = matrix[0];

if ( matrix.length === 0 || matrix === undefined ) {
  return [];
}



for (i = 1; i < matrix.length; i++) {

  if ( i % 2 === 0) {
    arr = arr.concat(matrix[i])
  } else {
    arr = arr.concat(matrix[i].reverse());
  }

}

// console.log(arr);
return arr;

}
