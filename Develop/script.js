// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var critList = ["Lowercase letters", "Uppercase letters", "Numeric", "Special characters"];
var passLength;

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

// passLengthValue(passLength)



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

function addCriteria(criteria) {
  criteria = [];
  var promptAnswer = passPrompt();
  if (promptAnswer[0] === "YES") {
    criteria = criteria.concat(addLower());
  } 
  if (promptAnswer[1] === "YES") {
    criteria = criteria.concat(addUpper()); 
  }
  if (promptAnswer[2] === "YES") {
    criteria = criteria.concat(addNumeric()); 
  }
  if (promptAnswer[3] === "YES") {
    criteria = criteria.concat(addSpecial()); 
  }
   return criteria;
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
    var selectedCriteria = addCriteria();
    for (var i = 0; i < passLength; i++) {
    pw.push(selectedCriteria[Math.floor(Math.random()* selectedCriteria.length)]);
    }
    // var generatedPassword = selectedCriteria[Math.floor(Math.random()*passLength.length)];
    // console.log(generatedPassword);
  } else {
    window.alert("Please enter valid number!");
  }
  return pw;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
