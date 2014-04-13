function ThreeSum(a) {
  var N = a.length;
  var cnt = 0;
  for (var i = 0; i < N; i++) {
    for (var j = i + 1; j < N; j++) {
      for (var k = j + 1; k < N; k++) {
        if (a[i] + a[j] + a[k] == 0)
          cnt++;
      }
    }
  }
  return cnt;
}
function DoublingTest () {
  return {
    timeTrial: function(N){
      var MAX = 100000;
      var a = [];
      for (var i = 0; i < N; i++) {
        a[i] = randomRange(-MAX, MAX);
      }
      var clo = clock();
      clo.start();
      ThreeSum(a);
      clo.stop();
      return clo.enlapsedTime();
    },
    start: function (i) {
      for(var N = 250; N < i; N += N) {
        var time = this.timeTrial(N);
        console.log(N,time/1000 );
      }
    }
  }
}