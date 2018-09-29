function bubbleSort(array) {
  var swap = true;
  var n = array.length - 1;
  while (swap) {
    swap = false;
    for (var i = 0; i < n; i ++) {
      if (array[i] > array[i + 1]) {
        var temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swap = true;
      }
    }
    n --;
  }
  return sortedArray;
}

module.exports = bubbleSort;
