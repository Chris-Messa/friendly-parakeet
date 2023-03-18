// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function passPrompt(passwordCriteria) {
  var critList = ["Lowercase letters", "Uppercase letters", "Numeric", "Special characters"];

  for (var i = 0; i < critList.length; i++) {
    window.prompt(`Do you want to include ${critList[i]}?`);
  }


  return passwordCriteria;
}

function generatePassword() {
  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
