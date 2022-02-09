// alert('Welcome to the most amazing gussing game')

function level() {
    if (document.querySelector("#veryEasy").checked){
        let maxValue = 10;
        let maxNumberOfAttempts = 5;
            return maxValue, maxNumberOfAttempts; // ???return??
    }
    else if (document.querySelector("#easy").checked){
        let maxValue = 10;
        let maxNumberOfAttempts = 5;
    }
    else if (document.querySelector("#medium").checked){
        let maxValue = 100;
        let maxNumberOfAttempts = 5;
    }            
    else if (document.querySelector("#difficult").checked){
        let maxValue = 500;
        let maxNumberOfAttempts = 8;
    }
    else if (document.querySelector("#veryDifficult").checked){
        let maxValue = 1000;
        let maxNumberOfAttempts = 9;
    }
    else {
        alert("Error occured. Please choose a valid diffeculty")
    }

}




function playGame() {
 console.log("play the game")

}



function getUser() {
    const name = "Nathan";
    const role = "Web Developer";
    return name, role;
  }

  const user = getUser();
    console.log(user);