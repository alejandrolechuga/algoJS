function bubbleSort (array) {
  var swap = true;
  var length = array.length;
  while (swap) {
    swap = false;
    for (var i = 1; i < length; i++) {
      if (array[i - 1] > array[i]) {
        var temp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = temp;
        console.log(array);
        swap = true;
      }
    }
    console.log(length);
    length--;
  }
  return array;
}
//console.log(bubbleSort([1, 2, 10, 3, 6, 5, 5, 5]));