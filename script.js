var characters = {
    special: ["!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"],
    numeric: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    uppercase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    lowercase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
}

function generateFunction() {

    var storedValue = "";
    
    if (includeSpecialCharacters.checked === false && includeNumericCharacters.checked === false && includeUppercaseCharacters.checked === false && includeLowercaseCharacters.checked === false){
        alert("You must select at least one character type.");
    } else if (includeSpecialCharacters.checked === false && includeNumericCharacters.checked === false && includeUppercaseCharacters.checked === false && includeLowercaseCharacters.checked === true){
        var passwordCharacters = characters.lowercase;
    } else if (includeSpecialCharacters.checked === false && includeNumericCharacters.checked === false && includeUppercaseCharacters.checked === true && includeLowercaseCharacters.checked === false){
        var passwordCharacters = characters.uppercase;
    } else if (includeSpecialCharacters.checked === false && includeNumericCharacters.checked === true && includeUppercaseCharacters.checked === false && includeLowercaseCharacters.checked === false){
        var passwordCharacters = characters.numeric;
    } else if (includeSpecialCharacters.checked === true && includeNumericCharacters.checked === false && includeUppercaseCharacters.checked === false && includeLowercaseCharacters.checked === false){
        var passwordCharacters = characters.special; 
    } else if (includeSpecialCharacters.checked === false && includeNumericCharacters.checked === false && includeUppercaseCharacters.checked === true && includeLowercaseCharacters.checked === true){
        var passwordCharacters = characters.lowercase.concat(characters.uppercase);
    } else if (includeSpecialCharacters.checked === false && includeNumericCharacters.checked === true && includeUppercaseCharacters.checked === false && includeLowercaseCharacters.checked === true){
        var passwordCharacters = characters.lowercase.concat(characters.numeric);
    } else if (includeSpecialCharacters.checked === true && includeNumericCharacters.checked === false && includeUppercaseCharacters.checked === false && includeLowercaseCharacters.checked === true){
        var passwordCharacters = characters.lowercase.concat(characters.special);
    } else if (includeSpecialCharacters.checked === false && includeNumericCharacters.checked === true && includeUppercaseCharacters.checked === true && includeLowercaseCharacters.checked === false){
        var passwordCharacters = characters.numeric.concat(characters.uppercase);
    } else if (includeSpecialCharacters.checked === true && includeNumericCharacters.checked === false && includeUppercaseCharacters.checked === true && includeLowercaseCharacters.checked === false){
        var passwordCharacters = characters.special.concat(characters.uppercase);
    } else if (includeSpecialCharacters.checked === true && includeNumericCharacters.checked === true && includeUppercaseCharacters.checked === false && includeLowercaseCharacters.checked === false){
        var passwordCharacters = characters.numeric.concat(characters.special);
    } else if (includeSpecialCharacters.checked === true && includeNumericCharacters.checked === true && includeUppercaseCharacters.checked === true && includeLowercaseCharacters.checked === false){
        var passwordCharacters = characters.numeric.concat(characters.special, characters.uppercase);
    } else if (includeSpecialCharacters.checked === true && includeNumericCharacters.checked === true && includeUppercaseCharacters.checked === false && includeLowercaseCharacters.checked === true){
        var passwordCharacters = characters.numeric.concat(characters.special, characters.lowercase);
    } else if (includeSpecialCharacters.checked === true && includeNumericCharacters.checked === false && includeUppercaseCharacters.checked === true && includeLowercaseCharacters.checked === true){
        var passwordCharacters = characters.lowercase.concat(characters.special, characters.uppercase);
    } else if (includeSpecialCharacters.checked === false && includeNumericCharacters.checked === true && includeUppercaseCharacters.checked === true && includeLowercaseCharacters.checked === true){
        var passwordCharacters = characters.numeric.concat(characters.lowercase, characters.uppercase);
    } else if (includeSpecialCharacters.checked === true && includeNumericCharacters.checked === true && includeUppercaseCharacters.checked === true && includeLowercaseCharacters.checked === false){
        var passwordCharacters = characters.numeric.concat(characters.special, characters.uppercase);
    } else {
        var passwordCharacters = characters.numeric.concat(characters.special, characters.uppercase, characters.lowercase);
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
