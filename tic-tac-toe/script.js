// game start
const newGameButton = document.getElementById('start-game');
const gameBoardId = document.getElementById('game-board');

function createNewGameBoard() {
    gameBoardId.style.display = 'block';
}
newGameButton.addEventListener('click', createNewGameBoard);

// edit button
const editButton = document.querySelectorAll('.edit-button');

function openPopupWindow() {
    const grayOverlay = document.getElementById('overlay');
    const nameEditPopup = document.getElementById('name-edit-popup');
    grayOverlay.style.display = 'block';
    nameEditPopup.style.display = 'block';
}

// querySelectorAll 은 배열처럼 (배열은 아님) 요소를 출력 하기에 반복해서 입력해줘야함
for (const button of editButton) {
    button.addEventListener('click', openPopupWindow);
}
