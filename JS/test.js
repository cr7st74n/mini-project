//validation if the user type at least 1 character
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
var conlen=0;

//Creation Array to use in our quetions
var ListQuestions = ["lowercase","uppercase","numeric","special character"];

const alphabet = "abcdefghijklmnopqrstuvwxyz";

const alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const ramdonNumber = Math.floor(Math.random()* 100)+1;

const SpecialChar = " |=>!$%&/(@#^*-+<;:.,]}{)]~'? ";
<<<<<<< HEAD

const allRandom = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ|=>!$%&/(@#^*-+<;:.,]}{)]~'?"

// console.log(RamPassword);
function chooseCharacter(count){
    if(count == "0"){
        const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)];
        RamPassword+=randomCharacter;
        console.log(RamPassword);
    }else if(count == "1"){
        const randomCharacterUpper = alphabetUpper[Math.floor(Math.random() * alphabetUpper.length)];
        RamPassword+=randomCharacterUpper;
        console.log(RamPassword);
    }else if(count == "2"){
        const ramdonNumber = Math.floor(Math.random()* 10)+1;
        RamPassword+=ramdonNumber;
        console.log(RamPassword);
    }else if(count == "3"){
        const randomCharacterSpe = SpecialChar[Math.floor(Math.random()* SpecialChar.length)];
        RamPassword+=randomCharacterSpe;
        console.log(RamPassword);
=======

const allRandom = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ|=>!$%&/(@#^*-+<;:.,]}{)]~'?"

const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)];

const randomCharacterUpper = alphabetUpper[Math.floor(Math.random() * alphabetUpper.length)];

const randomCharacterSpe = SpecialChar[Math.floor(Math.random()* SpecialChar.length)];

// console.log(RamPassword);
function chooseCharacter(count){
    if(count == "0"){
        RamPassword+=randomCharacter;
        conlen=+1;
    }else if(count == "1"){
        RamPassword+=randomCharacterUpper;
        conlen=+1;
    }else if(count == "2"){
        RamPassword+=ramdonNumber;
        conlen=+1;
    }else if(count == "3"){
        RamPassword+=randomCharacterSpe;
        conlen=+1;
>>>>>>> 8ca2f72df332b3414d286798387f51902ae88664
   }
   console.log(count);
   
  return RamPassword;
}

function CharacterType(){
  for(var i=0; i < ListQuestions.length; i++){
    var position = ListQuestions[i];
    var question = prompt("Do you want yo include " +position +" YES/NO ?" );
    var response = question.toUpperCase();
    console.log(response);
  while(response != "YES" && response != "NO"){
    response = prompt("Write yes/no response only");
    response = response.toUpperCase();
    console.log(response);
  }
  if (response === "YES"){
    alert("ADD");
<<<<<<< HEAD
    chooseCharacter(i);
  }
  else{
    alert("The password would be generated automatically!")
    while(RamPassword.length <= numOfChar){
      const randomALL= allRandom[Math.floor(Math.random()* allRandom.length)];
=======
    RamPassword = chooseCharacter(i);
  } 

  if(RamPassword.length < numOfChar){
    console.log(RamPassword.length);
    alert("Adding!")
    for(var j=RamPassword.length;j<numOfChar-conlen;j++){
      var randomALL= allRandom[Math.floor(Math.random()* allRandom.length)];
>>>>>>> 8ca2f72df332b3414d286798387f51902ae88664
      RamPassword+=randomALL;
    }
  }
  }
  return RamPassword;
}
<<<<<<< HEAD

=======
>>>>>>> 8ca2f72df332b3414d286798387f51902ae88664
var valor = CharacterType();
console.log(valor);
