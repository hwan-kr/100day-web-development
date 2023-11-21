// game start button
const newGameButton = document.getElementById('start-game');
const gameBoardId = document.getElementById('game-board');

function createNewGameBoard() {
    gameBoardId.style.display = 'block';
}
newGameButton.addEventListener('click', createNewGameBoard);
