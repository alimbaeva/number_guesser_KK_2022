const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const input = document.querySelector('input');
const button = document.querySelector('button');
const message = document.querySelector('.message');
let min = 1;
let max = 10;
let attempt = 3;
let attemptChange = attempt;
let attemptCount = 0;
const number = Math.floor(Math.random() * (max - min) + min);
minNum.textContent = min;
maxNum.textContent = max;

document.addEventListener('keyup', event => {
    if (event.code === 'Enter') {
        if (+(input.value) === number) {
            message.textContent = `Поздравляю вы выиграли ваше число ${input.value}`;
            input.disabled = true;
        } else {
            attemptChange--;
            attemptCount++;
            message.textContent = `Вы ошиблись. У вас осталось ${attemptChange} попыток`
            input.value = ``;
            if (attemptChange === 0) { input.disabled = true; input.setAttribute('placeholder', 'У Вас нету попыток') }

        }

        console.log(number)
        console.log(attemptCount)
    }
});

button.addEventListener('click', restart);

function restart() {
    location.reload();
}