function main() {
    alert('Welcome to the most amazing gussing game')

    let maxValue = ""; 
    let maxNumberOfAttempts= "" ;

}




function level() {

    if (document.querySelector("#veryEasy").checked){
        console.log("veryeasy")
        maxValue = 10;
        maxNumberOfAttempts = 5;
            return maxValue, maxNumberOfAttempts;
    }
    else if (document.querySelector("#easy").checked){
        console.log("easy")

        maxValue = 10;
        maxNumberOfAttempts = 5;
            return maxValue, maxNumberOfAttempts;

    }
    else if (document.querySelector("#medium").checked){
        console.log("medium")

        maxValue = 100;
        maxNumberOfAttempts = 5;
            return maxValue, maxNumberOfAttempts;

    }            
    else if (document.querySelector("#difficult").checked){
        console.log("difficult")

        maxValue = 500;
        maxNumberOfAttempts = 8;
            return maxValue, maxNumberOfAttempts;

    }
    else if (document.querySelector("#veryDifficult").checked){
        console.log("verydifficult")
        maxValue = 1000;
        maxNumberOfAttempts = 9;
            return maxValue, maxNumberOfAttempts;

    }
    else {
        alert("Error occured. Please choose a valid diffeculty")
    }

}
// console.log(maxValue)



function playGame() {
 console.log("play the game")

}


main()
