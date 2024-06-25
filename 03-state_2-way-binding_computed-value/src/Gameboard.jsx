import { useState } from "react";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./GameOver";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]

];

export default function GameBoard({ onSelectSquare, currentPlayerSymbol, updateTurns }) {

    const [gameboard, setGameboard] = useState(initialGameBoard);
    const [winner, setWinner] = useState();

    function handleSelectSquare(rowIndex, colIndex) {
        setGameboard((prevGameboard) => {
            // copy array in new, state should be updated in immutable way
            const updatedBoard = [...prevGameboard.map((innerArray) => [...innerArray])];
            updatedBoard[rowIndex][colIndex] = currentPlayerSymbol;
            return updatedBoard;
        });
        onSelectSquare();
        updateTurns({row: rowIndex, col: colIndex, player: currentPlayerSymbol});
        checkWinner();
    }

    function checkWinner(){
        for(const combination of WINNING_COMBINATIONS){
            const first = gameboard[combination[0].row][combination[0].column];
            const second = gameboard[combination[1].row][combination[1].column];
            const third = gameboard[combination[2].row][combination[2].column];
            if(first && first== second && first ==third)
                return setWinner(first);
        }
    }

    return <ol id="game-board">
        {initialGameBoard.map((row, rowIndex) => <li key={rowIndex} >
            <ol>
                {row.map((playerSymbol, colIndex) => <li key={colIndex}> 
                    <button disabled={gameboard[rowIndex][colIndex]} onClick={() => handleSelectSquare(rowIndex, colIndex)} > {gameboard[rowIndex][colIndex]}</button> 
                    </li>)}
            </ol>

        </li>)};
        {winner && <GameOver />}
    </ol>
}