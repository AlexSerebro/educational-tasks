function alphabetPosition(text) {
  const leters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const arr = [];
  const normalizeText = text.toLowerCase();
  for (let i = 0; i < normalizeText.length; i += 1) {
    if (leters.includes(normalizeText[i]) === false) {
      continue;
    } else {
      let indexOfLetter = leters.indexOf(normalizeText[i]);
      arr.push(indexOfLetter + 1);
    }
  }
  return arr.join(" ");
}

console.log(alphabetPosition("Abc ] hg"));

function alphabetPosition(text) {
  return text
    .toUpperCase()
    .match(/[a-z]/gi)
    .map((c) => c.charCodeAt() - 64)
    .join(" ");
}

function alphabetPosition(text) {
  return text
    .toLowerCase()
    .split("")
    .map((a) => a.charCodeAt(0) - 96)
    .filter((a) => a > 0 && a < 27)
    .join(" ");
}

function alphabetPosition(text) {
  const letters = "abcdefghijklmnopqrstuvwxyz";

  return text
    .toLowerCase()
    .split("")
    .filter((t) => letters.indexOf(t) > -1)
    .map((t) => letters.indexOf(t) + 1 || "")
    .join(" ");
}
