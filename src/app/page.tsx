'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [turnColor, setTurnColor] = useState(1);
  const [board, setBoard] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 2, 0, 0, 0],
    [0, 0, 0, 0, 2, 0, 0, 0],
    [0, 0, 0, 1, 2, 0, 0, 0],
    [0, 0, 0, 2, 2, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 2, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0],
  ]);
  const clickHandler = (x: number, y: number) => {
    console.log(x, y);
    const newBoard = structuredClone(board);

    if (board[y][x] !== 0) return;

    const directions = [
      [1, 0],
      [1, -1],
      [0, -1],
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, 1],
      [1, 1],
    ];

    if (board[y + 1][x] !== undefined && board[y + 1][x] === 2 / turnColor) {
      if (board[y + 2][x] !== undefined && board[y + 2][x] === 2 / turnColor) {
        if (board[y + 3][x] !== undefined && board[y + 3][x] === 2 / turnColor) {
          if (board[y + 4][x] !== undefined && board[y + 4][x] === 2 / turnColor) {
            if (board[y + 5][x] !== undefined && board[y + 5][x] === 2 / turnColor) {
              if (board[y + 6][x] !== undefined && board[y + 6][x] === 2 / turnColor) {
                if (board[y + 7][x] !== undefined && board[y + 7][x] === 2 / turnColor) {
                  newBoard[y][x] = 0;
                } else if (board[y + 7][x] === turnColor) {
                  newBoard[y + 6][x] = turnColor;
                  newBoard[y + 5][x] = turnColor;
                  newBoard[y + 4][x] = turnColor;
                  newBoard[y + 3][x] = turnColor;
                  newBoard[y + 2][x] = turnColor;
                  newBoard[y + 1][x] = turnColor;
                  newBoard[y][x] = turnColor;
                  setTurnColor(2 / turnColor);
                }
              } else if (board[y + 6][x] === turnColor) {
                newBoard[y + 5][x] = turnColor;
                newBoard[y + 4][x] = turnColor;
                newBoard[y + 3][x] = turnColor;
                newBoard[y + 2][x] = turnColor;
                newBoard[y + 1][x] = turnColor;
                newBoard[y][x] = turnColor;
                setTurnColor(2 / turnColor);
              }
            } else if (board[y + 5][x] === turnColor) {
              newBoard[y + 4][x] = turnColor;
              newBoard[y + 3][x] = turnColor;
              newBoard[y + 2][x] = turnColor;
              newBoard[y + 1][x] = turnColor;
              newBoard[y][x] = turnColor;
              setTurnColor(2 / turnColor);
            }
          } else if (board[y + 4][x] === turnColor) {
            newBoard[y + 3][x] = turnColor;
            newBoard[y + 2][x] = turnColor;
            newBoard[y + 1][x] = turnColor;
            newBoard[y][x] = turnColor;
            setTurnColor(2 / turnColor);
          }
        } else if (board[y + 3][x] === turnColor) {
          newBoard[y + 2][x] = turnColor;
          newBoard[y + 1][x] = turnColor;
          newBoard[y][x] = turnColor;
          setTurnColor(2 / turnColor);
        }
      } else if (newBoard[y + 2][x] === turnColor) {
        newBoard[y + 1][x] = turnColor;
        newBoard[y][x] = turnColor;
        setTurnColor(2 / turnColor);
      }
    }
    setBoard(newBoard);
  };
  return (
    <div className={styles.container}>
      <div className={styles.board}>
        {board.map((row, y) =>
          row.map((color, x) => (
            <div className={styles.cell} key={`${x}-${y}`} onClick={() => clickHandler(x, y)}>
              {color !== 0 && (
                <div
                  className={styles.stone}
                  style={{ background: color === 1 ? '#000' : '#fff' }}
                />
              )}
            </div>
          )),
        )}
      </div>
    </div>
  );
}
