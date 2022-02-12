function main() {
alert("Welcome to the most amazing gussing game")
//CALL difficulty WITH difficulty_Level
//SET difficulty_Level TO read user input 
let maxValue = "" ;
let maxNumberOfAttempts = "" ;
}


function difficulty(difficultyLevel) {
    if (difficultyLevel === "1") {
        maxValue = 10;
        maxNumberOfAttempts = 1000000;
    }
    else if (difficultyLevel === "2") {
        maxValue = 10;
        maxNumberOfAttempts = 5;
    }
    else if (difficultyLevel === "3") {
        maxValue = 100;
        maxNumberOfAttempts = 5;
    }
    else if (difficultyLevel === "4") {
        maxValue = 500;
        maxNumberOfAttempts = 8;
    }
    else if (difficultyLevel === "5") {
        maxValue = 1000;
        maxNumberOfAttempts = 9;
    }
    else {
        alert("Error occured. Please choose a valid diffeculty");
    }
    let min = 1;
    max = maxValue;
    let targetNumber = Math.floor(Math.random() * (max - min) + min);
    console.log(targetNumber)   
        return maxValue, maxNumberOfAttempts, targetNumber;
    }


function playGame() {
    //CALL difficulty WITH difficulty_Level RETURNING max_Number_Of_Attempts AND max_Value AND Target_Number
    keepPlaying = true;
    userNumberOfAttempts = 0;
    // alert(`You can start guessing. the number between 1 - ${maxValue}. You have ${maxNumberOfAttempts} tries`)
    
}



main();