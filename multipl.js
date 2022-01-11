const out = document.querySelector(".out");
const button = document.querySelector("button");
console.log(out);

const mult = () => {
  for (let i = 1; i < 10; i += 1) {
    for (let k = 1; k < 10; k += 1) {
      out.innerHTML += `${i} * ${k} = ${i * k} <br>`;
    }
    out.innerHTML += "<br>";
  }
};
mult();
// button.onclick = function () {
//   for (let i = 1; i < 10; i += 1) {
//     for (let k = 1; k < 10; k += 1) {
//       out.innerHTML += `${i} * ${k} = ${i * k} <br>`;
//     }
//     out.innerHTML += "<br>";
//   }
// };
