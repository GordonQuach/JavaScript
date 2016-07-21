/* When combined with a HTML page, this JavaScript code enables users to race against Usain Bolt! */

// Check if the user is ready to play!

confirm("I am ready to play!");

// Recieve's the user's age.

var age = prompt("How old are you?");

// Check's if user is old enough to play game.

if (age < 13) {
    document.write("You are not old enough. \n");
}
else {
    document.write("Welcome! Play at your own risk... \n");
}

// Begins plot of the game.

document.write("You are currently at the Rio 2016 Olympics. Avoiding viruses and corrupt government, you make your way to the stadium. \n");

document.write("Suddenly, you see Usain Bolt. He stops and says, 'Who wants to race me?' \n")

// User chooses to interact with Bolt or not.

var userAnswer = prompt("Do you want to race Usain Bolt? Y/N");

if (userAnswer === ("Y")) {
    document.write("You and Bolt start racing. It's neck and neck! You win by a shoelace! \n");
}
else {
    document.write("Oh no! Bolt shakes his head and laughts at you because he can. \n");
}

// Once the user finishes this game, we check for feedback.

var feedback = prompt ("Please rate the game out of 10!");

if (feedback >= 8) {
    document.write("Thank you! We should race at the next Olympics!");
}
else {
    document.write("I'll keep practicing coding... and racing.");
}
