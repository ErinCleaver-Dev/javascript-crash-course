class GuessNumber{
    constructor() {
        this.guesses = 0;
        this.correctNumber = 0;
    }

    playGame(){
    }

    initGame(){
    }

    getRandomNumber(){
        
    }

    saveGuessHistory(guess) {
    }

    displayHistory() {
        let index; // TODO
        let list = "<ul class='list-group'>";
        // *CODE GOES BELOW HERE *
        list += '</ul>'
        document.getElementById("history").innerHTML = list;
    }

    getDialog(dialogType, text){
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

    showYouWon(){
        const text = "Awesome job, you got it!"
        /**
         * Retrieve the dialog using the getDialog() function
         * and save it to variable called dialog
         * HINT: Use the 'won' and text parameters 
         */
        // *CODE GOES BELOW HERE *
      
        document.getElementById("result").innerHTML = dialog;
    }

    showNumberAbove(){
        const text = "Your guess is too high!"
        /**
         * Retrieve the dialog using the getDialog() function
         * and save it to variable called dialog
         * HINT: Use the 'warning' and text parameters 
         */
        // *CODE GOES BELOW HERE *
      
        document.getElementById("result").innerHTML = dialog;
    }
    showNumberBelow(){
        const text = "Your guess is too low!"
        /**
         * Retrieve the dialog using the getDialog() function
         * and save it to variable called dialog
         * HINT: Use the 'warning' and text parameters 
         */
        // *CODE GOES BELOW HERE *
      
        document.getElementById("result").innerHTML = dialog;
    }
}

guessNumberGame = new GuessNumber();

window.onload = function() {
    document.getElementById("number-submit").addEventListener("click", guessNumberGame.playGame);
    document.getElementById("restart-game").addEventListener("click", guessNumberGame.initGame)
}
