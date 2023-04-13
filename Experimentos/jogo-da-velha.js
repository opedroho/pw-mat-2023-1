let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];

function makeMove(cell) {
    if (board[cell] === '') {
        board[cell] = currentPlayer;
        document.getElementById(cell).innerText = currentPlayer;
        checkForWinner();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkForWinner() {
    if (board[0] !== '' && board[0] === board[1] && board[1] === board[2]) {
        alert(`${board[0]} ganhou!`);
        reset();
    } else if (board[3] !== '' && board[3] === board[4] && board[4] === board[5]) {
        alert(`${board[3]} ganhou!`);
        reset();
    } else if (board[6] !== '' && board[6] === board[7] && board[7] === board[8]) {
        alert(`${board[6]} ganhou!`);
        reset();
    } else if (board[0] !== '' && board[0] === board[3] && board[3] === board[6]) {
        alert(`${board[0]} ganhou!`);
        reset();
    } else if (board[1] !== '' && board[1] === board[4] && board[4] === board[7]) {
        alert(`${board[1]} ganhou!`);
        reset();
    } else if (board[2] !== '' && board[2] === board[5] && board[5] === board[8]) {
        alert(`${board[2]} ganhou!`);
        reset();
    } else if (board[0] !== '' && board[0] === board[4] && board[4] === board[8]) {
        alert(`${board[0]} ganhou!`);
        reset();
    } else if (board[2] !== '' && board[2] === board[4] && board[4] === board[6]) {
        alert(`${board[2]} ganhou!`);
        reset();
    } else if (!board.includes('')) {
        alert('Empate!');
        reset();
    }
}

function reset() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    for (let i = 0; i < 9; i++) {
        document.getElementById(i).innerText = '';
    }
}
