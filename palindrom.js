function palindrom(word) {
  word = word.toLowerCase();
  for (let i = 0; i <= word.length / 2; i += 1){
    if (word[i] !== word[word.length - i - 1]) {
      return false;
    }
  }
  return true;
};

console.log("~ palindrom(word", palindrom('word'));
console.log("~ palindrom(word", palindrom('aba'));

function palindromMet(word) {
  word = word.toLowerCase();
  return word === word.split('').reverse().join('')

};

console.log("~ palindrom(word", palindromMet('word'));
console.log("~ palindrom(word", palindromMet('ababa'));
