// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var critList = ["Lowercase letters", "Uppercase letters", "Numeric", "Special characters"];
var passLength;

// Ask user for their criteria, array with answers is returned 
function passPrompt(passwordCriteria) {
  var critAns = []; 

  for (var i = 0; i < critList.length; i++) {
 
     critAns.push((window.prompt(`Do you want to include ${critList[i]}? Please say "yes" or "no"`)));
  }

  //Credit: https://www.designcise.com/web/tutorial/how-to-convert-a-javascript-array-of-strings-to-uppercase
  passwordCriteria = critAns.map((str) => str.toUpperCase());
  return passwordCriteria;
}

// passLengthValue(passLength)



//test

function addChars() {
  let chars = {
    lowerChars: "abcdefghijklmnopqrstuvwxyz",
    upperChars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numberChars: "0123456789",
    specialChars:"!@#$%^&*()-+/[]:><|?~"
  }
  var promptAnswer = passPrompt();
  var addedChars = [];
  if (promptAnswer[0] === "YES") {
    addedChars = addedChars.concat(chars.lowerChars)  
  } else if (promptAnswer[0] === "NO") {
    window.alert(`Lower characters not added`);
  }

  if (promptAnswer[1] === "YES") {
    addedChars = addedChars.concat(chars.upperChars);
  } else if (promptAnswer[1] === "NO") {
    window.alert(`Upper characters not added`);
  }
  if (promptAnswer[2] === "YES") {
    addedChars = addedChars.concat(chars.numberChars);
  } else if (promptAnswer[2] === "NO") {
    window.alert(`Number characters not added`);
  }
  if (promptAnswer[3] === "YES") {
    addedChars = addedChars.concat(chars.specialChars);
  } else if (promptAnswer[3] === "NO") {
    window.alert(`Special characters not added`);
  }

  addedChars = addedChars.join("");
  
}

function lengthValidator() {
  passLength = window.prompt("Enter a number between 8 and 128");
  if (passLength >= 8 && passLength <= 128) {
    validLength = true;
  } else {
    validLength = false;
  }
  return validLength;
}

function generatePassword() {
  if (lengthValidator()) {
    var pw = [];
    console.log("valid");
    var selectedCriteria = addChars();
    for (var i = 0; i < passLength; i++) {
    pw.push(selectedCriteria[Math.floor(Math.random()* selectedCriteria.length)]);
    }

  } else {
    window.alert("Please enter valid number!");
  }
  return pw.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
