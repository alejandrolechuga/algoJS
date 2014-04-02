function isSorted (array) {
  var length = array.length;
  for (var i = 1; i < length; i++) {
    if (array[i - 1] > array[i]) {
      return false;
    }
  }
  return true;
}