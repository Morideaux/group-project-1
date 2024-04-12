const form = document.getElementById('form');
   const otherPlayers = JSON.parse(localStorage.getItem('Player'))||[];

   form.addEventListener('submit', function(event) {
    event.preventDefault();

    let username=document.getElementById('username');
    let gameCode=document.getElementById('gameCode');

    let playerID = {
        username: username.value,
        gameCode: gameCode.value
    }

    otherPlayers.push(playerID);

    localStorage.setItem('Player', JSON.stringify(otherPlayers));

    window.location.href = "game.html";
});