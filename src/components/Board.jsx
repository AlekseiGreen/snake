import React, {useState} from "react";
import Square from './Square';
import "./Board.css"
import ImgBG from "../assets/rm-mind.jpg";


const Board = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);

    const handleClick = (index) => {
        if (squares[index] || calculateWinner(squares)) return;
        const newSquares = squares.slice();
        newSquares[index] = isXNext ? 'X' : 'O';
        setSquares(newSquares);
        setIsXNext(!isXNext);
    };

    const handleRestart = () => {
        setSquares(Array(9).fill(null));
        setIsXNext(true);
    };

    const calculateWinner = (squares) => {
        const lines = [
          [0, 1, 2], [3, 4, 5], [6, 7, 8],
          [0, 3, 6], [1, 4, 7], [2, 5, 8],
          [0, 4, 8], [2, 4, 6]
        ];
        for (let [a, b, c] of lines) {
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return null;
      };

    const winner = calculateWinner(squares);

    return(
        <div>
            <h2>{winner ? `Победитель: ${winner}` : `Следующий ход: ${isXNext ? 'X' : 'O'}`}</h2>
            <div className="board-main">
                {/* <div className="board-row"> */}
                    <Square value={squares[0]} onClick={()=> handleClick(0)}></Square>
                    <Square value={squares[1]} onClick={()=> handleClick(1)}></Square>
                    <Square value={squares[2]} onClick={()=> handleClick(2)}></Square>
                {/* </div>
                <div  className="board-row"> */}
                    <Square value={squares[3]} onClick={()=> handleClick(3)}></Square>
                    <Square value={squares[4]} onClick={()=> handleClick(4)}></Square>
                    <Square value={squares[5]} onClick={()=> handleClick(5)}></Square>
                {/* </div>
                <div  className="board-row"> */}
                    <Square value={squares[6]} onClick={()=> handleClick(6)}></Square>
                    <Square value={squares[7]} onClick={()=> handleClick(7)}></Square>
                    <Square value={squares[8]} onClick={()=> handleClick(8)}></Square>
                {/* </div> */}
            </div>
            <button onClick={handleRestart}>Перезапустить игру</button>
            <img src={ImgBG} alt="ImgBG" />


        </div>
    );

};

export default Board;