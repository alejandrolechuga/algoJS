function isSorted (array) {
  var length = array.length;
  for (var i = 1; i < length; i++) {
    if (array[i - 1] > array[i]) {
      return false;
    }
  }
  return true;
}

function clock() {
  var startime = 0;
  var endtime = 0;
  return {
    start: function () {
      startime = + (new Date);
    },
    stop: function () {
      endtime = +(new Date);
    },
    enlapsedTime: function () {
      return endtime - startime;
    }
  }
}