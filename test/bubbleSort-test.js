const assert = require('chai').assert;
const bubbleSort = require('../bubbleSort');

describe('bubbleSort', function() {
  it('can sort an array of numbers from lowest to highest', function() {
    var dataSet = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];
    assert.deepEqual(bubbleSort(dataSet), [1, 4, 9, 12, 23, 64, 84, 98, 122, 213, 234, 345, 455, 546, 3223])
  });
});
