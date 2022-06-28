//validation if the user type at least 1 character
function ValCharacter(character){
  while(character.length <1){
    character = prompt("Try to type someting this time !");
  }
  return character;
}
// validation if our value is a number
function Validation(number){
  while(isNaN(number)){
    number = prompt("Write a numerical value only.");
    number = ValCharacter(number);
  }
  return number;
}
//Create a funtion to validate and get the leght of characters for my password
function promptNumCharacters(){
    var NumCharacters = prompt("Enter the leght of character that you wish !");
    var valnum = Validation(NumCharacters);
    while (valnum < 8 || valnum > 128){
      alert("Your number should be greater than 8 and less than 128");
      valnum = prompt("Try agrain.!");
      valnum = Validation(valnum);
    }
    return valnum;
}

var numOfChar = promptNumCharacters();
var RamPassword = "";

//Creation Array to use in our quetions
var ListQuestions = ["lowercase","uppercase","numeric","special character"];

const alphabet = "abcdefghijklmnopqrstuvwxyz";


const alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const randomCharacterUpper = alphabetUpper[Math.floor(Math.random() * alphabetUpper.length)];

const ramdonNumber = Math.floor(Math.random()* 100)+1;

const SpecialChar = " |=>!$%&/(@#^*-+<;:.,]}{)]~'? ";
const randomCharacterSpe = SpecialChar[Math.floor(Math.random()* SpecialChar.length)];


while(RamPassword.length < numOfChar/4){
  const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)];
  RamPassword+=randomCharacter;
}
console.log(RamPassword);

// function chooseCharacter(numType){
// }

function CharacterType(){
  for(var i=0; i < ListQuestions.length; i++){
    var cont = 0;
    var position = ListQuestions[i];
    var question = prompt("Do you want yo include" +position);
    question = ValCharacter(question);
    // if(question )
  }
}