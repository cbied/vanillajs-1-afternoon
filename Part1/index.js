


let turn = 'X', 
    board = [];


// switch players turn when any box is clicked
function play(id) {
    const playerSpan = document.getElementById('player');
    const clickedBox = document.getElementById(id);

      if(board[id]) {
        return
      }
    // shows whos turn it is 
    // when square is clicked, input X or O depending on the turn
     // if square is truthy, do not replace X or O
     if(playerSpan.innerText === 'X') {
        playerSpan.innerText = 'O';
        clickedBox.innerText = 'X';
        board[id] = 'X'
        turn = 'O';          
    } else {
        playerSpan.innerText = 'X';
        clickedBox.innerText = 'O';
        board[id] = 'O';
        turn = 'X';           
    }

// write logic for winning
// declare a winner
const sqOne = board[0],
        sqTwo = board[1],
        sqThree = board[2],
        sqFour = board[3],
        sqFive = board[4],
        sqSix = board[5],
        sqSeven = board[6],
        sqEight = board[7],
        sqNine = board[8];
      //winning combos
    // 1,2,3
    sqOne !== undefined && sqOne === sqTwo && sqOne === sqThree ? alert(`${sqOne} is the winner`) : false
    // 4,5,6
    sqFour !== undefined && sqFour === sqFive && sqFour === sqSix ? alert(`${sqFour} is the winner`) : false
    // 7,8,9
    sqSeven !== undefined && sqSeven === sqEight && sqSeven === sqNine ? alert(`${sqFour} is the winner`) : false
    // 1,4,7
    sqOne !== undefined && sqOne === sqFour && sqOne === sqSeven ? alert(`${sqOne} is the winner`) : false
    // 2,5,8
    sqTwo !== undefined && sqTwo === sqFive && sqTwo === sqEight ? alert(`${sqTwo} is the winner`) : false
    // 3,6,9
    sqThree !== undefined && sqThree === sqSix && sqThree === sqNine ? alert(`${sqThree} is the winner`) : false
    // 1,5,9
    sqOne !== undefined && sqOne === sqFive && sqOne === sqNine ? alert(`${sqOne} is the winner`) : false
    // 3,5,7
    sqThree !== undefined && sqThree === sqFive && sqThree === sqSeven ? alert(`${sqThree} is the winner`) : false




        // find if board is full
        let boardFull = true;
        for (let i = 0; i <= 8; i++) {
          if (board[i] === undefined) {
            boardFull = false;
          }
        }
        if (boardFull && !sqOne && !sqFour && !sqSeven && !sqTwo && !sqThree) {
          alert("No one wins, try again");
        }

   
   

}

play()

// add reset button when game is finished 
function resetGame() {
let resetButton = document.querySelector('input');   

    function resetPage() {
        document.location.reload(true)
    }

resetButton.addEventListener('click', resetPage())
}

resetGame()
