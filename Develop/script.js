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
//test
function addLower(list) {
 list = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
 return list;
}

function addUpper(list) {
  list = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  return list;
}

function addNumeric(list) {
  list = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  return list;
}

function addSpecial(list) {
  list = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "/"];
  return list;
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


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
