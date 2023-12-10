
  let textStart = "You wake up in an abandoned house. You look around and find two potions. The yellow potion has something in its bottle, the other is red with the label 'venenum'.\nWhich one do you drink, the red or the yellow?";
  let textRight = "Congratulations! You chose the yellow potion and found a key. You can now unlock the door and escape!";
  let textLeft = "Oh no! You chose the red potion labeled 'venenum' and immediately feel dizzy. \n The room starts to spin and you collapse. Game over.";
  let textEnd = "Invalid choice. The adventure ends.";
  let outsideStart = "As you open the door, you find yourself in a dimly lit room with a menacing, oversized rat. \nWhat will you do fight or run ?";
  let outsideRight = "With courage, you confront the gigantic rat. Using your bare hands, you over come the best. \nVictory is yours and now you are free to go.";
  let outsideLeft = "Realizing the danger, you decide to run away from the huge rat. Unfortunately, the rat catches up with you and strikes you down. Game over.";
  //Name für Textarray
  let Textarray = [textStart, textRight, textLeft, textEnd, outsideStart, outsideRight, outsideLeft]; // (0,1,2,3,4,5,6) Zählweise

  function getText(choice) { // funktion soll auf choice zugreifen und verwenden
    switch (choice.toLowerCase()) { // Switch ist wie eine if-Funktion die mehrere Variable verwenden kann 
    case "yellow": //Welcher Wert eingetippt werden muss
    alert(Textarray[1]); // wenn yellow ausgibt soll Textarray 1 ausgeben
    let nextChoice = prompt(Textarray[4]); // Nächstes ereignis was in Textarray 4 abgerufen wird 
    return nextChoice.toLowerCase() === "fight" ? Textarray[5] : nextChoice.toLowerCase() === "run" ? Textarray[6] : Textarray[3];
    // wie eine (If ,else if,else Funktion ) wenn nextChoice = fight ist wird Textarray [5] ausgewählt, wenn nicht wird 2 Bedingung überft wenn das nicht stimmt wird die 3 Bedigung ausgewählt 
    case "red": 
    return Textarray[2];
    default:
    return Textarray[3]; // wird ausgegeben wenn die zwei Möglichkeiten nicht ausgewählt werden 
    }
}

  let userChoice = prompt(Textarray[0]); //ausgabe von textStart
  let result = getText(userChoice); // ausgabe was in function eingegeben wird 
  alert(result); // ausgabe von Result in einem Fenster
