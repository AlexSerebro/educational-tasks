// const a = [1, 2, 3, [7, 8]];
// const b = a.concat();

// // b.push(5);
// // console.log("~ b", b);

// b[3].push(6);

// console.log("~ b", b);

// console.log("~ a", a);

// function calculateEngravingPrice(message, pricePerWord) {
//   // Change code below this line
//   const arrayLength = message.split(" ").length;
//   const price = arrayLength * pricePerWord;
//   return price;

//   // Change code above this line
// }

// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
// function slugify(title) {
//   // Change code below this line
//   const slugText = title.toLowerCase().split(" ").join("-");
//   return slugText;

//   // Change code above this line
// }

// console.log(slugify("Arrays for begginers"));

// function calculateTotal(number) {
//   // Change code below this line
//   let additionNumber = 0;
//   for (let i = 0; i <= number; i += 1) {
//     additionNumber += i;
//   }

//   return additionNumber;

//   // Change code above this line
// }

// console.log(calculateTotal(1));

// function findLongestWord(string) {
//   // Change code below this line
//   const arrayFromString = string.split(" ");
//   let lengthWords = arrayFromString[0];
//   for (let i = 1; i < arrayFromString.length; i += 1) {
//     if (lengthWords.length < arrayFromString[i].length)
//       lengthWords = arrayFromString[i];
//   }

//   return lengthWords;
//   // Change code above this line
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (const number of order) {
//     total += number;
//     console.log("~ total", total);
//   }

//   // Change code above this line
//   return total;
// }
// calculateTotalPrice([12, 85, 37, 4]);

// function getEvenNumbers(start, end) {
//   // Change code below this line
//   const resultArrey = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       resultArrey.push(i);
//     }
//   }
//   return resultArrey;

//   // Change code above this line
// }

// console.log(getEvenNumbers(6, 12));

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  // Change code below this line
  for (const product of products) {
    if (product.name === productName) {
      console.log(product);
      return product.price;
    }
    return null;
  }
}

console.log(getProductPrice("Scanner"));
