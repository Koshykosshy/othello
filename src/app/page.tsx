'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [turnColor, setTurnColor] = useState(1);
  const [board, setBoard] = useState<number[][]>([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 2, 0, 0, 0],
    [0, 0, 0, 2, 1, 3, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  const directions = [
    [-1, 0],
    [-1, -1],
    [0, -1],
    [1, -1],
    [1, 0],
    [1, 1],
    [0, 1],
    [-1, 1],
  ];

  //候補地
  // const newBoard = structuredClone(board);
  // for (let y = 0; y < 8; y++) {
  //   for (let x = 0; x < 8; x++) {
  //     if (board[y][x] === 0) {
  //       directions.forEach(([dx, dy]) => {
  //         if (
  //           board[y + dy] !== undefined &&
  //           board[y + dy][x + dx] !== undefined &&
  //           board[y + dy][x + dx] === 2 / turnColor
  //         ) {
  //           if (
  //             board[y + 2 * dy] !== undefined &&
  //             board[y + 2 * dy][x + 2 * dx] !== undefined &&
  //             board[y + 2 * dy][x + 2 * dx] === 2 / turnColor
  //           ) {
  //             if (
  //               board[y + 3 * dy] !== undefined &&
  //               board[y + 3 * dy][x + 3 * dx] !== undefined &&
  //               board[y + 3 * dy][x + 3 * dx] === 2 / turnColor
  //             ) {
  //               if (
  //                 board[y + 4 * dy] !== undefined &&
  //                 board[y + 4 * dy][x + 4 * dx] !== undefined &&
  //                 board[y + 4 * dy][x + 4 * dx] === 2 / turnColor
  //               ) {
  //                 if (
  //                   board[y + 5 * dy] !== undefined &&
  //                   board[y + 5 * dy][x + 5 * dx] !== undefined &&
  //                   board[y + 5 * dy][x + 5 * dx] === 2 / turnColor
  //                 ) {
  //                   if (
  //                     board[y + 6 * dy] !== undefined &&
  //                     board[y + 6 * dy][x + 6 * dx] !== undefined &&
  //                     board[y + 6 * dy][x + 6 * dx] === 2 / turnColor
  //                   ) {
  //                     if (
  //                       board[y + 7 * dy] !== undefined &&
  //                       board[y + 7 * dy][x + 7 * dx] !== undefined &&
  //                       board[y + 7 * dy][x + 7 * dx] === 2 / turnColor
  //                     ) {
  //                       //何もしない
  //                     } else if (
  //                       board[y + 7 * dy] !== undefined &&
  //                       board[y + 7 * dy][x + 7 * dx] === turnColor
  //                     ) {
  //                       newBoard[y][x] = 3;
  //                     } else {
  //                       //何もしない
  //                     }
  //                   } else if (
  //                     board[y + 6 * dy] !== undefined &&
  //                     board[y + 6 * dy][x + 6 * dx] === turnColor
  //                   ) {
  //                     newBoard[y][x] = 3;
  //                   } else {
  //                     //何もしない
  //                   }
  //                 } else if (
  //                   board[y + 5 * dy] !== undefined &&
  //                   board[y + 5 * dy][x + 5 * dx] === turnColor
  //                 ) {
  //                   newBoard[y][x] = 3;
  //                 } else {
  //                   //何もしない
  //                 }
  //               } else if (
  //                 board[y + 4 * dy] !== undefined &&
  //                 board[y + 4 * dy][x + 4 * dx] === turnColor
  //               ) {
  //                 newBoard[y][x] = 3;
  //               } else {
  //                 //何もしない
  //               }
  //             } else if (
  //               board[y + 3 * dy] !== undefined &&
  //               board[y + 3 * dy][x + 3 * dx] === turnColor
  //             ) {
  //               newBoard[y][x] = 3;
  //             } else {
  //               //何もしない
  //             }
  //           } else if (
  //             board[y + 2 * dy] !== undefined &&
  //             board[y + 2 * dy][x + 2 * dx] === turnColor
  //           ) {
  //             newBoard[y][x] = 3;
  //           } else {
  //             //何もしない
  //           }
  //         } else {
  //           //何もしない
  //         }
  //       });
  //     } else {
  //       //何もしない
  //     }
  //   }
  // }
  // setBoard(newBoard);

  const clickHandler = (x: number, y: number) => {
    console.log(x, y);
    const newBoard = structuredClone(board);

    if (board[y][x] !== 0) return;
    directions.forEach(([dx, dy]) => {
      if (
        board[y + dy] !== undefined &&
        board[y + dy][x + dx] !== undefined &&
        board[y + dy][x + dx] === 2 / turnColor
      ) {
        if (
          board[y + 2 * dy] !== undefined &&
          board[y + 2 * dy][x + 2 * dx] !== undefined &&
          board[y + 2 * dy][x + 2 * dx] === 2 / turnColor
        ) {
          if (
            board[y + 3 * dy] !== undefined &&
            board[y + 3 * dy][x + 3 * dx] !== undefined &&
            board[y + 3 * dy][x + 3 * dx] === 2 / turnColor
          ) {
            if (
              board[y + 4 * dy] !== undefined &&
              board[y + 4 * dy][x + 4 * dx] !== undefined &&
              board[y + 4 * dy][x + 4 * dx] === 2 / turnColor
            ) {
              if (
                board[y + 5 * dy] !== undefined &&
                board[y + 5 * dy][x + 5 * dx] !== undefined &&
                board[y + 5 * dy][x + 5 * dx] === 2 / turnColor
              ) {
                if (
                  board[y + 6 * dy] !== undefined &&
                  board[y + 6 * dy][x + 6 * dx] !== undefined &&
                  board[y + 6 * dy][x + 6 * dx] === 2 / turnColor
                ) {
                  if (
                    board[y + 7 * dy] !== undefined &&
                    board[y + 7 * dy][x + 7 * dx] !== undefined &&
                    board[y + 7 * dy][x + 7 * dx] === 2 / turnColor
                  ) {
                    //何もしない
                  } else if (
                    board[y + 7 * dy] !== undefined &&
                    board[y + 7 * dy][x + 7 * dx] === turnColor
                  ) {
                    newBoard[y + 6 * dy][x + 6 * dx] = turnColor;
                    newBoard[y + 5 * dy][x + 5 * dx] = turnColor;
                    newBoard[y + 4 * dy][x + 4 * dx] = turnColor;
                    newBoard[y + 3 * dy][x + 3 * dx] = turnColor;
                    newBoard[y + 2 * dy][x + 2 * dx] = turnColor;
                    newBoard[y + 1 * dy][x + 1 * dx] = turnColor;
                    newBoard[y][x] = turnColor;
                  } else {
                    //何もしない
                  }
                } else if (
                  board[y + 6 * dy] !== undefined &&
                  board[y + 6 * dy][x + 6 * dx] === turnColor
                ) {
                  newBoard[y + 5 * dy][x + 5 * dx] = turnColor;
                  newBoard[y + 4 * dy][x + 4 * dx] = turnColor;
                  newBoard[y + 3 * dy][x + 3 * dx] = turnColor;
                  newBoard[y + 2 * dy][x + 2 * dx] = turnColor;
                  newBoard[y + 1 * dy][x + 2 * dx] = turnColor;
                  newBoard[y][x] = turnColor;
                } else {
                  //何もしない
                }
              } else if (
                board[y + 5 * dy] !== undefined &&
                board[y + 5 * dy][x + 5 * dx] === turnColor
              ) {
                newBoard[y + 4 * dy][x + 4 * dx] = turnColor;
                newBoard[y + 3 * dy][x + 3 * dx] = turnColor;
                newBoard[y + 2 * dy][x + 2 * dx] = turnColor;
                newBoard[y + 1 * dy][x + 1 * dx] = turnColor;
                newBoard[y][x] = turnColor;
              } else {
                //何もしない
              }
            } else if (
              board[y + 4 * dy] !== undefined &&
              board[y + 4 * dy][x + 4 * dx] === turnColor
            ) {
              newBoard[y + 3 * dy][x + 3 * dx] = turnColor;
              newBoard[y + 2 * dy][x + 2 * dx] = turnColor;
              newBoard[y + 1 * dy][x + 1 * dx] = turnColor;
              newBoard[y][x] = turnColor;
            } else {
              //何もしない
            }
          } else if (
            board[y + 3 * dy] !== undefined &&
            board[y + 3 * dy][x + 3 * dx] === turnColor
          ) {
            newBoard[y + 2 * dy][x + 2 * dx] = turnColor;
            newBoard[y + 1 * dy][x + 1 * dx] = turnColor;
            newBoard[y][x] = turnColor;
          } else {
            //何もしない
          }
        } else if (
          board[y + 2 * dy] !== undefined &&
          newBoard[y + 2 * dy][x + 2 * dx] === turnColor
        ) {
          newBoard[y + 1 * dy][x + 1 * dx] = turnColor;
          newBoard[y][x] = turnColor;
        } else {
          //何もしない
        }
      } else {
        //何もしない
      }
      if (newBoard[y][x] === turnColor) {
        setTurnColor(2 / turnColor);
      }
    });
    setBoard(newBoard);
  };

  //点数
  const cell = board.flat();
  const b = cell.filter((cell) => cell === 1);
  const w = cell.filter((cell) => cell === 2);

  return (
    <div className={styles.container}>
      <div className={styles.scoreBoard}>
        <div className={styles.scoreText}>
          黒{b.length} : 白{w.length}
        </div>
      </div>
      <div className={styles.board}>
        {board.map((row, y) =>
          row.map((color, x) => (
            <div
              key={`${x}-${y}`}
              className={`${styles.cell}${color === 3 ? styles.valid : ''}`}
              onClick={() => clickHandler(x, y)}
            >
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
