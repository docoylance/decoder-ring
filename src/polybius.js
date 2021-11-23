// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  function polybius(input, encode = true) {
    if (!input || typeof(input) !== "string" || typeof(encode) !== "boolean") return false;
    const letters = [" ", "a", "b", "c", "d", "e", "f", "g", "h", "(i/j)", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const numbers = [" ", "11", "21", "31", "41", "51", "12", "22", "32", "42", "52", "13", "23", "33", "43", "53", "14", "24", "34", "44", "54", "15", "25", "35", "45", "55"];
    let result = "";
    if (encode){
      if(/\d/.test(input)) return false;
      for (let i = 0; i < input.length; i++){
        const symbol = input[i].toLowerCase();
        (symbol === "i" || symbol === "j") ? result += "42" : result += `${numbers[letters.indexOf(symbol)]}`;
      }
    } else {
      if (input.replace(/\s/g, "").length % 2 == 1 || /[a-z6-9]|0/i.test(input)) return false;
      for (let i = 0; i < input.length - 1; i++){
        if (input[i] === " "){
          result += " ";
        } else {
          numbers.forEach(number => {
            if (number === `${input[i]}${input[i+1]}`) result += `${letters[numbers.indexOf(number)]}`;
          })
          i++;
        } 
      }
    }
    return result;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
