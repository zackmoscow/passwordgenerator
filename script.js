var specialCharacters = ["!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function generateFunction() {

    var storedValue = "";
    
    if (includeSpecialCharacters.checked === false && includeNumericCharacters.checked === false && includeUppercaseCharacters.checked === false && includeLowercaseCharacters.checked === false){
        alert("You must select at least one character type.");
    } else if (includeSpecialCharacters.checked === false && includeNumericCharacters.checked === false && includeUppercaseCharacters.checked === false && includeLowercaseCharacters.checked === true){
        var passwordCharacters = lowercaseCharacters;
    } else if (includeSpecialCharacters.checked === false && includeNumericCharacters.checked === false && includeUppercaseCharacters.checked === true && includeLowercaseCharacters.checked === false){
        var passwordCharacters = uppercaseCharacters;
    } else if (includeSpecialCharacters.checked === false && includeNumericCharacters.checked === true && includeUppercaseCharacters.checked === false && includeLowercaseCharacters.checked === false){
        var passwordCharacters = numericCharacters;
    } else if (includeSpecialCharacters.checked === true && includeNumericCharacters.checked === false && includeUppercaseCharacters.checked === false && includeLowercaseCharacters.checked === false){
        var passwordCharacters = specialCharacters;
    } else if (includeSpecialCharacters.checked === false && includeNumericCharacters.checked === false && includeUppercaseCharacters.checked === true && includeLowercaseCharacters.checked === true){
        var passwordCharacters = lowercaseCharacters.concat(uppercaseCharacters);
    } else if (includeSpecialCharacters.checked === false && includeNumericCharacters.checked === true && includeUppercaseCharacters.checked === false && includeLowercaseCharacters.checked === true){
        var passwordCharacters = lowercaseCharacters.concat(numericCharacters);
    } else if (includeSpecialCharacters.checked === true && includeNumericCharacters.checked === false && includeUppercaseCharacters.checked === false && includeLowercaseCharacters.checked === true){
        var passwordCharacters = lowercaseCharacters.concat(specialCharacters);
    } else if (includeSpecialCharacters.checked === false && includeNumericCharacters.checked === true && includeUppercaseCharacters.checked === true && includeLowercaseCharacters.checked === false){
        var passwordCharacters = numericCharacters.concat(uppercaseCharacters);
    } else if (includeSpecialCharacters.checked === true && includeNumericCharacters.checked === false && includeUppercaseCharacters.checked === true && includeLowercaseCharacters.checked === false){
        var passwordCharacters = specialCharacters.concat(uppercaseCharacters);
    } else if (includeSpecialCharacters.checked === true && includeNumericCharacters.checked === true && includeUppercaseCharacters.checked === false && includeLowercaseCharacters.checked === false){
        var passwordCharacters = numericCharacters.concat(specialCharacters);
    } else if (includeSpecialCharacters.checked === true && includeNumericCharacters.checked === true && includeUppercaseCharacters.checked === true && includeLowercaseCharacters.checked === false){
        var passwordCharacters = numericCharacters.concat(specialCharacters, uppercaseCharacters);
    } else if (includeSpecialCharacters.checked === true && includeNumericCharacters.checked === true && includeUppercaseCharacters.checked === false && includeLowercaseCharacters.checked === true){
        var passwordCharacters = numericCharacters.concat(specialCharacters, lowercaseCharacters);
    } else if (includeSpecialCharacters.checked === true && includeNumericCharacters.checked === false && includeUppercaseCharacters.checked === true && includeLowercaseCharacters.checked === true){
        var passwordCharacters = lowercaseCharacters.concat(specialCharacters, uppercaseCharacters);
    } else if (includeSpecialCharacters.checked === false && includeNumericCharacters.checked === true && includeUppercaseCharacters.checked === true && includeLowercaseCharacters.checked === true){
        var passwordCharacters = numericCharacters.concat(lowercaseCharacters, uppercaseCharacters);
    } else if (includeSpecialCharacters.checked === true && includeNumericCharacters.checked === true && includeUppercaseCharacters.checked === true && includeLowercaseCharacters.checked === false){
        var passwordCharacters = numericCharacters.concat(specialCharacters, uppercaseCharacters);
    } else {
        var passwordCharacters = numericCharacters.concat(specialCharacters, uppercaseCharacters, lowercaseCharacters);
    };

    for (var i = 1; i <= passwordLength.value; i++){
        storedValue = storedValue + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    }

    document.getElementById("passwordArea").innerHTML = storedValue;

};

function copyToClipboard() {
    var copyText = document.getElementById("passwordArea");
    copyText.focus();
    copyText.select();
    document.execCommand("copy");
    alert("Copied");
};
