function fibonachi(n) {
  if (n <= 0) {
    return 0;
  }
  if (n <= 2) {
    return 1;
  }
  return fibonachi(n - 1)+ fibonachi(n-2)
};
console.log(fibonachi(8))

function iterFibo(n) {
  if (n <= 0) {
    return 0;
  }
  if (n <= 2) {
    return 1;
  }
  let prev = 1;
  let result = 1;
  for (i = 0; i < n - 2; i += 1){
    let temp = result;
    result += prev;
    prev = temp;
  }
  return result;
}

console.log(iterFibo(8))