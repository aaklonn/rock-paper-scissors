const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const playbutton = document.querySelector(".play");

let humanChoice = "";
let computerChoice = "";
let humanScore = 0;
let computerScore = 0;
let roundNo = 1;

const choices = document.querySelector(".choices");
choices.classList.add("disabled");

const nextRoundButton = document.createElement("button");
nextRoundButton.classList = "next-button";
nextRoundButton.textContent = "NEXT ROUND ->";

const replayButton = document.createElement("button");
replayButton.classList = "replay-button";
replayButton.textContent = "PLAY AGAIN";

replayButton.addEventListener("click", () => {
  location.reload();
});
rock.addEventListener("click", () => {
  humanChoice = rock.value;
  window.scrollTo({
    top: 0,
    behavior: "smooth", // or 'auto' for instant
  });

  generatecomputerChoice();
  generateResultPage();
});

paper.addEventListener("click", () => {
  humanChoice = paper.value;
  window.scrollTo({
    top: 0,
    behavior: "smooth", // or 'auto' for instant
  });

  generatecomputerChoice();
  generateResultPage();
});

scissors.addEventListener("click", () => {
  humanChoice = scissors.value;
  window.scrollTo({
    top: 0,
    behavior: "smooth", // or 'auto' for instant
  });

  generatecomputerChoice();
  generateResultPage();
});

let generatecomputerChoice = () => {
  let c = Math.random();
  computerChoice = c < 1 / 3 ? "ROCK" : c < 2 / 3 ? "SCISSORS" : "PAPER";
};

let createRound = () => {
  let newbody = document.createElement("section");
  newbody.classList = "body-choice";
  let roundSelection = document.createElement("div");
  let currentRound = String(roundNo);
  roundSelection.classList = "selection-msg";
  let roundHeaderinfo =
    "<h2>SELECT YOUR CHOICE - ROUND <span>" +
    currentRound +
    "</span> </h2><p>CLICK ON THE IMAGE TO CHOOSE YOUR OPTION</p>";
  roundSelection.innerHTML = roundHeaderinfo;
  let roundChoices = document.createElement("div");
  roundChoices.classList = "choices";

  let userCurrentScore = String(humanScore);
  let computerCurrentScore = String(computerScore);

  let scoresSection = document.createElement("div");
  scoresSection.classList = "scores";

  let scoreUserSection = document.createElement("div");
  scoreUserSection.classList = "humanScore";
  scoreUserSection.textContent = "USER'S CURRENT SCORE : " + userCurrentScore;

  let scoreComputerSection = document.createElement("div");
  scoreComputerSection.classList = "computerScore";
  scoreComputerSection.textContent =
    "COMPUTER'S CURRENT SCORE : " + computerCurrentScore;

  scoresSection.appendChild(scoreUserSection);
  scoresSection.appendChild(scoreComputerSection);
  newbody.appendChild(scoresSection);

  roundChoices.appendChild(choices);
  choices.classList.remove("disabled");
  newbody.appendChild(roundSelection);
  newbody.appendChild(roundChoices);
  let gamebody = document.querySelector("#game-body");
  gamebody.append(newbody);
};

let generateResultPage = () => {
  let oldBody = document.querySelector(".body-choice");

  oldBody.remove();

  //add new game results section to game body
  const gameBody = document.querySelector("#game-body");
  let resultSection = document.createElement("section");
  resultSection.classList = "result-section";

  let selected = document.createElement("section");
  selected.classList = "selected-choice";

  let humanChoiceInHTML = document.createElement("div");
  humanChoiceInHTML.setAttribute("id", "humanChoice");
  let humanChoiceHTML = document.createElement("div");
  humanChoiceHTML.setAttribute("id", "choice-text");
  humanChoiceHTML.textContent = "SELECTED USER CHOICE ";
  let choiceHumanCard = document.createElement("div");
  choiceHumanCard.classList = "selected-choice-human";
  let choiceHeader = document.createElement("div");
  choiceHeader.classList = "choice-section-header";
  let choiceHeaderText = "<p>RESULTS ROUND - " + String(roundNo) + " </p>";
  choiceHeader.innerHTML = choiceHeaderText;

  let computerChoiceSection = document.createElement("div");
  computerChoiceSection.classList = "selected-computer-choice";

  let ChoiceHTML = document.createElement("div");
  ChoiceHTML.setAttribute("id", "choice-text");
  ChoiceHTML.textContent = "SELECTED COMPUTER CHOICE ";

  let ChoiceInHTML = document.createElement("div");
  ChoiceInHTML.setAttribute("id", "ChoiceInHTML");
  if (computerChoice == "ROCK") {
    ChoiceInHTML.innerHTML = "<img src=" + `"stone_ai.png">` + computerChoice;
  } else if (computerChoice == "PAPER") {
    ChoiceInHTML.innerHTML = "<img src=" + `"paper_ai.png">` + computerChoice;
  } else {
    ChoiceInHTML.innerHTML =
      "<img src=" + `"scissors_ai.png">` + computerChoice;
  }
  resultSection.appendChild(selected);
  resultSection.insertBefore(choiceHeader, selected);
  selected.appendChild(choiceHumanCard);
  choiceHumanCard.appendChild(humanChoiceHTML);
  choiceHumanCard.appendChild(humanChoiceInHTML);
  if (humanChoice == "ROCK") {
    humanChoiceInHTML.innerHTML = "<img src=" + `"stone_hu.png">` + humanChoice;
  } else if (humanChoice == "PAPER") {
    humanChoiceInHTML.innerHTML = "<img src=" + `"paper_hu.png">` + humanChoice;
  } else {
    humanChoiceInHTML.innerHTML =
      "<img src=" + `"scissors_hu.png">` + humanChoice;
  }
  computerChoiceSection.appendChild(ChoiceHTML);
  computerChoiceSection.appendChild(ChoiceInHTML);
  selected.appendChild(computerChoiceSection);

  gameBody.appendChild(resultSection);
  generateResults(humanChoice, computerChoice);
};

let tie = () => {
  let tieSection = document.createElement("div");
  tieSection.classList = "tie-section";
  let htmContent =
    "<div> OH! IT'S TIE" +
    "<img src=" +
    `"tie.jpg"></div>` +
    "<p>No Worries Your Opponent Also Did Not Get A Point</p>";
  tieSection.innerHTML = htmContent;

  let res = document.querySelector(".result-section");
  let toinsertbefore = document.querySelector(".selected-choice");
  let userCurrentScore = String(humanScore);
  let computerCurrentScore = String(computerScore);

  let scoresSection = document.createElement("div");
  scoresSection.classList = "scores";

  let scoreUserSection = document.createElement("div");
  scoreUserSection.classList = "humanScore";
  scoreUserSection.textContent = "USER'S CURRENT SCORE : " + userCurrentScore;

  let scoreComputerSection = document.createElement("div");
  scoreComputerSection.classList = "computerScore";
  scoreComputerSection.textContent =
    "COMPUTER'S CURRENT SCORE : " + computerCurrentScore;
  scoresSection.appendChild(scoreUserSection);
  scoresSection.appendChild(scoreComputerSection);
  res.appendChild(scoresSection);
  res.insertBefore(tieSection, toinsertbefore);
};

let win = () => {
  let tieSection = document.createElement("div");
  tieSection.classList = "win-section";
  let htmContent =
    "<div> YIPPEE! YOU WIN" +
    "<img src=" +
    `"win.jpg"></div>` +
    "<p>You Deserve That One Point</p>";
  tieSection.innerHTML = htmContent;

  let res = document.querySelector(".result-section");
  let toinsertbefore = document.querySelector(".selected-choice");
  let userCurrentScore = String(humanScore);
  let computerCurrentScore = String(computerScore);

  let scoresSection = document.createElement("div");
  scoresSection.classList = "scores";

  let scoreUserSection = document.createElement("div");
  scoreUserSection.classList = "humanScore";
  scoreUserSection.textContent = "USER'S CURRENT SCORE : " + userCurrentScore;

  let scoreComputerSection = document.createElement("div");
  scoreComputerSection.classList = "computerScore";
  scoreComputerSection.textContent =
    "COMPUTER'S CURRENT SCORE : " + computerCurrentScore;
  scoresSection.appendChild(scoreUserSection);
  scoresSection.appendChild(scoreComputerSection);
  res.appendChild(scoresSection);
  res.insertBefore(tieSection, toinsertbefore);
};

let lose = () => {
  let tieSection = document.createElement("div");
  tieSection.classList = "lose-section";

  let htmContent =
    "<div>OOPS! YOU LOSE" +
    "<img src=" +
    `"lose.jpg"></div>` +
    "<p>Don't Worry You Will Catch Up In The Coming Rounds</p>";
  tieSection.innerHTML = htmContent;

  let res = document.querySelector(".result-section");
  let toinsertbefore = document.querySelector(".selected-choice");
  let userCurrentScore = String(humanScore);
  let computerCurrentScore = String(computerScore);

  let scoresSection = document.createElement("div");
  scoresSection.classList = "scores";

  let scoreUserSection = document.createElement("div");
  scoreUserSection.classList = "humanScore";
  scoreUserSection.textContent = "USER'S CURRENT SCORE : " + userCurrentScore;

  let scoreComputerSection = document.createElement("div");
  scoreComputerSection.classList = "computerScore";
  scoreComputerSection.textContent =
    "COMPUTER'S CURRENT SCORE : " + computerCurrentScore;
  scoresSection.appendChild(scoreUserSection);
  scoresSection.appendChild(scoreComputerSection);
  res.appendChild(scoresSection);
  res.insertBefore(tieSection, toinsertbefore);
};

let winnerDecide = () => {
  if (humanScore > computerScore) {
    let popup = document.createElement("div");
    popup.classList = "popup";
    let popupText = document.createElement("div");
    popupText.classList = "popup-text-win";
    popupText.innerHTML = "<h3>GAME OVER</h3><p>YOU WIN</p>";
    let userCurrentScore = String(humanScore);
    let computerCurrentScore = String(computerScore);

    let scoresSection = document.createElement("div");
    scoresSection.classList = "scores";

    let scoreUserSection = document.createElement("div");
    scoreUserSection.classList = "humanScore-final";

    scoreUserSection.textContent = "FINAL USER'S SCORE : " + userCurrentScore;

    let scoreComputerSection = document.createElement("div");
    scoreComputerSection.classList = "computerScore-final";
    scoreComputerSection.textContent =
      "FINAL COMPUTER'S SCORE : " + computerCurrentScore;
    scoresSection.appendChild(scoreUserSection);
    scoresSection.appendChild(scoreComputerSection);
    popup.appendChild(popupText);
    popup.appendChild(scoresSection);
    popup.appendChild(replayButton);

    popup.style.display = "flex";
    document.body.appendChild(popup);
  } else {
    let popup = document.createElement("div");
    popup.classList = "popup";
    let popupText = document.createElement("div");
    popupText.classList = "popup-text-lose";
    popupText.innerHTML = "<h3>GAME OVER</h3><p>YOU LOSE</p>";
    let userCurrentScore = String(humanScore);
    let computerCurrentScore = String(computerScore);

    let scoresSection = document.createElement("div");
    scoresSection.classList = "scores-final";

    let scoreUserSection = document.createElement("div");
    scoreUserSection.classList = "humanScore-final";
    scoreUserSection.textContent = "FINAL USER'S SCORE : " + userCurrentScore;

    let scoreComputerSection = document.createElement("div");
    scoreComputerSection.classList = "computerScore-final";
    scoreComputerSection.textContent =
      "FINAL COMPUTER'S SCORE : " + computerCurrentScore;
    scoresSection.appendChild(scoreUserSection);
    scoresSection.appendChild(scoreComputerSection);
    popup.appendChild(popupText);
    popup.appendChild(scoresSection);
    popup.appendChild(replayButton);

    popup.style.display = "flex";
    document.body.appendChild(popup);
  }
};

let generateResults = (a, b) => {
  if (a === b) {
    tie();
  } else if (
    (a === "ROCK" && b === "SCISSORS") ||
    (a === "PAPER" && b === "ROCK") ||
    (a === "SCISSORS" && b === "PAPER")
  ) {
    humanScore++;
    win();
  } else {
    computerScore++;
    lose();
  }
  roundNo++;
  let resSec = document.querySelector(".result-section");
  if (humanScore != 5 && computerScore != 5) {
    resSec.appendChild(nextRoundButton);
    const nextRound = document.querySelector(".next-button");
  }
  if (humanScore == 5 || computerScore == 5) {
    winnerDecide();
  }
};

let play = () => {
  let oldbody = document.querySelector(".body-choice");

  oldbody.remove();
  createRound();
};

let nextRoundPlay = () => {
  let resultbody = document.querySelector(".result-section");

  resultbody.remove();

  createRound();
};

playbutton.addEventListener("click", play);
nextRoundButton.addEventListener("click", () => {
  nextRoundPlay();
  window.scrollTo(
    {
      top: 0,
      behavior: "smooth",
    },
    50
  );
});
