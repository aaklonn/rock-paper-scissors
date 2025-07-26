const rock=document.querySelector("#rock");
const paper=document.querySelector("#paper");
const scissors=document.querySelector("#scissors");
const playbutton=document.querySelector(".play");

let humanChoice="";
let computerChoice="";
let humanScore=0;
let computerScore=0;
let roundNo=1;
let choices=document.querySelector(".choices")

let generatecomputerChoice = () => {
        let c = Math.random();
        computerChoice =
            c < 1 / 3
                ? "ROCK"
                : c < 2 / 3
                ? "SCISSORS"
                : "PAPER";
        //let choiceSec=document.querySelector(".selected-choice")
        //
        //let computerChoiceSection=document.createElement("div");
        //computerChoiceSection.classList="selected-computer-choice";
        //
        //let ChoiceHTML=document.createElement("div");
        //ChoiceHTML.setAttribute("id","choice-text");
        //ChoiceHTML.textContent="SELECTED COMPUTER CHOICE IS ";
//
        //let ChoiceInHTML=document.createElement("div")
        //ChoiceInHTML.setAttribute("id","ChoiceInHTML");
        //ChoiceInHTML.textContent=computerChoice;
//
//
//
        //computerChoiceSection.appendChild(ChoiceHTML)
        //computerChoiceSection.appendChild(ChoiceInHTML)
        //choiceSec.appendChild(computerChoiceSection)
//

            
        };


let createRound=()=>{
    let newbody=document.createElement("section")
    newbody.classList="body-choice";
    let roundSelection=document.createElement("div");
    let currentRound=String(roundNo);
    roundSelection.classList="selection-msg";
    let roundHeaderinfo="<h2>SELECT YOUR CHOICE - ROUND <span>"+currentRound+"</span> </h2><p>CLICK ON THE IMAGE TO CHOOSE YOUR OPTION</p>";
    roundSelection.innerHTML=roundHeaderinfo;
    let roundChoices=document.createElement("div");
    roundChoices.classList="choices";

    let userCurrentScore=String(humanScore);
    let computerCurrentScore=String(computerScore);

    let scoresSection=document.createElement("div");
    scoresSection.classList="scores";

    let scoreUserSection=document.createElement("div");
    scoreUserSection.classList="humanScore";
    scoreUserSection.textContent="USER'S CURRENT SCORE : "+userCurrentScore;

    let scoreComputerSection=document.createElement("div");
    scoreComputerSection.classList="computerScore";
    scoreComputerSection.textContent="COMPUTER'S CURRENT SCORE : "+computerCurrentScore;

    scoresSection.appendChild(scoreUserSection)
    scoresSection.appendChild(scoreComputerSection)
    newbody.appendChild(scoresSection)

    roundChoices.appendChild(choices)
    newbody.appendChild(roundSelection)
    newbody.appendChild(roundChoices);
    let gamebody=document.querySelector("#game-body");
    gamebody.append(newbody)
    

}


let generateHumanChoice=()=>{

    
let choiceSection=document.querySelector(".choice-section")
let selected=document.querySelector(".selected-choice");
let humanChoiceInHTML=document.createElement("div")
humanChoiceInHTML.setAttribute("id","humanChoice");
let humanChoiceHTML=document.createElement("div");
humanChoiceHTML.setAttribute("id","choice-text");
humanChoiceHTML.textContent="SELECTED USER CHOICE IS ";
let choiceHumanCard=document.createElement("div")
choiceHumanCard.classList="selected-choice-human";
let choiceHeader=document.createElement("div")
choiceHeader.classList="choice-section-header"
choiceHeader.innerHTML="<p>SELECTED CHOICE</p>"










rock.addEventListener("click",(()=>{
    humanChoice=rock.value;
    choiceSection.insertBefore(choiceHeader,selected)
    selected.appendChild(choiceHumanCard)
    choiceHumanCard.appendChild(humanChoiceHTML);
choiceHumanCard.appendChild(humanChoiceInHTML);
humanChoiceInHTML.textContent=humanChoice;}));

paper.addEventListener("click",(()=>{humanChoice=paper.value; 
   choiceSection.insertBefore(choiceHeader,selected)
    selected.appendChild(choiceHumanCard)
    choiceHumanCard.appendChild(humanChoiceHTML);
choiceHumanCard.appendChild(humanChoiceInHTML);
humanChoiceInHTML.textContent=humanChoice;}));


scissors.addEventListener("click",(()=>{humanChoice=scissors.value;
    choiceSection.insertBefore(choiceHeader,selected)
    selected.appendChild(choiceHumanCard)
    choiceHumanCard.appendChild(humanChoiceHTML);
choiceHumanCard.appendChild(humanChoiceInHTML);
humanChoiceInHTML.textContent=humanChoice;
}));

generatecomputerChoice()
};




let play=()=>{
    let oldbody=document.querySelector(".body-choice")
    
    oldbody.remove()
    createRound()
    generateHumanChoice()
    
};


playbutton.addEventListener("click",play)