function openPopup() {
    overlayElement.style.display = 'block';
    popupElement.style.display = 'block';
    document.getElementById('player-name').value = '';
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
    const nameValue = document.getElementById('player-name').value;
    if (playercount === 1 && nameValue.trim()) {
        firstPlayerName.textContent = nameValue.trim();
        overlayElement.style.display = 'none';
        popupElement.style.display = 'none';
        playercount = 0;
    } else if (playercount === 2 && nameValue.trim()) {
        secondPlayerName.textContent = nameValue.trim();
        overlayElement.style.display = 'none';
        popupElement.style.display = 'none';
        playercount = 0;
    } else if (!nameValue.trim()) {
        document.getElementById('input-label').style.color = 'red';
        alert('Please add name!');
    }
}
