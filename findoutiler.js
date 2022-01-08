function findOutlier(integers) {
  const evenNum = [];
  const notEvenNum = [];
  integers.forEach((element) => {
    if (element % 2 === 0) {
      evenNum.push(element);
    } else {
      notEvenNum.push(element);
    }
  });
  if (evenNum.length < notEvenNum.length) {
    return evenNum[0];
  } else {
    return notEvenNum[0];
  }
}

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));
console.log(findOutlier([0, 1, 2]));

function findOutlier(integers) {
  const even = integers.filter((int) => int % 2 === 0);
  const odd = integers.filter((int) => int % 2 !== 0);
  return even.length === 1 ? even[0] : odd[0];
}

function findOutlier(ints) {
  return ints.slice(0, 3).reduce((a, b) => (b % 2 === 0 ? a : a + 1), 0) >= 2
    ? ints.find((i) => i % 2 === 0)
    : ints.find((i) => i % 2 !== 0);
}
