const lookup = {
  A: "N",
  B: "O",
  C: "P",
  D: "Q",
  E: "R",
  F: "S",
  G: "T",
  H: "U",
  I: "V",
  J: "W",
  K: "X",
  L: "Y",
  M: "Z",
  N: "A",
  O: "B",
  P: "C",
  Q: "D",
  R: "E",
  S: "F",
  T: "G",
  U: "H",
  V: "I",
  W: "J",
  X: "K",
  Y: "L",
  Z: "M",
  "?": "?",
  ",": ",",
};

function rot13(encodedStr) {
  let decodedArr = []; // Initialize an array to store the decoded characters

  for (let i = 0; i < encodedStr.length; i++) {
    const char = encodedStr[i];
    const decodedChar = lookup[char] || char; // Look up the decoded character

    decodedArr.push(decodedChar); // Add the decoded character to the result array
  }

  return decodedArr.join(''); // Join the array into a string and return it
}

// Example usage
console.log(rot13("SERR YBIR? NPPVBWBO"));
