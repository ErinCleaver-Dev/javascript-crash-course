let correctNumber = 0;

    playGame = () => {
        let guess =document.getElementById('number-guess').value;
        console.log(correctNumber)
        displayResult(guess, correctNumber)



    }

    initGame = ()=>{
    }

    displayResult = (guess, correctNumber) =>{
        if(guess == correctNumber) {
            console.log("You won!");
        } else if(guess > correctNumber) {
            console.log("To high!");
        } else if(guess < correctNumber) {
            console.log("To low!");
        }
    }

    getRandomNumber = () =>{
        let randomNumber = (Math.random() * 100) + 1;
        randomNumber = Math.floor(randomNumber);
        correctNumber = randomNumber;
    }

    saveGuessHistory = (guess) => {
    }

    displayHistory = () => {
        let index; // TODO
        let list = "<ul class='list-group'>";
        // *CODE GOES BELOW HERE *
        list += '</ul>'
        document.getElementById("history").innerHTML = list;
    }

    getDialog = (dialogType, text) =>{
        let dialog;
        switch(dialogType){
          case "warning":
            dialog = "<div class='alert alert-warning' role='alert'>"
            break;
          case "won":
            dialog = "<div class='alert alert-success' role='alert'>"
            break;
        }
        dialog += text;
        dialog += "</div>"
        return dialog;
    }

    showYouWon = () =>{
        const text = "Awesome job, you got it!"
        /**
         * Retrieve the dialog using the getDialog() function
         * and save it to variable called dialog
         * HINT: Use the 'won' and text parameters 
         */
        // *CODE GOES BELOW HERE *
      
        document.getElementById("result").innerHTML = dialog;
    }

    showNumberAbove = () => {
        const text = "Your guess is too high!"
        /**
         * Retrieve the dialog using the getDialog() function
         * and save it to variable called dialog
         * HINT: Use the 'warning' and text parameters 
         */
        // *CODE GOES BELOW HERE *
      
        document.getElementById("result").innerHTML = dialog;
    }
    showNumberBelow = () =>{
        const text = "Your guess is too low!"
        /**
         * Retrieve the dialog using the getDialog() function
         * and save it to variable called dialog
         * HINT: Use the 'warning' and text parameters 
         */
        // *CODE GOES BELOW HERE *
      
        document.getElementById("result").innerHTML = dialog;
    }


window.onload = function() {
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame)
    getRandomNumber();
}
