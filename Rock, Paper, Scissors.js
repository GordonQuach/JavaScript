/* When combined with a HTML page, this JavaScript code enables users to 
play the classic game of "Rock, Paper, Scissors!" */

var userChoice = prompt("Do you choose rock, paper, or scissors?");

var computerChoice = Math.random();

if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

var compare = function (choice1, choice2) {
    if (choice1 === choice2) {
        document.write ("The result is a tie!");
    }
    else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            document.write ("Rock wins!");
        }
        else {
            document.write ("Paper wins!");
        }
    }
    else if (choice1 === "paper") {
        if (choice2 === "rock") {
            document.write ("Paper wins!");
        }
        else {
            document.write ("Scissors wins!");
        }
    }
    else if (choice1 === "scissors") {
        if (choice2 === "rock") {
            document.write ("Rock wins!");
        }
        else {
            document.write ("Scissors wins!");
        }
    }
};


compare (userChoice, computerChoice)
