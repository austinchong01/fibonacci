function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const mid = Math.round(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid, arr.length);

  const leftNum = mergeSort(left);
  const rightNum = mergeSort(right);

  const res = [];
  while (leftNum.length != 0 || rightNum.length != 0) {
    if (leftNum[0] <= rightNum[0] || rightNum[0] === undefined) {
      res.push(leftNum.shift());
    } else {
      res.push(rightNum.shift());
    }
  }
  return res;
}
/*
Merge Sort Algorithm:

Divide into left and right arrays
keep dividing into arrays until size of array is 1 (Ex: [3])

compare two arrays
    push lower number to new array



*/

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
