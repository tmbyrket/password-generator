
// var for generate button in html
var generateBtn = document.querySelector("#generate");
//arrays for password criteria to pull from:
var uppercaseOptions = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowercaseOptions = 'abcdefghijklmnopqrstuvwxyz';
var numbersOptions = '1234567890';
var specialsOptions = '!@#$%^&*()_=+{}[];:~`<,>.?/|'

var passwordLength;
var uppercase;
var lowercase;
var numbers;
var specials;

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

//use the return input from above four prompts to generate parameters for password including the console.log with stored data and for loop
function generatePassword () {
  chooseLength();
  console.log(length);
  chooseUppercase();
  console.log(uppercase);
  chooseLowercase();
  console.log(lowercase);
  chooseNumbers();
  console.log(numbers);
  chooseSpecials();
  console.log(specials);


var characters = lowercaseOptions;
var password = "";
if (uppercase && numbers && specials) {
  characters += uppercaseOptions + numbersOptions + specialsOptions;

}else if (uppercase && numbers) {
  characters += uppercaseOptions + numbersOptions;

}else if (numbers && specials) {
  characters += numbersOptions + specialsOptions;

}else if (uppercase && specials) {
  characters += uppercaseOptions + specialsOptions;

}else if (uppercase) {
  characters += uppercaseOptions;

}else if (numbers) {
  characters += numbersOptions;

}else if (specials) {
  characters += specialsOptions;

}else {
  characters += lowercaseOptions;
}

  for(var i = 0; i < passwordLength; i++){
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); 

  passwordText.value = password;
  
}

generateBtn.addEventListener("click", writePassword);