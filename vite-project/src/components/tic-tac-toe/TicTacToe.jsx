import React, { useState } from 'react'
import './game.css'
import { useEffect } from 'react'

const Square = ({value, onClick}) => {
  return (
    <button onClick={onClick} className='square'>{value}</button>
  )
}
const TicTacToe = () => {

  const [squares, setSquares] = useState(Array(9).fill(''));
  const [isXNext, setIsXNext] = useState(true);
  const [status, setStatus] = useState();

  function handleClick(index) {
    const cpydata = [...squares];
    if (getWinner(cpydata) || cpydata[index]) return;
    cpydata[index] = isXNext ? 'X' : 'O';
    setIsXNext(!isXNext);
    setSquares(cpydata);
  }

  function getWinner() {
    const winPatterns = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];

    for(let i = 0; i < winPatterns.length; i++){
      const [x, y, z] = winPatterns[i];

      if(squares[x] && squares[x] == squares[y] && squares[x] === squares[z]){
        return squares[x]
      }
    }
    return null;
  }

  useEffect(() => {
    const winner = getWinner(squares);

    if(!winner && squares.every(item => item !== '')){
      setStatus("This is a draw! Please restart the game");
    }else if(winner){
      setStatus('Winner: Player ' + winner);
    }else{
      setStatus('Next player: ' + (isXNext ? 'X' : 'O'));
    }
  }, [squares, isXNext])

  function restartGame() {
    setSquares(Array(9).fill(''));
    setIsXNext(true);
    setStatus(null);
  }

return (
    <div className='game-container'>
      <h1 className='tic-tac-toe'>Tic Tac Toe</h1>
      <div className='row'>
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
      </div>
      <div className='row'>
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)}/>
      </div>
      <div className='row'>
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </div>
      <h1>{status}</h1>
      {getWinner(squares) && <h1>Please Restart The Game</h1>}
      <button className='restart-btn' onClick={restartGame}>Restart</button>
    </div>

)
}



export default TicTacToe
