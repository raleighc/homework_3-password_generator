// Assignment Code
var generateBtn = document.querySelector("#generate");

// List of variables that will be called on by confirms
var upCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowCase = "abcdefghijklmnopqrstuvwxyz"
var numbers = "0123456789";
var specChar = "!#$%&'()*+,-.:;=?@[]^_{|}~";

// Empty variables that will be populated by if/else confirms
var tempResult = "";
var endResult = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Clicking generate button begins this function
function generatePassword() {
  var pLength = prompt("How many characters would you like in your password? Enter and number from 8-128");
    // if statement limits user to only inputting numbers from 8-128 including characters that aren't numbers
    if (isNaN(pLength) || pLength < 8 || pLength > 128) {
      alert("Your password can only contain 8-128 characters.");
      return "Click button to try again.";
      // once if criteria is met, this sequence of confirm questions will kick off from asking the user which character types they would like to include in their password.
    } else {
      var confirmUpCase = confirm("If you would like to include uppercase letters, click OK. If not, click Cancel");
      if (confirmUpCase == true) {
        tempResult += upCase;
        alert("Your password will include uppercase letters.");
      }
      var confirmLowCase = confirm("If you would like to include lowercase letters, click OK. If not, click Cancel");
      if (confirmLowCase == true) {
        tempResult += lowCase;
        alert("Your password will include lowercase letters.");
      }
      var confirmNumbers = confirm("If you would like to include numbers, click OK. If not, click Cancel");
      if (confirmNumbers == true) {
        tempResult += numbers;
        alert("Your password will include numbers.");
      }
      var confirmSpecChar = confirm("If you would like to include special characters, click OK. If not, click Cancel");
      if (confirmSpecChar == true) {
        tempResult += specChar;
        alert("Your password will include special characters.");
      }
      
      // If the user does not select any character types this will notify them and return to the beginning of the process.      
      if (confirmUpCase == false && confirmLowCase == false && confirmNumbers == false && confirmSpecChar == false){
        alert("You must select at least one character type.");
        return "Click button to try again.";
      }

      // after the length and confirms have been successfully completed, this for loop with randomize the characters selected and combine them into the final password.
      for (var i = 0; i < pLength; i++) {
        var tempCharacters = Math.floor(Math.random() * tempResult.length);
        var randomized = tempResult[tempCharacters];
        endResult = endResult + randomized;
      }
    }
    // final return prints the generated password into the textarea.
    return endResult;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



