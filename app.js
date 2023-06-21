'use strict';
// Player 1
let image1 = document.querySelectorAll('img')[0]
let randomNumber1 = Math.ceil(Math.random()*6)
let Image1Src = 'assets/dice' + randomNumber1 + '.jpg';
image1.setAttribute('src',Image1Src)


// Player 2
let image2 = document.querySelectorAll('img')[1]
let randomNumber2 = Math.ceil(Math.random()*6)
let randomImage2Src = 'assets/dice' + randomNumber2 + '.jpg'
image2.setAttribute('src',randomImage2Src)


// Winner
let board = document.querySelector('h1')
if (randomNumber1 > randomNumber2){
    board.innerText = 'Player-1 WINS'
} else if (randomNumber2 > randomNumber1){
    board.innerText = 'Player-2 WINS'
} else {board.innerText = "It's a TIE"}


// Refresh button
let refreshbtn = document.querySelector('.refresh-button')
let refresh = () => {
    location.reload()
}
refreshbtn.addEventListener('click',refresh)


