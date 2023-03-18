// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var critList = ["Lowercase letters", "Uppercase letters", "Numeric", "Special characters"];



// Ask user for their criteria, array with answers is returned 
function passPrompt(passwordCriteria) {
  var critAns = []; 

  for (var i = 0; i < critList.length; i++) {
 
     critAns.push((window.prompt(`Do you want to include ${critList[i]}?`)));
  }

  //Credit: https://www.designcise.com/web/tutorial/how-to-convert-a-javascript-array-of-strings-to-uppercase
  passwordCriteria = critAns.map((str) => str.toUpperCase());
  return passwordCriteria;
}

function passLengthPrompt(passLength) {
  passLength = window.prompt("How long would like your password to be? (Please enter a number from 8 to 128");
  return passLength;
}

function lengthValidator() {
  var validLength;
  var length = passLengthPrompt();
  if (length >= 8 && length <= 128) {
    validLength = true;
  } else {
    validLength = false;
  }
  return validLength;
}

function generatePassword() {
  if (lengthValidator()) {
    console.log("valid");
  } else {
    window.alert("Please enter valid number!");
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
