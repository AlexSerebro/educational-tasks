const a = [1, 2, 3, [7, 8]];
const b = a.concat();

// b.push(5);
// console.log("~ b", b);

b[3].push(6);

console.log("~ b", b);

console.log("~ a", a);
