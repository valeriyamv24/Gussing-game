function main() {
alert("Welcome to the most amazing gussing game")
level(difficulty)
let maxValue = "" ;
let maxNumberOfAttempts = "" ;

}

function level(difficulty) {
    if (difficulty == "1"){
        maxValue = 10;
        maxNumberOfAttempts = 5;
    }
    else if (difficulty == "2"){
        maxValue = 10;
        maxNumberOfAttempts = 5;
    }
    else if (difficulty == "3"){
        maxValue = 100;
        maxNumberOfAttempts = 5;
    }            
    else if (difficulty == "4"){
        maxValue = 500;
        maxNumberOfAttempts = 8;
    }
    else if (difficulty == "5"){
        maxValue = 1000;
        maxNumberOfAttempts = 9;
    }
    else {
        alert("Error occured. Please choose a valid diffeculty")
    }

    let min = 1;
    max = maxValue;
    let targetNumber =  Math.floor(Math.random() * (max - min) + min);
    return maxValue, maxNumberOfAttempts, targetNumber
 }



function playGame() {
    console.log("play the game")
    level(difficulty)
    keepPlaying = true;
    userNumberOfAttempts = 0;
    alert(`You can start guessing. the number between 1 - ${maxValue}. You have ${maxNumberOfAttempts} tries`)



}
playGame()

main();