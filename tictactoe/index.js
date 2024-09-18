let boxes = document.querySelectorAll(".box")
let resetBtn = document.querySelector("#reset-btn")
let msgContainer = document.querySelector('.message')
let turnO = true
let turnX = false

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6]

]
boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        console.log('box was clicked')
        if(turnO === true){
            box.innerHTML = 'O'
            box.classList.add('color')
            turnO = false
            // turnX = true

        }
        else{
            box.innerHTML = "X"
            // turnX = false
            turnO = true
            box.classList.remove('color')
        }
        box.disabled = true
        checkWinner();
        
    });
});

const disableBoxes = () =>{
    for (let box of boxes) {
        box.disabled = true;
    }

}
const enableBoxes = () =>{
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = ""
    }
}

const checkWinner =()=>{
    for (pattern of winPatterns){
        
        let pos1Val = boxes[pattern[0]].innerText
        let pos2Val = boxes[pattern[1]].innerText
        let pos3Val = boxes[pattern[2]].innerText
        if (pos1Val !="" && pos2Val != "" && pos3Val !=""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log('winner',pos1Val)
                disableBoxes()
            
                msgContainer.innerText = `The Winner is ${pos1Val}`
                
            }
        }
    }
};

const resetGame = ()=>{
    turnO = true;
    enableBoxes();
    msgContainer.innerText = ""

}

resetBtn.addEventListener('click',() =>{
    resetGame()
})

