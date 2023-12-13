
let textStart = "You wake up in an abandoned house. You look around and find two potions. The yellow potion has something in its bottle, the other is red with the label 'venenum'.\nWhich one do you drink, the red or the yellow?";
let textRight = "Congratulations! You chose the yellow potion and found a key. You can now unlock the door and escape!";
let textLeft = "Oh no! You chose the red potion labeled 'venenum' and immediately feel dizzy. \n The room starts to spin and you collapse. Game over.";
let textEnd = "Invalid choice. The adventure ends.";
let outsideStart = "As you open the door, you find yourself in a dimly lit room with a menacing, oversized rat. \nWhat will you do fight or run ?";
let outsideRight = "With courage, you confront the gigantic rat. Using your bare hands, you over come the best. \nVictory is yours and now you are free to go.";
let outsideLeft = "Realizing the danger, you decide to run away from the huge rat. Unfortunately, the rat catches up with you and strikes you down. Game over.";

let Textarray = [textStart, textRight, textLeft, textEnd, outsideStart, outsideRight, outsideLeft]; 

function getText(choice) {
let choiceLower = choice.toLowerCase();


if (choiceLower === "yellow") {
    alert(Textarray[1]);
    let nextChoice = prompt(Textarray[4]);
    
    if (nextChoice.toLowerCase() === "fight") {
      alert(Textarray[5]);
    } else if (nextChoice.toLowerCase() === "run") {
      alert(Textarray[6]);
    } else {
      alert(Textarray[3]);
    }
  } 
  
  else if (choiceLower === "red") {
    alert(Textarray[2]);
  } else {
    alert(Textarray[3]);
  }
}

let userChoice = prompt(Textarray[0]); 
let result = getText(userChoice); 