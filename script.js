// Assignment code here

lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
number = [1,2,3,4,5,6,7,8,9];
specialCharacter = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

var choices = "";
var password = "";
// converts letters to uppercase 
var toUpper = function (x) {
return x.toUpperCase();
}
// creates a variable for uppercase conversion
uppercase = lowercase.map(toUpper);


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
console.log(generateBtn);

// Write password to the #password input

    var generatePassword = function() {
            
    var enter = window.prompt('How many characters would you like for the password? Choose between 8 and 128.');
      
	  if (enter === "" || enter === "null") {
      window.alert('Please enter a value.');
	  return generatePassword();
    }
      if (enter < 8 || enter > 128) {
      window.prompt('Please choose between 8 and 128.');
      return generatePassword();
    }
      else {
		console.log("enter=" + enter);
		
        var promptLowercase = window.confirm('Would you like to include lowercase?');
		console.log("promptLowercase=" +promptLowercase);
		
        var promptUppercase = window.confirm('Would you like to include uppercase?');
		console.log("promptUppercase=" +promptUppercase);
		
        var promptNum = window.confirm('Would you like to include numeric?');
		console.log("promptNum=" +promptNum);
		
        var promptSpecial = window.confirm('Would you like to include special characters?');
		console.log("promptSpecial=" +promptSpecial);	
    }
    // Else if for 4 negative options
	 if (!promptLowercase && !promptUppercase && !promptNum && !promptSpecial) {
          window.alert('Please choose at least a criteria.');
		  return generatePassword();
		  }
  
  
    // Else if for 4 positive options
      else if (promptLowercase && promptUppercase && promptNum && promptSpecial) {
        choices = lowercase.concat(uppercase, number, specialCharacter);
      }
    // Else if for 3 positive options
      else if (promptLowercase && promptUppercase && promptNum) {
        choices = lowercase.concat(uppercase, number);
      }  
      else if (promptUppercase && promptNum && promptSpecial) {
        choices = uppercase.concat(number, specialCharacter);
      }
      else if (promptNum && promptSpecial && promptLowercase) {
        choices = number.concat(specialCharacter, lowercase);
      }
      else if (promptLowercase && promptUppercase && promptSpecial) {
        choices = lowercase.concat(uppercase, specialCharacter);
      }
    // Else if for 2 positive options 
      else if (promptLowercase && promptUppercase) {
        choices = lowercase.concat(uppercase);
      }
      else if (promptUppercase && promptNum) {
        choices = uppercase.concat(number);
      }
      else if (promptNum && promptSpecial) {
        choices = number.concat(specialCharacter);
      }
      else if (promptSpecial && promptLowercase) {
        choices = specialCharacter.concat(lowercase);
      }
      else if (promptSpecial && promptUppercase) {
        choices = specialCharacter.concat(uppercase);
      }
      else if (promptNum && promptLowercase) {
        choices = number.concat(lowercase);
      }
    // Else if for 1 positive option
      else if (promptLowercase) {
        choices = lowercase;
      }
      else if (promptUppercase) {
        choices = uppercase;
      }
      else if (promptNum) {
        choices = number;
      }
      else if (promptSpecial) {
        choices = specialCharacter;
      }
    
    // Start random selection variables:
    // Random selection for all variables: 
     for (var i = 0; i < enter; i++) {
      var pickChoices = choices[Math.floor(Math.random() * choices.length)];
	  password= password+pickChoices;
	  console.log("THE PASSWORD: "+ password);
    }
  };	

	
    // This joins the password array and converts it to a string
    // This puts the password value into the textbox
    // Changed function input to use textcontent
   function writePassword() {  
      generatePassword();
	  //document.getElementById("password").value = password;
      var passwordText = document.querySelector("#password");
      passwordText.value = password;    
    }; 
  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);