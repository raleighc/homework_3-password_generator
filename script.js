// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lowCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
"n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
"N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".",
":", ";" , "=", , "?", "@", "[", "]", "^", "_", "{", "|", "}", "~"];



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var password = "";
  var pLength = prompt("How many characters would you like in your password? Enter and number from 8-128");
    if (pLength < 8 || pLength > 128) {
      alert("Your password can only contain 8-128 characters.");
      return "Click to try again.";
    } else {
      var confirmUpCase = confirm("If you would like to include uppercase letters, click ok.");
      if (confirmUpCase == true) {
        password += upCase;
      }
      var confirmLowCase = confirm("If you would like to include lowercase letters, click ok.");
      if (confirmLowCase == true) {
        password += lowCase;
      }
      var confirmNumbers = confirm("If you would like to include numbers, click ok.");
      if (confirmNumbers == true) {
        password += numbers;
      }
      var confirmSpecChar = confirm("If you would like to include special characters, click ok.");
      if (confirmSpecChar == true) {
        password += specChar;
      }
      if (confirmUpCase == false && confirmLowCase == false && confirmNumbers == false && confirmSpecChar == false){
        alert("You must select at least one character type.");
        return "Click to try again.";
      }
      for (var i = 0; i < pLength; i++) {
        var randomCharacter = Math.floor(Math.random() * password.length);
        result = result + password[randomCharacter];
      }
    }
    
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


