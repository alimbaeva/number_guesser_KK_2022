const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const input = document.querySelector('input');
const button = document.querySelector('button');
const message = document.querySelector('.message');
const guessBtn = document.querySelector('#guess-btn');
let min = 1;
let max = 10;
let attempt = 3;
let attemptChange = attempt;
let attemptCount = 0;
const number = Math.floor(Math.random() * (max - min) + min);
minNum.textContent = min;
maxNum.textContent = max;
input.focus();
console.log('winning numbe : ', number)

button.addEventListener('click', game);
function game() {
    if (button.value === 'Играть') {
        if (+(input.value) === number) {
            message.textContent = `Поздравляю вы выиграли ваше число ${input.value}`;
            input.disabled = true;
            button.setAttribute('value', 'Новая игра');
            button.textContent = 'Новая игра';
        } else {
            attemptChange--;
            attemptCount++;
            message.textContent = `Вы ошиблись. У вас осталось ${attemptChange} попыток`
            input.value = ``;
            input.focus();
            if (attemptChange === 0) {
                input.disabled = true;
                input.setAttribute('placeholder', 'У Вас нету попыток')
                button.setAttribute('value', 'Новая игра');
                button.textContent = 'Новая игра';
            }

        }
    } else {
        restart();
    }
}

function restart() {
    location.reload();
}