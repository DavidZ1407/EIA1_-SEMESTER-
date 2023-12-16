story = [
    "Congratulations! \n You chose the yellow potion and found a key. \n You can now unlock the door and escape!",
    "Oh no! \n You chose the red potion labeled 'venenum' and immediately feel dizzy. \n The room starts to spin and you collapse. <br> Game over." ,
    "Invalid choice. \n The adventure ends."
]
story1 =[
 "As you open the door, you find yourself in a dimly lit room with a menacing, oversized rat. <br> What will you do <span style='color: yellow;'>fight</span> or <span style='color: red;'>run</span>?",
 "With courage, you confront the gigantic rat. Using your bare hands, you over come the best. <br> Victory is yours and now you are free to go.",
 "Realizing the danger, you decide to run away from the huge rat. Unfortunately, the rat catches up with you and strikes you down. Game over.",
]



const input = document.querySelector(".inputField");
const output = document.getElementById("output");
const resetButton = document.getElementById("resetButton");
const originalText = document.getElementById("output").innerHTML; 

let currentStory = story;
let isGameOver = false;


function handleInput(event) {
    if (event.key === "Enter" && !isGameOver) {
        const userChoice = input.value.toLowerCase();

        if (currentStory === story) {
        if (userChoice === "yellow") {
            currentStory = story1;
            output.innerHTML = story[0] + "<br>" + story1[0];
        } else if (userChoice === "red") {
          output.innerHTML = currentStory[1];
          isGameOver = true;
          input.removeEventListener("keydown", handleInput);
        } else {
          output.innerHTML = currentStory[2];
          isGameOver = true;
          input.removeEventListener("keydown", handleInput);
            }
        } else if (currentStory === story1) {
          if (userChoice === "fight") {
          output.innerHTML = currentStory[1];
          isGameOver = true;
          input.removeEventListener("keydown", handleInput);
        } else if (userChoice === "run") {
          output.innerHTML = currentStory[2];
          isGameOver = true;
          input.removeEventListener("keydown", handleInput);
        } else {
          output.innerHTML = currentStory[3];
          isGameOver = true;
          input.removeEventListener("keydown", handleInput);
            }
        }

        input.value = "";
    }
}

input.addEventListener("keydown", handleInput);

function resetGame() {
    currentStory = story;
    isGameOver = false;
    output.innerHTML = originalText; 
    input.value = ""; 
    input.addEventListener("keydown", handleInput); 
}

resetButton.addEventListener("click", resetGame);



