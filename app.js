/**
 *  https://github.com/ikrydev/simple-dice-games
 * 
 **/
let score, activePlayer, roundedDice;

init();

document.querySelector('.btn-roll').addEventListener('click', function () {
    let dice = Math.floor(Math.random() * 6 + 1);
    document.querySelector('.dice').src = 'dice-' + dice + '.png';
    if (dice !== 1) {
        roundedDice += dice;
        document.getElementById('current-' + activePlayer).textContent = roundedDice;
    } else {
        alert('OMG! You got 1 on the dice.. Sorry!');
        nextPlayer();
    }
});

document.querySelector('.btn-hold').addEventListener('click', function () {
    score[activePlayer] += roundedDice;
    roundedDice = 0;
    document.getElementById('current-' + activePlayer).textContent = '0';
    document.getElementById('score-' + activePlayer).textContent = score[activePlayer];
    if (score[activePlayer] >= 100) {
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
    init();
    document.querySelector('.btn-roll').style.display = 'block';
    document.querySelector('.btn-hold').style.display = 'block';
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 2;
    document.querySelector('#name-' + activePlayer).textContent = 'PLAYER ' + activePlayer;
});

function nextPlayer() {
    roundedDice = 0;
    document.querySelector('#current-' + activePlayer).textContent = '0';
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');
}

function init() {
    score = [0, 0];
    activePlayer = 0;
    roundedDice = 0;
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
}