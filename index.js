function rotateArray(arr, n) {
  return arr.slice(n).concat(arr.slice(0, n));
}
