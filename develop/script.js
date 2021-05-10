// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 
  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//add in "pseudocode"

//when geenerate button is pressed, we will need a series of window prompts to appear

//prompt should ask what criteria to include
  // length(8-128 characters), uppercase or lowercase or both, and/or special characters
  //create arrays for these criteria to pull from

//each prompt should console.log and store the input

//at the end of the prompts, a random number generator needs to run over each array and output a password the length selected

//the password should be returned and output in the password form field