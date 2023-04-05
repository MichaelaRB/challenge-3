// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {;
  var passwordLength = Number(prompt('How many characters do you want in your password? Choose between 8-128'));
  var yesLower = confirm('Include lowercase letters?');
  var yesUpper = confirm('Include uppercase letters?');
  var yesNumber = confirm('Include numbers?');
  var yesSpecial = confirm('Include special characters (!,?. etc.)?');
  var password = generatePassword(passwordLength, yesLower, yesUpper, yesNumber, yesSpecial);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(v, w, x, y, z,)
{
  var lowerLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var upperLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var passNumbers = ["0","1","2","3","4","5","6","7","8","9"];
  var specialChars = ["!","?","#","$","@","'",'"',"%","(",")","*","+",",","-","/",".",":",";","<",">","=","[","]","_","|","^","~","{","}"];
  var passwordChars = [];
  var passwordLength = v;
  var password = [];
  var randNum;
  
  if(w) {
    passwordChars = passwordChars.concat(lowerLetters);
    randNum = Math.floor(Math.random() * lowerLetters.length);
    password.push(lowerLetters[randNum]);
    passwordLength = passwordLength - 1;
  }
  if(x) {
    passwordChars = passwordChars.concat(upperLetters);
    randNum = Math.floor(Math.random() * upperLetters.length);
    password.push(upperLetters[randNum]);
    passwordLength = passwordLength - 1;
  }
  if(y) {
    passwordChars = passwordChars.concat(passNumbers);
    randNum = Math.floor(Math.random() * passNumbers.length);
    password.push(passNumbers[randNum]);
    passwordLength = passwordLength - 1;
  }
  if(z) {
    passwordChars = passwordChars.concat(specialChars);
    randNum = Math.floor(Math.random() * specialChars.length);
    password.push(specialChars[randNum]);
    passwordLength = passwordLength - 1;
  }

  for(var i = 0; i < passwordLength; i++)
  {
    randNum = Math.floor(Math.random() * passwordChars.length);
    password.push(passwordChars[randNum]);
    console.log(randNum);
  }

  for(var i = 0; i < password.length; i++)
  {
    var temp = password[i];
    randNum = Math.floor(Math.random() * password.length);
    password[i] = password[randNum];
    password[randNum] = temp;
  }

  return password.join('');
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
