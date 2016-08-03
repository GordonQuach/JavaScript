// When combined with a HTML page, this JavaScript code enables users to play a daring game to choose how they're going to save a friend. //


var user = prompt("While going hiking with your friends, one of them is bitten by an anaconda and falls down a deep crevasse. What do you want to do? - Jump Down, Call for Help, or Forget Him").toUpperCase()

switch (user) {
    case "JUMP DOWN":
        var med = prompt ("Did you remember to bring the medical kit? - Y/N").toUpperCase();
        var rope = prompt ("Did you remember to bring the rope to get back up? - Y/N").toUpperCase();
        if (med === "Y" && rope === "Y") {
            document.write("Awesome! Now you can save your friend, but how will you get back up?");
        }
        else if ((med === "Y" || rope === "N") || (med === "N" || rope === "Y")) {
            document.write("OMG! You forgot something important. ");
        }
        else {
            document.write("Well...?");
        }
        break;
    case "CALL FOR HELP":
        var signal = prompt ("Is there signal on this hike? Y/N").toUpperCase();
        if (signal === "Y") {
            document.write("CALL FOR HELP!");
        }
        else if (signal === "N") {
            document.write("... By the time someone got signal/called for help, your friend has died. \n GAME OVER");
        }
        else {
            document.write("Well...? This is important!");
        }
        break;
    case "FORGET HIM":
        var check = prompt ("Seriously? Y/N").toUpperCase();
        if (check === "Y") {
            console.log("Well, then your friend dies. Hehe");
        }
        else if (check === "N") {
            document.write("Why did you pick this in the first place then?!");
        }
        else {
            document.write("Answer me please!");
        }
    default:
        document.write("You didn't tell me what you want to do! Please refresh the page and try again.");
        break;
}