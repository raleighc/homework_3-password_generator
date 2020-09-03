// Assignment Code
var generateBtn = document.querySelector("#generate");


var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lowCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
"n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
"N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".",
":", ";" , "=", , "?", "@", "[", "]", "^", "_", "{", "|", "}", "~"]



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  // TODO: generate a real password and return password string
  return "THIS IS NOT MY FINAL PASSWORD!";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
