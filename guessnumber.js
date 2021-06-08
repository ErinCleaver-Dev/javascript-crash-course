let correctNumber = 0;
let guesses = [];


    playGame = () => {
        let guess =document.getElementById('number-guess').value;
        console.log(correctNumber)
        displayResult(guess, correctNumber)
        saveGuessHistory(guess)
        displayHistory()
    }

    initGame = ()=>{
        randomNumber = getRandomNumber();
        guesses = [];
        document.getElementById("history").innerHTML = "";
        document.getElementById("result").innerHTML = "";
    }

    displayResult = (guess) =>{
        if(guess == correctNumber) {
            showYouWon()
        } else if(guess > correctNumber) {
            showNumberAbove()
        } else if(guess < correctNumber) {
            showNumberBelow()
        }
    }

    getRandomNumber = () =>{
        let randomNumber = (Math.random() * 100) + 1;
        randomNumber = Math.floor(randomNumber);
        correctNumber = randomNumber;
    }

    saveGuessHistory = (guess) => {
        guesses.push(guess);
    }

    displayHistory = () => {
        let list = "<ul class='list-group'>";
           for(let index = guesses.length; index > 0; index--) {
            list += `<li class="list-group-item"> You guessed ${guess}</li>`
           }
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
        
        let dialog = getDialog("won", text);
        document.getElementById("result").innerHTML = dialog;
    }

    showNumberAbove = () => {
        const text = "Your guess is too high!"
        let dialog = getDialog("warning", text);

      
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
        let dialog = getDialog("warning", text);

      
        document.getElementById("result").innerHTML = dialog;
    }


window.onload = function() {
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame)
    getRandomNumber();
}
