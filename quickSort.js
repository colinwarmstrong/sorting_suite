function quickSort(array, startIndex, endIndex) {
  if (startIndex < endIndex) {
    console.log(array);
    console.log(startIndex);
    console.log(endIndex);
    var partitionIndex = partition(array, startIndex, endIndex);
    quickSort(array, startIndex, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, endIndex);
  }
}

function partition(array, startIndex, endIndex) {
  var pivot = array[endIndex];
  var partitionIndex = startIndex;
  for (i = startIndex; i < endIndex; i++) {
    if (array[i] <= pivot) {
      swap(array, startIndex, endIndex);
      partitionIndex++;
    }
  }
  swap(array[partitionIndex], array[endIndex]);
  return partitionIndex;
}

function swap(array, startIndex, endIndex) {
  var temp = array[startIndex];
  array[startIndex] = array[endIndex];
  array[endIndex] = temp;
}

var dataSet = [4, 3, 1, 5, 7, 6, 2, 9, 0, 8]

console.log(quickSort(dataSet, 0, dataSet.length - 1))
