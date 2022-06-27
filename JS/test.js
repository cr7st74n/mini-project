//Create a funtion to validate and get the leght of characters for my password
function promptNumCharacters(){
    var NumCharacters = prompt("Enter the leght of character that you wish !");
    while (NumCharacters < 8 || NumCharacters > 128){
      alert("Your number should be greater than 8 and less than 128");
      NumCharacters = prompt("Try agrain.!");
    }
    return NumCharacters;
}

console.log(promptNumCharacters());