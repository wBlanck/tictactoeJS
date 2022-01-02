// Remove event listener on the board when there is a winner
const playerSymbol = document.querySelector(".symbol");
const board = document.querySelector(".board");
const display = document.querySelector(".display");
const restartBtn = document.querySelector(".restart");

let squares = ["", "", "", "", "", "", "", "", ""];

let p1 = true;
let p2 = false;
let html = "";

const restartGame = () => {
  squares = ["", "", "", "", "", "", "", "", ""];
  html = "";
  renderBoardElements();
  restartBtn.classList.toggle("hide");
  board.addEventListener("click", clickedTile);
  p1 = true;
  p2 = false;
  display.innerHTML = `
  <i class="far fa-clock"></i>
  <span>Player <span class="symbol">X</span> turn</span>
  `;
};

const renderBoardElements = () => {
  // render squares/tiles
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
    display.innerHTML = `
      <i class="fas fa-trophy" style="color: gold"></i>
      <span><span class="symbol">${squares[0]}</span> is the WINNER!</span>
    `;
    board.removeEventListener("click", clickedTile);
    restartBtn.classList.toggle("hide");
  }
  if (
    squares[3] !== "" &&
    squares[4] === squares[3] &&
    squares[5] === squares[3]
  ) {
    display.innerHTML = `
      <i class="fas fa-trophy" style="color: gold"></i>
      <span><span class="symbol">${squares[3]}</span> is the WINNER!</span>
    `;
    board.removeEventListener("click", clickedTile);
    restartBtn.classList.toggle("hide");
  }
  if (
    squares[6] !== "" &&
    squares[7] === squares[6] &&
    squares[8] === squares[6]
  ) {
    display.innerHTML = `
      <i class="fas fa-trophy" style="color: gold"></i>
      <span>
        <span class="symbol">${squares[6]}</span>
        is the WINNER!
      </span>
    `;
    board.removeEventListener("click", clickedTile);
    restartBtn.classList.toggle("hide");
  }
};
const checkCols = () => {
  if (
    squares[0] !== "" &&
    squares[3] === squares[0] &&
    squares[6] === squares[0]
  ) {
    display.innerHTML = `
      <i class="fas fa-trophy" style="color: gold"></i>
      <span><span class="symbol">${squares[0]}</span> is the WINNER!</span>
    `;
    board.removeEventListener("click", clickedTile);
    restartBtn.classList.toggle("hide");
  }
  if (
    squares[1] !== "" &&
    squares[4] === squares[1] &&
    squares[7] === squares[1]
  ) {
    display.innerHTML = `
      <i class="fas fa-trophy" style="color: gold"></i>
      <span><span class="symbol">${squares[1]}</span> is the WINNER!</span>
    `;
    board.removeEventListener("click", clickedTile);
    restartBtn.classList.toggle("hide");
  }
  if (
    squares[2] !== "" &&
    squares[5] === squares[2] &&
    squares[8] === squares[2]
  ) {
    display.innerHTML = `
      <i class="fas fa-trophy" style="color: gold"></i>
      <span><span class="symbol">${squares[2]}</span> is the WINNER!</span>
    `;
    board.removeEventListener("click", clickedTile);
    restartBtn.classList.toggle("hide");
  }
};
const checkDiagonals = () => {
  if (
    squares[0] !== "" &&
    squares[4] === squares[0] &&
    squares[8] === squares[0]
  ) {
    display.innerHTML = `
      <i class="fas fa-trophy" style="color: gold"></i>
      <span><span class="symbol">${squares[0]}</span> is the WINNER!</span>
    `;
    board.removeEventListener("click", clickedTile);

    restartBtn.classList.toggle("hide");
  }
  if (
    squares[2] !== "" &&
    squares[4] === squares[2] &&
    squares[6] === squares[2]
  ) {
    console.log(`WINNER: ${squares[2]}`);
    display.innerHTML = `
      <i class="fas fa-trophy" style="color: gold"></i>
      <span><span class="symbol">${squares[2]}</span> is the WINNER!</span>
    `;
    board.removeEventListener("click", clickedTile);
    restartBtn.classList.toggle("hide");
  }
};

const checkForWinner = () => {
  checkRows();
  checkCols();
  checkDiagonals();
};

const clickedTile = (e) => {
  let target = e.target;
  let parent = e.target.parentNode;
  let indexOfTarget = [...parent.children].indexOf(target);

  if (p1) {
    updateBoard(indexOfTarget, "X");
    checkForWinner();
    p1 = false;
    p2 = true;
    display.innerHTML = `
  <i class="far fa-clock"></i>
  <span>Player <span class="symbol">O</span> turn</span>
  `;
  } else {
    updateBoard(indexOfTarget, "O");
    checkForWinner();
    p2 = false;
    p1 = true;
    display.innerHTML = `
  <i class="far fa-clock"></i>
  <span>Player <span class="symbol">X</span> turn</span>
  `;
  }
};

board.addEventListener("click", clickedTile);
restartBtn.addEventListener("click", restartGame);

renderBoardElements();
