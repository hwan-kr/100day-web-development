function openPopup() {
    overlayElement.style.display = 'block';
    popupElement.style.display = 'block';
}

function playerCount(event) {
    if (event.target.id === 'first-player-name-edit-btn') {
        playercount += 1;
        console.log(playercount);
    } else if (event.target.id === 'second-player-name-edit-btn') {
        playercount += 2;
        console.log(playercount);
    }
}

function nameEdit() {
    if (playercount == '1') {
        firstPlayerName.textContent = nameValue;
        overlayElement.style.display = 'none';
        popupElement.style.display = 'none';
        playercount = 0;
    } else if (playercount == '2') {
        secondPlayerName.textContent = nameValue;
        overlayElement.style.display = 'none';
        popupElement.style.display = 'none';
        playercount = 0;
    }
}
