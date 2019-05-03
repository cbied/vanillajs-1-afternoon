const sqOne = document.getElementById('0')
const sqTwo = document.getElementById('1')
const sqThree = document.getElementById('2')
const sqFour = document.getElementById('3')
const sqFive = document.getElementById('4')
const sqSix = document.getElementById('5')
const sqSeven = document.getElementById('6')
const sqEight = document.getElementById('7')
const sqNine = document.getElementById('8')


function play() {
    sqOne.addEventListener('click', () => sqOne.innerHTML = 'X')
    sqTwo.addEventListener('click', () => sqTwo.innerHTML = 'X')
    sqThree.addEventListener('click', () => sqThree.innerHTML = 'X')
}




// switch players turn when any box is clicked
function swichPlayers() {
    
}





// write logic for winning
// declare a winner
// add reset button when game is finished 
function checkForWinner() {
/* 
Winning combos
123
456
789

159
357

147
258
369
*/
let playerOneWin = 'Player One Wins!'
let playerTwoWin = 'Player Two Wins!'

// if statment does NOT work
if(sqOne.innerHTML == "X" && sqTwo.innerHTML == 'X' && sqThree.innerHTML == 'X')
    console.log(playerOneWin);
}