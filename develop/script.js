// var for generate button in html
var generateBtn = document.querySelector("#generate");
var passwordLength;
var uppercase;
var lowercase;
var numbers;

//function to choose length of password
function chooseLength(){
  passwordLength = window.prompt("How many characters long would you like your password to be? (limit is between 8-128 characters):");
  if (passwordLength < 8) {
    alert("Password length must be at least 8 characters. Please try again");
    chooseLength ();
  } else if (passwordLength > 128) {
    alert('Password legnth must be equal to or less than 128 characters. Please try again.');
    chooseLength ();
  } else if (isNaN(passwordLength)){
    alert('Password character length must be a number between 8-128. Please try again');
    chooseLength ();    
  } else {
    alert('The next few prompts will ask you if you would like to include: uppercase, lowercase, numeric, and/or special characters. It is required that you choose at least one of these four options.');
  }
  return passwordLength;

}
chooseLength ();

//function to choose yes or no for uppercase
function chooseUppercase () {
  uppercase = confirm("Would you like your password to include Uppercase characters?");
  if(confirm) {
    return uppercase;
  } else {
    return 'no uppercase';
  }
}
chooseUppercase ();

//function to choose yes or no for lowercase
function chooseLowercase () {
  lowercase = confirm("Would you like your password to include lowercase characters?");
  if(confirm) {
    return lowercase;
  } else {
    return 'no lowercase';
  }
}
chooseLowercase ();

//function to include numbers
function chooseNumbers () {
  numbers = confirm("Would you like your password to include numbers?");
  if(confirm) {
    return numbers;
  } else {
    return 'no numbers';
  }
}
chooseNumbers ();

//function to include special characters
function chooseSpecials () {
  specials = confirm("Would you like your password to include special characters?");
  if (confirm) {
    return numbers;
  } else {
    return 'no numbers';
  }
}
chooseSpecials ();


//when geenerate button is pressed, we will need a series of window prompts to appear

//prompt should ask what criteria to include
  // length(8-128 characters), uppercase or lowercase or both, and/or special characters
  //create arrays for these criteria to pull from

//each prompt should console.log and store the input

//at the end of the prompts, a random number generator needs to run over each array and output a password the length selected

//the password should be returned and output in the password form field


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 
  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);