//main page
const firstPlayerEditBtn = document.getElementById(
    'first-player-name-edit-btn'
);
const secondPlayerEditBtn = document.getElementById(
    'second-player-name-edit-btn'
);
let playercount = 0;
//player info
const players = [
    {
        name: '',
        symbol: 'X',
    },
    {
        name: '',
        symbol: 'O',
    },
];

const firstPlayerName = document.getElementById('first-player-name');
players[0].name = firstPlayerName.textContent;
const secondPlayerName = document.getElementById('second-player-name');
players[1].name = secondPlayerName.textContent;

//popup
const overlayElement = document.getElementById('overlay');
const popupElement = document.getElementById('popup');

firstPlayerEditBtn.addEventListener('click', openPopup);
firstPlayerEditBtn.addEventListener('click', playerCount);
secondPlayerEditBtn.addEventListener('click', openPopup);
secondPlayerEditBtn.addEventListener('click', playerCount);

const cancelBtnELement = document.getElementById('cancel-btn');
const confirmBtnElement = document.getElementById('confirm-btn');

confirmBtnElement.addEventListener('click', nameEdit);
