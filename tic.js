let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let container = document.querySelector('.hide');
let msg = document.querySelector('.msg');
let newGame =  document.querySelector('#new-game');
let turnO = true; // player x or o

let winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
// console.log(winPatterns[3][1]);
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    //   console.log('clicked');
    //   box.innerHTML="ABC"
    if (turnO) {
      box.innerHTML = "O";
      turnO = false;
    } else {
      box.innerHTML = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});
// disabled buttons
function disabledButtons ()
{
  for(box of boxes )
  {
    box.disabled=true;
  }
}
// button enabled buttons
function enabledButtons ()
{
  for(box of boxes )
  {
    box.disabled=false;
    box.innerText="";
  }
}

const checkWinner = () => {
  for (patterns of winPatterns) {
    // console.log(patterns);
    // console.log(boxes[patterns[0]],boxes[patterns[1]],boxes[patterns[2]]);
    // console.log(patterns[0],patterns[1],patterns[2]);
    // console.log(
    //     boxes[patterns[0]].innerText,
    //     boxes[patterns[1]].innerText,
    //     boxes[patterns[2]].innerText);
    let pos1Val = boxes[patterns[0]].innerText;
    let pos2Val = boxes[patterns[1]].innerText;
    let pos3Val = boxes[patterns[2]].innerText;

    if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        // console.log("Winner",pos1Val);
        winner(pos1Val)
        disabledButtons();

      }
    }
  }
};

function winner(pos1val)
{
   msg.innerText = `Congratulations, winner is ${pos1val}`;
   container.classList.remove("hide");
}

const resetGame = ()=>{
  // console.log('clk');
  turnO=true;
  enabledButtons();
  container.classList.add("hide");
}

resetbtn.addEventListener('click',resetGame);
newGame.addEventListener('click',resetGame);

