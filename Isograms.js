// function isIsogram(str) {
//   const normalizeString = str.toLowerCase();
//   const arrayLatter = normalizeString.split("");
//   const uniqueCourses = arrayLatter.filter(
//     (letter, index, array) => array.indexOf(letter) === index
//   );
//   if (str.length !== uniqueCourses.length) {
//     return false;
//   }

//   return true;
// }
// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

console.log(isIsogram("Dermatoglyphics"));

function isIsogram(str) {
  return str.length == new Set(str.toLowerCase()).size;
}
