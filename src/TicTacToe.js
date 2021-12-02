import { useState } from 'react';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
import { GameBox } from "./GameBox";

export function TicTacToe() {
  const { width, height } = useWindowSize();
  const [board, setBoard] = useState(
    [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ]);
  const [isXTurn, setIsXTurn] = useState(true);


  const decideWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    //if we have a winning condition on board then we have a winner
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] !== null && board[a] === board[b] && board[b] === board[c]) {
        console.log("winner is", board[a]);
        return board[a];
      }
    }
    return null; //if no winner
  };

  const winner = decideWinner(board);

  const handleClick = (index) => {
    console.log(index);

    //create the copy of the board and then update the clicked box
    //update only untouched box
    if (winner === null && board[index] === null) {
      const boardCopy = [...board];
      boardCopy[index] = isXTurn ? "X" : "O";
      setBoard(boardCopy);
      //togggle xTern
      setIsXTurn(!isXTurn);
    }
  };
  return (

    <div className="full-game">
      {winner ? <Confetti
        width={width}
        height={height} /> : ""}
      <div className="board">
        {board.map((val, index) => (
          <GameBox val={val} onPlayerClick={() => handleClick(index)} />
        ))}
      </div>
      {winner ? <h2> Winner is: {winner}</h2> : " "}
    </div>
  );
}
