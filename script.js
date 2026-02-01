let boxes = document.querySelectorAll('.box')
let resetBtn = document.querySelector('#reset')
let msg = document.querySelector('.msg')
let realMsg = document.querySelector('.realMsg')
let moveCount = 0;
let isWinner = false;
let turnX = true;

const winPatrens = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];



const resetGame = () =>{
    turnX = true;
    enableBoxes();
    realMsg.style.display = 'none'
    realMsg.innerText = '';
    moveCount = 0;
    isWinner = false;
}


boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (turnX) {
            box.innerText = 'X'
            box.style.color = 'pink'
            turnX = false;
        } else {
            box.innerText = 'O';
            box.style.color = 'aqua';
            turnX = true;
        }
        
        box.disabled = true;
        moveCount++;

        checkWiner();
        if (moveCount === 9 && !isWinner) {
            gamDraw();
        }
    });
});

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = '';
    }
}

const showWinner = (winner) =>{
    realMsg.innerText = `Congratulations The Winner is ${winner}`
    realMsg.style.display = 'block'
    isWinner = true;
    disableBoxes();
}

const checkWiner = () => {
    for (let pattern of winPatrens) {

        let posVal1 = boxes[pattern[0]].innerText;
        let posVal2 = boxes[pattern[1]].innerText;
        let posVal3 = boxes[pattern[2]].innerText;
    
    if(posVal1 != '' && posVal2 != '' && posVal3 != ''){
        if(posVal1 === posVal2 && posVal2 === posVal3){
            showWinner(posVal1);
        }
    }
}
}


const gamDraw = () =>{
    realMsg.innerText = `Plese Reset The Game`;
    realMsg.style.display = 'block';
}

resetBtn.addEventListener('click', resetGame)




