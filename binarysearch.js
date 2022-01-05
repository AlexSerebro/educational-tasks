binarySearch([1, 2, 30, 78, 566, 650, 700, 800, 900, 1000], 900);

function binarySearch(list, item) {
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    let mid = Math.round((low + high) / 2);

    console.log(mid);
    let guess = list[mid];
    if (guess === item) {
      console.log(list[mid]);
      return item[mid];
    }
    if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return console.log("такого числа нет, БАРАН");
}
