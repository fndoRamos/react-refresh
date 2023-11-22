/* eslint-disable react/prop-types */
import { useState } from "react";
import confetti from "canvas-confetti";

import { Square } from "./components/Square.jsx";
import { WinnerModal } from "./components/WinnerModal.jsx";
import { TURNS } from "./constans.js";
import { checkWinnerFrom, checkEndGame } from "./logic/board.js";
import { saveGameToStorage, resetGameStorage } from "./logic/storage/index.js";

function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem("board");
    return boardFromStorage
      ? JSON.parse(boardFromStorage)
      : Array(9).fill(null);
  });
  const [turn, setTurn] = useState(() => {
    const turnFromLocalStorage = window.localStorage.getItem("turn");
    return turnFromLocalStorage ?? TURNS.X;
  });
  const [winner, setWinner] = useState(null); //null = no hay ganador, false = hay un empate

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);

    //borramos info guardad en localStorage
    resetGameStorage()
  };

  const updateBoard = (index) => {
    //no actualizamos este square si ya tiene algo
    if (board[index] || winner) return;

    //actualizamos el tlablero
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    //actualizamos turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    //guardar partida en localStorage
    saveGameToStorage({board: newBoard, turn: newTurn})

    //revisar si hay ganador
    const newWinner = checkWinnerFrom(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  };

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Resetar juego</button>
      <section className="game">
        {board.map((_, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {board[index]}
            </Square>
          );
        })}
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  );
}

export default App;
