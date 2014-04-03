function selectionSort(array) {
  var length = array.length;
  for (var i = 0; i < length; i++) {
    var min = i;
    for (var j = i + 1; j < length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    var temp = array[min];
    array[min] = array[i];
    array[i] = temp;
  }
}

var input = [ 2, 10, 3, 6, 5, 5, 5, 1];
console.log("Input ", input);
var output = insertionSort_2(input);
console.log("selectionSort output is ", output, " sorted ? :", isSorted(output));