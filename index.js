// Collect user name
const playerName = prompt("Please enter username");

let points = 0;
let count = 0;

const enterNumber = (range) => {
  return new Promise((resolve, reject) => {
    const userGuess = Number(prompt(`Guess a number between 1 and ${range}`));

    const randomNumber = Math.floor(Math.random() * range + 1);

    if (isNaN(userGuess)) {
      reject(new Error("Wrong Input Type")); // If the user enters a value that is not a number, run reject with an error
    }

    // Check if the user guess is equal to the random number
    if (randomNumber === userGuess) {
      resolve({
        points: points + 1,
        randomNumber,
      });
      console.log(`You Won, ${playerName},`);
      count += 1;
      console.log(`${count} points`);
      handleGuess(range + 1);
      // points++;
    } else {
      resolve({
        points: points,
        randomNumber,
      });
      console.log("Sorry You Got It Wrong");

      if (confirm("Do you want to continue?")) {
        handleGuess(range);
      } else {
        console.log("Game Ends");
      }
    }
  });
};

const handleGuess = async (range) => {
  try {
    const result = await enterNumber(range);
  
    console.log(`${result.points} points`);
  } catch (error) {
    console.log(error);
  }
};

handleGuess(2);
