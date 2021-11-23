// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    //error handling
    if (!input || typeof(input) !== "string" || !shift || typeof(shift) !== "number" || shift === 0 || shift > 25 || shift < -25 || typeof(encode) !== "boolean") return false;
    let result = "";
    //iterate through string
    for (let i = 0; i < input.length; i++){
      //assign symbol to ascii code
      let charCode = input.toLowerCase().charCodeAt(i);
      //check if ascii code is letter
      if (charCode > 96 && charCode < 123){
        //check if encoding or decoding and shift ascii code
        encode ? charCode += shift : charCode -= shift;
        //wrap around letters
        if (charCode > 122){
          charCode = 96 + (charCode - 122);
        } else if (charCode < 97){
          charCode = 123 - (97 - charCode);  
        }
      }
      result += String.fromCharCode(charCode);
    }
    //add symbol to result
    return result;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
