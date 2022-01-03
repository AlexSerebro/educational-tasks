function arraysSimilar(arr1, arr2) {
  // return arr1.sort().toString()=== arr2.sort().toString();

  // if (arr1.length !== arr2.length) return false;
  // arr1.sort();
  // arr2.sort();
  // for (let i = 0; i < arr1.length; i += 1) {
  //   if (arr1[i] !== arr2[i]) return false;
  // }
  // return true;

  return JSON.stringify(arr1.sort()) === JSON.stringify(arr2.sort().toString());
}
