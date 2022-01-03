function distinct(a) {
  return a.filter((el, ind, arr) => a.indexOf(el) === ind);
}

console.log(distinct([1, 1, 2, 2]));

function distinct(a) {
  return [...new Set(a)];
}
