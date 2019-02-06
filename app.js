/**
 *  https://github.com/ikrydev/simple-dice-games
 * 
 **/
let scoreWin, scores, activePlayer, roundedDice;

init();

document.querySelector('.btn-roll').addEventListener('click', function () {
    let dice = Math.floor(Math.random() * 6 + 1);
    document.querySelector('#dice').src = 'dice-' + dice + '.png';
    if (dice !== 1) {
        roundedDice += dice;
        document.getElementById('current-' + activePlayer).textContent = roundedDice;
    } else {
        document.getElementById('isDiceOne').style.display = 'block';
        nextPlayer();
    }
});

document.querySelector('.btn-hold').addEventListener('click', function () {
    scores[activePlayer] += roundedDice;
    roundedDice = 0;
    document.getElementById('current-' + activePlayer).textContent = '0';
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
    if (scores[activePlayer] >= scoreWin) {
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('#name-' + activePlayer).classList.add('winner');
        document.querySelector('#name-' + activePlayer).textContent = 'WINNER';
        document.querySelector('.btn-roll').style.display = 'none';
        document.querySelector('.btn-hold').style.display = 'none';
    } else {
        nextPlayer();
    }

});

document.querySelector('.btn-new').addEventListener('click', function () {
    document.getElementById('scoreWin').value = '';
    document.getElementById('name1').value = '';
    document.getElementById('name2').value = '';
    document.querySelector('.modal').style.display = 'block';
});

document.querySelector('.btn-start').addEventListener('click', function () {
    if (document.getElementById('name1').value === '' || document.getElementById('name1').value === '' || document.getElementById('scoreWin').value === '' || document.getElementById('scoreWin').value <= 0) {
        alert('Ooopss masih ada yang kosong / score tidak boleh kosong');

    } else {
        init();
        document.querySelector('.modal').style.display = 'none';
        document.querySelector('.btn-roll').style.display = 'block';
        document.querySelector('.btn-hold').style.display = 'block';
    }
});

function nextPlayer() {
    roundedDice = 0;
    document.querySelector('#current-' + activePlayer).textContent = '0';
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');
}

document.querySelector('.close').addEventListener('click', function () {
    document.querySelector('.modal').style.display = 'none';
});

document.querySelector('#btn-okay').addEventListener('click', function () {
    document.getElementById('isDiceOne').style.display = 'none';
});

function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundedDice = 0;
    if (document.getElementById('name1').value === '' || document.getElementById('name1').value === '' || document.getElementById('scoreWin').value === '' || document.getElementById('scoreWin').value <= 0) {
        scoreWin = 100;
        document.getElementById('name-0').textContent = 'PLAYER 1';
        document.getElementById('name-1').textContent = 'PLAYER 2';
    } else {
        scoreWin = document.querySelector('#scoreWin').value;
        document.getElementById('name-0').textContent = document.getElementById('name1').value;
        document.getElementById('name-1').textContent = document.getElementById('name2').value;
    }
    document.getElementById('isDiceOne').style.display = 'none';
    document.querySelector('.modal').style.display = 'block';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').classList.remove('winner');
    document.getElementById('name-1').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
}