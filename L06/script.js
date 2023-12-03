
let Start = prompt("You wake up in an abandoned house. You look around and find two potions. The yellow potion has something in its bottle, the other is red with the label 'venenum'. \nWhich one do you drink red potion or the yellow potions?");
//Beginn von der Story mit ''Start ''als Anfangswert , prompt ausgabe box, '\n' für Zeilensprung

if (Start.toLowerCase() === "yellow") {
alert("Congratulations! You chose the yellow potion and found a key. You can now unlock the door and escape!");
//wenn gelb ausgegben wird kommt der Text in altert ,(toLowerCase) egal ob man groß oder klein schreibt es aktzeptiert wird
let outside = prompt("As you open the door, you find yourself in a dimly lit room with a menacing, oversized rat. \nWhat will you do fight or run ?");
//Beginn 2 Ereigniss  

if (outside.toLowerCase() === "fight") {
alert("With courage, you confront the gigantic rat. Using your bare hands, you over come the best. \nVictory is yours and now you are free to go.");
} //Wenn fight ausgegben wird kommt der Text im alert,  (if) die 1 Möglichkeit der ausgabe

else if (outside.toLowerCase() === "run") {
alert("Realizing the danger, you decide to run away from the huge rat. Unfortunately, the rat catches up with you and strikes you down. Game over.");
} //Wenn run ausgegben wird kommt der Text im alert , else if die 2 Möglichkeit der ausgabe

else {
alert("Invalid choice. The adventure ends.");
}//Wenn run oder fight nicht ausgegben wird kommt der Text im alert 

} else if (Start.toLowerCase() === "red") {
 alert("Oh no! You chose the red potion labeled 'venenum' and immediately feel dizzy. \n The room starts to spin and you collapse. Game over.");
} //muss nach unten ,weil wenn es vor dem 2 Ereigniss (Outside) ist kann man weiter spielen obwohl nach dem ''red'' auswahl game over ist 
    

else {
alert("Invalid choice. The adventure ends.");
}