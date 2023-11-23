// game start
const newGameButton = document.getElementById('start-game');
const gameBoardId = document.getElementById('game-board');

function createNewGameBoard() {
    gameBoardId.style.display = 'block';
}
newGameButton.addEventListener('click', createNewGameBoard);

// edit button
const firstEditButton = document.getElementById('first-edit-button');
const secondEditButton = document.getElementById('second-edit-button');

function openPopupWindow() {
    const grayOverlay = document.getElementById('overlay');
    const nameEditPopup = document.getElementById('name-edit-popup');
    grayOverlay.style.display = 'block';
    nameEditPopup.style.display = 'block';
}

// querySelectorAll 은 배열처럼 (배열은 아님) 요소를 출력 하기에 반복해서 입력해줘야함
firstEditButton.addEventListener('click', openPopupWindow);
secondEditButton.addEventListener('click', openPopupWindow);

// Cancel and Confirm button
const cancelButton = document.getElementById('cancel-button');
const confirmButton = document.getElementById('confirm-button');
const popupWindow = document.getElementById('name-edit-popup');
const popupBackground = document.getElementById('overlay');

// Cancel Button
function closePopupWindow() {
    popupWindow.style.display = 'none';
    popupBackground.style.display = 'none';
}

// Confirm button
const nameEditInput = 
cancelButton.addEventListener('click', closePopupWindow);
