
let body = document.getElementsByTagName('body')[0];

let grayButton = document.getElementById('gray_switch');

let whiteButton = document.getElementById('white_switch');

let blueButton = document.getElementById('blue_switch');

let yellowButton = document.getElementById('yellow_switch');

grayButton.addEventListener('click', () => {
    body.style.background = "gray"
})

whiteButton.addEventListener('click', () => {
    body.style.background = "white"
})

blueButton.addEventListener('click', () => {
    body.style.background = "blue"
})

yellowButton.addEventListener('click', () => {
    body.style.background = "yellow"
})