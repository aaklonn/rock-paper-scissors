let generateScore = (a, b) => {
  if (a === b) {
    console.log("TIE");
  } else if (
    (a === "ROCK" && b === "SCISSORS") ||
    (a === "PAPER" && b === "ROCK") ||
    (a === "SCISSORS" && b === "PAPER")
  ) {
    humanScore++;
    console.log("YOU WON THIS ROUND");
  } else {
    computerScore++;
    console.log("YOU LOST THIS ROUND");
  }
  console.log(`Your new score is ${humanScore}`);
  console.log(`Computer's new score is ${computerScore}`);
};
