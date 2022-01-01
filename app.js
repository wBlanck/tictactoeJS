/* 
  
    

  - 2 Players, player 1 X & player 2 O
  - 
  checkRow(playerSymbol)
    loop through arr check if all 3 = playerSymbol

  checkCol(playerSymbol)
    if arr = 1 
      check arr2[1] & arr3[1]
    if arr = 2
      check arr1[1] & arr3[1]
    if arr = 3
      check arr1[1] & arr3[1]

  checkDiagonal(playerSymbol)
    if arr = 1 && [0] || 1 && [2] 
      check arr2[1] & arr3[2]
    if arr = 2 && [1] 
      check arr1[0] & arr3[2]
    if arr = 3 && [0] || 3 && [2] 
      check arr1[0] & arr2[1]

  checkGameStatus(player)
    checkRow(playerSymbol)
    checkCol(playerSymbol)
    checkRow(playerSymbol)
    loop through arr2 check if player got 3 in a row

  - render out game board
    [null , null , null] arr1
    [null , null , null] arr2
    [null , null , null] arr3
  - add on click listener on all arrays
  
  - player 1 turn

    [null ,  x   , null] arr1
    [null , null , null] arr2
    [null , null , null] arr3

  - checkGameStatus() = checks horizontal, vertical & diagonal for 3 in a row
  - if 3 in a row stop game and show winner
  - else player 2 turns

      [null ,  x   , null] arr1
      [null , null ,  O  ] arr2
      [null , null , null] arr3

    123
    456
    789

*/

const board = document.querySelector(".board");

let squares = ["", "", "", "", "", "", "", "", ""];

let p1 = true;
let p2 = false;
let html = "";

const renderBoardElements = () => {
  // render squares
  squares.forEach((square) => (html += `<div>${square ? square : ""}</div>`));
  board.innerHTML = html;
};

const updateBoard = (i, player) => {
  squares[i] = player;
  html = "";
  renderBoardElements();
};

const checkRows = (i) => {
  if (
    squares[0] !== "" &&
    squares[1] === squares[0] &&
    squares[2] === squares[0]
  ) {
    console.log(`WINNER: ${squares[0]}`);
  }
  if (
    squares[3] !== "" &&
    squares[4] === squares[3] &&
    squares[5] === squares[3]
  ) {
    console.log(`WINNER: ${squares[3]}`);
  }
  if (
    squares[6] !== "" &&
    squares[7] === squares[6] &&
    squares[8] === squares[6]
  ) {
    console.log(`WINNER: ${squares[6]}`);
  }
};
const checkCols = () => {
  if (
    squares[0] !== "" &&
    squares[3] === squares[0] &&
    squares[6] === squares[0]
  ) {
    console.log(`WINNER: ${squares[0]}`);
  }
  if (
    squares[1] !== "" &&
    squares[4] === squares[1] &&
    squares[7] === squares[1]
  ) {
    console.log(`WINNER: ${squares[1]}`);
  }
  if (
    squares[2] !== "" &&
    squares[5] === squares[2] &&
    squares[8] === squares[2]
  ) {
    console.log(`WINNER: ${squares[2]}`);
  }
};
const checkDiagonals = () => {
  if (
    squares[0] !== "" &&
    squares[4] === squares[0] &&
    squares[8] === squares[0]
  ) {
    console.log(`WINNER: ${squares[0]}`);
  }
  if (
    squares[2] !== "" &&
    squares[4] === squares[2] &&
    squares[6] === squares[2]
  ) {
    console.log(`WINNER: ${squares[2]}`);
  }
};

const checkForWinner = () => {
  checkRows();
  checkCols();
  checkDiagonals();
};

board.addEventListener("click", (e) => {
  let target = e.target;
  let parent = e.target.parentNode;
  let indexOfTarget = [...parent.children].indexOf(target);

  if (p1) {
    updateBoard(indexOfTarget, "X");
    checkForWinner(indexOfTarget, "X");
    p1 = false;
    p2 = true;
  } else {
    updateBoard(indexOfTarget, "O");
    checkForWinner(indexOfTarget, "O");
    p2 = false;
    p1 = true;
  }
});

renderBoardElements();
