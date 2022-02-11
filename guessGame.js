function main() {
    // alert('Welcome to the most amazing gussing game')
    // difficulty(difficultyLevel)
    let maxValue = ""; 
    let maxNumberOfAttempts = "" ;
}



function difficulty(difficultyLevel){
    console.log("start")

    if (difficultyLevel == "1"){
        console.log("1")
        maxValue = 10;
        maxNumberOfAttempts = 5;
    }
    else if (difficultyLevel == "2"){
        console.log("2")

        maxValue = 10;
        maxNumberOfAttempts = 5;
    }
    else if (difficultyLevel == "3"){
        console.log("3")

        maxValue = 100;
        maxNumberOfAttempts = 5;
    }            
    else if (difficultyLevel == "4"){
        console.log("4")

        maxValue = 500;
        maxNumberOfAttempts = 8;
    }
    else if (difficultyLevel == "5"){
        console.log("5")

        maxValue = 1000;
        maxNumberOfAttempts = 9;
    }
    else {
        alert("Please choose a valid diffeculty")
    }
    console.log("end")
        min = 1;
        max = maxValue;
        let targetNumber = Math.floor(Math.random() * (max - min + 1) + min); 
        console.log(targetNumber)
        return maxNumberOfAttempts, maxValue, targetNumber
}


function playGame(maxNumberOfAttempts, maxValue) {
    
 console.log("play the game")

}


main();
