$(document).ready(() => {

    createBoard();

    function createBoard() {
        for (let col = 0; col < 7; col++) {
            for (let row = 0; row < 6; row++) {
                $(`<div class="game-block" id="col-${col} row-${row}"></div>`).appendTo($('#game-board'));
                console.log(`col-${col} row-${row} `)
            }
        
        }
    }



    /*
    
    function for player taking turn
    
    each win condition is a function that evaluates to boolean
    
    each win function is called at the turn 
    
    if (win condition 1 ()|| win condition 2)
    
    */





})