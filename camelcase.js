function toCamelCase(str) {
  if (str === "") return "";

  let string = str
    .split(/-|_/g)
    .map((word) => word.replace(word[0], word[0].toString().toUpperCase()))
    .join("");
  if (str[0] === string[0]) {
    return string;
  }
  return string[0].toLowerCase() + string.slice(1);

  // let string = str
  //   .split("_")
  //   .map((word) => word.replace(word[0], word[0].toString().toUpperCase()))
  //   .join("");
  // if (str[0] === string[0]) {
  //   return string;
  // }
  // return string[0].toLowerCase() + string.slice(1);
}

// function toCamelCase(str) {
//   return str
//     .split(/-|_/g)
//     .map(
//       (w, i) => (i > 0 ? w.charAt(0).toUpperCase() : w.charAt(0)) + w.slice(1)
//     )
//     .join("");
// }

// function toCamelCase(str) {
//   str = str.split(/[-_]/);
//   for (var i = 1; i < str.length; i++) {
//     str[i] = str[i].charAt(0).toUpperCase().concat(str[i].slice(1));
//   }
//   return str.join("");
// }

console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The-stealth-warrior"));
console.log(toCamelCase("the_stealth_warrior"));
console.log(toCamelCase("The_stealth_warrior"));
