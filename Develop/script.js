// Assignment code here

function init() {// Get references to the #generate element
const generateBtn = document.querySelector("#generate");

let passLength;

// Ask user for their criteria, array with answers is returned 
function passPrompt(passwordCriteria) {
  let critList = ["Lowercase letters", "Uppercase letters", "Numeric", "Special characters"];
  let critAns = []; 

  for (let ans of critList) {
     critAns.push((window.prompt(`Do you want to include ${ans}? Please say "yes" or "no" (case insensitive)`)));
  }

  //Credit: https://www.designcise.com/web/tutorial/how-to-convert-a-javascript-array-of-strings-to-uppercase
  passwordCriteria = critAns.map((str) => str.toUpperCase());
  return passwordCriteria;
}

// passLengthValue(passLength)


function addChars() {
  let chars = {
    lowerChars: "abcdefghijklmnopqrstuvwxyz",
    upperChars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numberChars: "0123456789",
    specialChars:"!@#$%^&*()-+/[]:><|?~"
  }
  let promptAnswer = passPrompt();
  let addedChars = [];
   if ((promptAnswer[0] === "NO") && (promptAnswer[1] === "NO") && (promptAnswer[2] === "NO") && (promptAnswer[3] === "NO")) {
      window.alert("Please select at least one criteria!")
   } else { 
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
    }

  addedChars = addedChars.join("");
  return addedChars;
}

// Determines if a user chose a valid length for password
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
  let passwordArray = [];
  if (lengthValidator()) {
    
    let selectedCriteria = addChars();
    for (let i = 0; i < passLength; i++) {
    passwordArray.push(selectedCriteria[Math.floor(Math.random()* selectedCriteria.length)]);
    }

  } else {
    window.alert("Please enter valid number!");
  }
  return passwordArray.join("");
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
}

init();