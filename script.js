let boxes=document.querySelectorAll(".game-box")
let restartbtn=document.querySelector("#restart-btn")
let newGameBtn = document.querySelector("#new-game-btn")
let messageContainer= document.querySelector(".message-container")
let gameMessage = document.querySelector("#game-message")



let count =0;   //To know the match is draw
let turn0=true;


const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6]
]

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if (turn0){
        box.innerText = "O";
        turn0=false;
        }
        else{
        box.innerText="X";
        turn0=true;
        }
        box.disabled=true;
        count++;
        let isWinner = checkWinner();
        if (count===9 && !isWinner){
            gameDraw();
        }
    })
})

const gameDraw=()=>{
gameMessage.innerText=`Draw`;
messageContainer.classList.remove("hide");
disableBoxes();
}

const disableBoxes=()=>{
    for (let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes =()=>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner = (winner)=>{
    gameMessage.innerText=`Congratualtions, Winner is ${winner}`
    messageContainer.classList.remove("hide");
    disableBoxes();
}
const resetGame =()=>{
    turn0=true;
    count=0;
    enableBoxes();
    messageContainer.classList.add("hide");
}
const checkWinner=()=>{
for (let pat of winPatterns){
    
    let pos1=boxes[pat[0]].innerText;
    let pos2=boxes[pat[1]].innerText;
    let pos3=boxes[pat[2]].innerText;
    if(pos1!="" && pos2!="" && pos3!=""){
        if (pos1==pos2 && pos2==pos3){
            showWinner(pos1);
            return true;
        }
    }
}
return false
}
newGameBtn.addEventListener("click",resetGame);
restartbtn.addEventListener("click",resetGame);