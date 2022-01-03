function arraySum(arr) {
  const strFromArr = arr.toString().split(",");
  let sum = 0;

  for (let i = 0; i < strFromArr.length; i += 1) {
    sum += Number.isNaN(Number(strFromArr[i])) ? 0 : Number(strFromArr[i]);
  }
  return sum;
}

function arraySum(arr) {
  return arr.reduce((acc, x) => {
    if (Array.isArray(x)) acc += arraySum(x);
    else if (!isNaN(x)) acc += x;

    return acc;
  }, 0);
}
