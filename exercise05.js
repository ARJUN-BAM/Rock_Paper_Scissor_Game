var score = JSON.parse(localStorage.getItem('score'));
if (!score) {
    score = {
        wins: 0,
        losses: 0,
        ties: 0
    }

}
const tlt = document.querySelector('.name-page');
var temp = false;
setInterval(() => {
    if (!temp) {
        tlt.innerHTML = `(2 message sent)`;
        temp = true;
    }
    else {
        tlt.innerHTML = `Rock Paper Scissor`;
    }

}, 3000);


const score_string = JSON.stringify(score);

var result = '';

var robmove = Math.random();

if ((2 / 3) <= robmove && robmove < 1) {
    robmove = 'Rock';
}
else if ((1 / 3) <= robmove && robmove < (2 / 3)) {
    robmove = 'Paper';

}
else if (0 <= robmove && robmove < (1 / 3)) {
    robmove = 'Scissor';
}

var WinStreak = JSON.parse(localStorage.getItem('win')) || 0;
var WinStreak1 = 0;
const st = document.querySelector('.streak');
st.innerHTML = `Highest Winstreaks : ${localStorage.getItem('win')}`;

function game(userinput) {
    var robmove = Math.random();

    if ((2 / 3) <= robmove && robmove < 1) {
        robmove = 'Rock';
    }
    else if ((1 / 3) <= robmove && robmove < (2 / 3)) {
        robmove = 'Paper';

    }
    else if (0 <= robmove && robmove < (1 / 3)) {
        robmove = 'Scissor';
    }


    if (userinput == 'Rock' && robmove == 'Paper' || userinput == 'Paper' && robmove == 'Scissor' || userinput == 'Scissor' && robmove == 'Rock') {
        result = 'You Lose';
        score.losses += 1;
    }
    else if (userinput == 'Rock' && robmove == 'Scissor' || userinput == 'Paper' && robmove == 'Rock' || userinput == 'Scissor' && robmove == 'Paper') {
        result = 'You Win';
        score.wins += 1;
    }
    else if (userinput == 'Rock' && robmove == 'Rock' || userinput == 'Paper' && robmove == 'Paper' || userinput == 'Scissor' && robmove == 'Scissor') {
        result = 'Its a tie';
        score.ties += 1;
    }
    localStorage.setItem('score', JSON.stringify(score));
    score_inf.innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
    res.innerHTML = `${result}`;
    ch.innerHTML = `You <img src="${userinput}-emoji.png"> - <img src="${robmove}-emoji.png"> Computer`;

    if (result == 'You Win') {
        WinStreak1 += 1;
    }
    else {
        WinStreak1 = 0;
    }
    if (WinStreak < WinStreak1) {
        WinStreak = WinStreak1;
    }
    st.innerHTML = `Highest Winstreaks : ${WinStreak}`;
    localStorage.setItem('win', String(WinStreak));

}

const res = document.querySelector('.play_result');
const ch = document.querySelector('.choose');
const score_inf = document.querySelector('.score_info');
score_inf.innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
const aut = document.querySelector('.auto-play-button');
var temp_check_auto = 0;
var play_auto;
function autoplay_game() {
    if (!temp_check_auto) {
        aut.innerHTML = `Stop Play`;
        temp_check_auto = 1;
        play_auto = setInterval(() => {
            userinput = Math.random();
            if ((2 / 3) <= userinput && userinput < 1) {
                userinput = 'Rock';
            }
            else if ((1 / 3) <= userinput && userinput < (2 / 3)) {
                userinput = 'Paper';

            }
            else if (0 <= userinput && userinput < (1 / 3)) {
                userinput = 'Scissor';
            }
            game(userinput);

        }, 1000);
    }
    else if (temp_check_auto) {
        clearInterval(play_auto);
        aut.innerHTML = `Auto Play`;
        temp_check_auto = 0;
    }
}
const alt_msg = () => {
    alert('You are playing Rock Paper Scissor game with the Computer!!!!!         Mind if you like to test your luck');
}
const eltest = document.querySelector('.eltest');
eltest.addEventListener('keydown', (event) => {
    if (event.key == 'm') {
        alt_msg();
    }
})
document.body.addEventListener('keydown', (event) => {
    if (event.key == 'r' || event.key == 'R') {
        game('Rock');
    }
})
document.body.addEventListener('keydown', (event) => {
    if (event.key == 'P' || event.key == 'p') {
        game('Paper');
    }
})
document.body.addEventListener('keydown', (event) => {
    if (event.key == 's' || event.key == 'S') {
        game('Scissor');
    }
})
document.body.addEventListener('keydown', (event) => {
    if (event.key == 'Escape') {
        alt_msg();
    }
})
document.body.addEventListener('keydown', (event) => {
    if (event.key == ' ') {
        autoplay_game();
    }
})
const ressor = document.querySelector('.reset-button');
ressor.addEventListener('click', () => {
    document.querySelector('.reset-button').innerHTML = `Loading`;
    setTimeout(() => {
        score.wins = 0;
        score.losses = 0;
        score.ties = 0;
        localStorage.removeItem('score')
        score_inf.innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`
        document.querySelector('.reset-button').innerHTML = `Reset`;
    }, 1000);
})
document.body.addEventListener('keydown', (event) => {
    if (event.key == 'Backspace') {
        document.querySelector('.reset-button').innerHTML = `Loading`;
        setTimeout(() => {
            score.wins = 0;
            score.losses = 0;
            score.ties = 0;
            localStorage.removeItem('score')
            score_inf.innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`
            document.querySelector('.reset-button').innerHTML = `Reset`;
        }, 1000);
    }
}) 