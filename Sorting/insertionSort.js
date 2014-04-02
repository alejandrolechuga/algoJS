function insertionSort(array) {
  var length = array.length;
  for (var i = 1; i < length; i++) {
    var j = i;
    while (j > 0 && array[j - 1] > array[j]) {
      var temp = array[j];
      array[j] = array[j - 1];
      array[j - 1] = temp;
      console.log(array);
      j = j - 1;
    }
  }
  return array;
}

var sorted = insertionSort([ 2, 10, 3, 6, 5, 5, 5, 1]);
console.log("Insertionsort output is ", sorted, " sorted ? :", isSorted(sorted));
// Optimized
function insertionSort_2(array) {
  var length = array.length;
  for (var i = 1; i < length; i ++) {
    var temp = array[i];
    var j = i;
    while (j > 0 && array[i-1] > temp) {
      array[j] = array[j - 1];
      j = j - 1;
      console.log(array);
    }
    array[j] = temp;
  }
  return array;
}
var sorted = insertionSort_2([ 2, 10, 3, 6, 5, 5, 5, 1]);
console.log("Insertionsort_2 output is ", sorted, " sorted ? :", isSorted(sorted));
