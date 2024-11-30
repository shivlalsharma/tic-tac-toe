// boxes for playing the tic-tac-toe game
let boxes = document.querySelectorAll(".box");

// message box which contains new game button and game winner or game draw message
let msg = document.querySelector(".display-message");

// message box which displays game status means the game is draw or has winner
let winner = document.querySelector("#show-winner");

// button to start the new game
let newGame = document.querySelector("#newGame-btn");

// button to reset the existing game
let resetGame = document.querySelector("#resetGame-btn");

// the cut line which drawn after the winner has declared
let line = document.querySelector(".line");

// it shows the player X's winning score
let playerXWon = document.getElementById('player-x-won');

// it display the player O's winning score
let playerOWon = document.getElementById('player-o-won');

// the button by clicking you can clear the history of winning players
let clearHistory = document.getElementById('clear-history');

// player turn
let turnO = true;

// checking is game active or winner has declared or game has drawn
let isGameActive = true;

// player X's and O's winning scores
let playerX = JSON.parse(localStorage.getItem('playerXScore')) ?? 0;
let playerO = JSON.parse(localStorage.getItem('playerOScore')) ?? 0;

// creating a winning pattern to decide the current game status whether game has drawn or declared winner
const winPattern = [
    [0,1,2,0,76,0,300],
    [0,3,6,-100,179,90,300],
    [0,4,8,-48,181,45,400],
    [1,4,7,1,179,90,300],
    [2,5,8,100,179,90,300],
    [2,4,6,-55,184,135,400],
    [3,4,5,0,178,0,300],
    [6,7,8,0,278,0,300]
];

// it displays winner whether player X or player O
const showWinner = (posVal1)=>{
    if(posVal1 === 'X'){
        playerX += 1; 
        playerXWon.innerText = playerX;
        localStorage.setItem('playerXScore',JSON.stringify(playerX));
    }
    else{
        playerO += 1;
        playerOWon.innerText = playerO;
        localStorage.setItem('playerOScore',JSON.stringify(playerO));
    }
    winner.innerText = `Congratulations, ${posVal1} Won!`;
    msg.classList.remove("hide");
}

// it check whether the game is draw or not
const checkDraw = ()=>{
    if(Array.from(boxes).every(box=>box.textContent !== '')){
        isGameActive = false;
        winner.innerText = `Game Draw!!!`;
        msg.classList.remove("hide");
    }
}

// it checks the winning pattern and declares the game status
const checkWinner = ()=>{
    for(let pattern of winPattern){
        let posVal1 = boxes[pattern[0]].innerText;
        let posVal2 = boxes[pattern[1]].innerText;
        let posVal3 = boxes[pattern[2]].innerText;
        let posVal4 = pattern[3];
        let posVal5 = pattern[4];
        let posVal6 = pattern[5];
        let posVal7 = pattern[6]

        if(posVal1 !== "" && posVal1 === posVal2 && posVal2 === posVal3){
            isGameActive = false;
            showWinner(posVal1);
            line.style.width = `${posVal7}px`;
            line.style.transform = `translate(${posVal4}px,${posVal5}px) rotate(${posVal6}deg)`;
            return;
        }
    }  
    checkDraw();
}

// boxes on which player will click and display the symbol X and O
boxes.forEach((box)=>{
    box.addEventListener("click",(e)=>{
        if(!isGameActive) return;
        if(e.target.textContent) return;
        if(turnO){
            box.innerText = "O";
            box.style.color = "#00f";
            turnO = false;
        }else{
            box.innerText = "X";
            box.style.color = "#008000";
            turnO = true;
        }
        checkWinner();
    });
});

// button to start the new game
const new_Game = ()=>{
    for(let box of boxes){
        isGameActive = true;
        box.innerText = "";
        msg.classList.add("hide");
        line.style.width = "0";
    }
}

// button to reset the existing game
const reset_Game = ()=>{
    for(let box of boxes){
        isGameActive = true;
        box.innerText = "";
        msg.classList.add("hide");
        line.style.width = "0";
    }
}

const clearPlayersHistory = ()=>{
    localStorage.removeItem('playerXScore');
    localStorage.removeItem('playerOScore');
    playerXWon.innerText = JSON.parse(localStorage.getItem('playerXScore')) ?? 0;
    playerOWon.innerText = JSON.parse(localStorage.getItem('playerOScore')) ?? 0;
    location.replace('index.html');
}

// event at buttons new game and reset game
newGame.addEventListener("click", new_Game);
resetGame.addEventListener("click", reset_Game);
clearHistory.addEventListener("click", clearPlayersHistory);

playerXWon.innerText = JSON.parse(localStorage.getItem('playerXScore')) ?? 0;
playerOWon.innerText = JSON.parse(localStorage.getItem('playerOScore')) ?? 0;