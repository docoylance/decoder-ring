// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    //error handling
    if (!input || typeof(input) !== "string" || !alphabet || alphabet.length !== 26 ||  (new Set(alphabet).size !== alphabet.length || typeof(encode) !== "boolean")) return false;
    let result = "";
    const original = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    //transform alphabet string to array
    const alphabetArr = alphabet.split("");
    //iteerate through input string
    for (let i = 0; i < input.length; i++){
      if (input[i] === " ") {
        result += " ";
      } else {
        const symbol = input[i].toLowerCase();
        //check if encoding or decoding and add to result
        encode ? result += `${alphabetArr[original.indexOf(symbol)]}` : result += `${original[alphabetArr.indexOf(symbol)]}`;
      }
    }
    return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
