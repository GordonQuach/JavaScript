// When combined with a HTML page, this JavaScript code enables users to fight against a dragon! //


var slaying = true

// This randomizes if you hit the dragon, value of 1-True, or miss, value of 0-False. Math.floor rounds the number down. //
var youHit = Math.floor(Math.random() * 2)

// We do the same thing as youHit, but set the range from 1-5. Range goes from 0-4 with Math.floor, thus we add 1. //
var damageThisRound = Math.floor(Math.random()*5 + 1)

var totalDamage = 0

// We keep on running the game until the dragon is slayed. //
while (slaying) {
    if (youHit) {
        document.write("You hit the dragon.");
        // This special syntax allows us to add total and this round's damage together for the new value of totalDamage. //
        totalDamage += damageThisRound;
        if (totalDamage >= 4) {
            document.write("You have slayed the dragon! \n You Win!");
            slaying = false;
        }
        else {
            youHit = Math.floor(Math.random() * 2);
        }
    }
    else {
        document.write("The dragon has killed you. \n Game Over.");
        slaying = false;
    }
}