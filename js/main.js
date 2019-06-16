$(document).ready(() => {


    gameBoard = [
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""]
    
    ]
    let currentPlayer = 1
    let currentPlayerClass = 'playerOne'


    function createBoard() {
        $('#game-board').html('') //alter innerHTML of #game-board div
        for (let r = 0; r < gameBoard.length; r++) {
            let row =$('<div></div>'); 
            row.addClass('row') 
        for (let c = 0; c < gameBoard[r].length; c++) {
            let gameSquare = $(`<div id="r[${r}][${c}]">${gameBoard[r][c]}</div>}`)
            gameSquare.addClass('game-block')
            gameSquare.addClass('empty')
            gameSquare.click(function () {
                placePiece(c)
            })
            $('#game-board').append(gameSquare)
        }
    }   
}    



createBoard();

let placePiece = function (c) {
    let row
    let didPlacePiece = false
    for (let i = 5; i >= 0; i--) {
        if (gameBoard[i][c] === "" && didPlacePiece === false) {
            gameBoard[i][c] = currentPlayer
            gameBoard[i[c]] = 
            $(`#r[${i}][${c}]`).removeClass('empty')
            gameBoard[i[c]].addClass('playerOne')
            let currentSquare = document.getElementById(`r[${i}][${c}]`)
            // currentSquare.style.backgroundColor = 'blue'
            currentSquare.classList.add(currentPlayerClass)
            currentSquare.classList.remove('empty')
            changeTurn()
            
            
                didPlacePiece = true
                row = i
            }
        }
    }
    function changeTurn () {
        if (currentPlayer === 1) {
            currentPlayer = 2
        } else {
            currentPlayer = 1
        }
        if (currentPlayerClass === 'playerOne') {
            currentPlayerClass = "playerTwo";
        } else {
            currentPlayerClass = "playerOne";
        }
    }





})








    // function createBoard() {
    //     $('#game-board').html('')
    //     for (let i = 0; i < gameBoard.length; i++) {
    //         let row = $('<div></div>')
    //         row.addClass('row')
    //         for (let j = 0; j < gameBoard[i].length; j++) {
    //             let gameSquare = $(`<div>${gameBoard[i][j]}</div>`)
    //             gameSquare.addClass('game-square')
    //             gameSquare.click(function () {
    //                 insertPiece(j)
    //             })
    //             row.append(gameSquare)
    //         }
    //         $('#game-board').append(row)
    //     }
    // }






//     function createBoard() {
//         for (let r = 0; r < 6; r++) {
//             for (let c = 0; c < 7; c++) {
//                 $(`<div class="game-block r${r} c${c}" id="[${r}][${c}]"></div>`).appendTo($('#game-board'));
//                 let gameBlock = $(`<div class="game-block r${r} c${c}" id="[${r}][${c}]"></div>`)
//             }
            
//         }
//     }




//     $('.col0').on('click', function() {
//         console.log('you clicked on col0')
//         col0.push(1);
//         console.log(col0);
//         $('.col0').css("background-color", "yellow");

// })


// function dropPiece (col) {
    
// }



// class of game-block - 

//     })


    // function createBoard() {
    //     for (let col = 7; col > 0; col--) {
    //         for (let row = 6; row > 6; row--) {
    //             $(`<div class="game-block" id="col-${col} row-${row}"></div>`).appendTo($('#game-board'));
    //             console.log(`col-${col} row-${row} `)
    //         }
            
    //     }
    // }
    
    // createBoard();
    /*
    
    function for player taking turn
    
    each win condition is a function that evaluates to boolean
    
    each win function is called at the turn 
    
    if (win condition 1 ()|| win condition 2)
    
    */





