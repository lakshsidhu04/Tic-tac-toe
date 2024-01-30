import { useState } from 'react'
import './App.css'

function App() {


  const [Xturn, changeTurn] = useState(true);

  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {

    if (squares[i] != null || checkWinner())
      return;
    const copy = squares.slice();
    if (Xturn == true) {
      copy[i] = "X";
      changeTurn(false)
    }
    else {
      copy[i] = "O";
      changeTurn(true)
    }
    setSquares(copy);



  }

  function checkWinner() {

    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  const winner = checkWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (Xturn ? "X" : "O");
  }

  return (
    <>
      <div className='status'>
        {status}
      </div>
      <div className="grid grid-cols-3 grid-rows-3 ">
        <Button value={squares[0]} onBtnClick={() => { handleClick(0) }} />
        <Button value={squares[1]} onBtnClick={() => { handleClick(1) }} />
        <Button value={squares[2]} onBtnClick={() => { handleClick(2) }} />
        <Button value={squares[3]} onBtnClick={() => { handleClick(3) }} />
        <Button value={squares[4]} onBtnClick={() => { handleClick(4) }} />
        <Button value={squares[5]} onBtnClick={() => { handleClick(5) }} />
        <Button value={squares[6]} onBtnClick={() => { handleClick(6) }} />
        <Button value={squares[7]} onBtnClick={() => { handleClick(7) }} />
        <Button value={squares[8]} onBtnClick={() => { handleClick(8) }} />

      </div>


    </>
  )
}


function Button({ value, onBtnClick }) {

  return (
    <button className='aspect-square' onClick={onBtnClick}>{value}</button>
  )
}



export default App
