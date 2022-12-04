
let number = document.getElementById('number');

let increaseButton = document.getElementById('increase_button');

let decreaseButton = document.getElementById('decrease_button');

let resetButton = document.getElementById('reset_button');


increaseButton.addEventListener('click', () => {
    number.innerText++;
    color()
})

decreaseButton.addEventListener('click', () => {
    number.innerText--;
    color()
})

resetButton.addEventListener('click', () => {
    number.innerText = 0;
    color()
})

function color() {
    if (number.innerText > 0) {
        number.style.color = "green"
    } else if (number.innerText < 0) {
        number.style.color = "red"
    } else {
        number.style.color = "black"
    }
}