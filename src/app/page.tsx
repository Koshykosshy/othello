'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [turnColor, setTurnColor] = useState(1);
  const [board, setBoard] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 2, 0, 0, 0],
    [0, 0, 0, 2, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ]);
  const clickHandler = (x: number, y: number) => {
    console.log(x, y);
    const newBoard = structuredClone(board);

    if (board[y][x] !== 0) return;
    //下
    if (board[y + 1][x] !== undefined && board[y + 1][x] === 2 / turnColor) {
      if (board[y + 2][x] !== undefined && board[y + 2][x] === 2 / turnColor) {
        if (board[y + 3][x] !== undefined && board[y + 3][x] === 2 / turnColor) {
          if (board[y + 4][x] !== undefined && board[y + 4][x] === 2 / turnColor) {
            if (board[y + 5][x] !== undefined && board[y + 5][x] === 2 / turnColor) {
              if (board[y + 6][x] !== undefined && board[y + 6][x] === 2 / turnColor) {
                if (board[y + 7][x] !== undefined && board[y + 7][x] === 2 / turnColor) {
                  //何もしない
                } else if (board[y + 7][x] === turnColor) {
                  newBoard[y + 6][x] = turnColor;
                  newBoard[y + 5][x] = turnColor;
                  newBoard[y + 4][x] = turnColor;
                  newBoard[y + 3][x] = turnColor;
                  newBoard[y + 2][x] = turnColor;
                  newBoard[y + 1][x] = turnColor;
                  newBoard[y][x] = turnColor;
                  setTurnColor(2 / turnColor);
                } else {
                  //何もしない
                }
              } else if (board[y + 6][x] === turnColor) {
                newBoard[y + 5][x] = turnColor;
                newBoard[y + 4][x] = turnColor;
                newBoard[y + 3][x] = turnColor;
                newBoard[y + 2][x] = turnColor;
                newBoard[y + 1][x] = turnColor;
                newBoard[y][x] = turnColor;
                setTurnColor(2 / turnColor);
              } else {
                //何もしない
              }
            } else if (board[y + 5][x] === turnColor) {
              newBoard[y + 4][x] = turnColor;
              newBoard[y + 3][x] = turnColor;
              newBoard[y + 2][x] = turnColor;
              newBoard[y + 1][x] = turnColor;
              newBoard[y][x] = turnColor;
              setTurnColor(2 / turnColor);
            } else {
              //何もしない
            }
          } else if (board[y + 4][x] === turnColor) {
            newBoard[y + 3][x] = turnColor;
            newBoard[y + 2][x] = turnColor;
            newBoard[y + 1][x] = turnColor;
            newBoard[y][x] = turnColor;
            setTurnColor(2 / turnColor);
          } else {
            //何もしない
          }
        } else if (board[y + 3][x] === turnColor) {
          newBoard[y + 2][x] = turnColor;
          newBoard[y + 1][x] = turnColor;
          newBoard[y][x] = turnColor;
          setTurnColor(2 / turnColor);
        } else {
          //何もしない
        }
      } else if (newBoard[y + 2][x] === turnColor) {
        newBoard[y + 1][x] = turnColor;
        newBoard[y][x] = turnColor;
        setTurnColor(2 / turnColor);
      } else {
        //何もしない
      }
      setBoard(newBoard);
    }
    //左下
    if (board[y + 1][x - 1] !== undefined && board[y + 1][x - 1] === 2 / turnColor) {
      if (board[y + 2][x - 2] !== undefined && board[y + 2][x - 2] === 2 / turnColor) {
        if (board[y + 3][x - 3] !== undefined && board[y + 3][x - 3] === 2 / turnColor) {
          if (board[y + 4][x - 4] !== undefined && board[y + 4][x - 4] === 2 / turnColor) {
            if (board[y + 5][x - 5] !== undefined && board[y + 5][x - 5] === 2 / turnColor) {
              if (board[y + 6][x - 6] !== undefined && board[y + 6][x - 6] === 2 / turnColor) {
                if (board[y + 7][x - 7] !== undefined && board[y + 7][x - 7] === 2 / turnColor) {
                  //何もしない
                } else if (board[y + 7][x - 7] === turnColor) {
                  newBoard[y + 6][x - 6] = turnColor;
                  newBoard[y + 5][x - 5] = turnColor;
                  newBoard[y + 4][x - 4] = turnColor;
                  newBoard[y + 3][x - 3] = turnColor;
                  newBoard[y + 2][x - 2] = turnColor;
                  newBoard[y + 1][x - 1] = turnColor;
                  newBoard[y][x] = turnColor;
                  setTurnColor(2 / turnColor);
                } else {
                  //何もしない
                }
              } else if (board[y + 6][x - 6] === turnColor) {
                newBoard[y + 5][x - 5] = turnColor;
                newBoard[y + 4][x - 4] = turnColor;
                newBoard[y + 3][x - 3] = turnColor;
                newBoard[y + 2][x - 2] = turnColor;
                newBoard[y + 1][x - 1] = turnColor;
                newBoard[y][x] = turnColor;
                setTurnColor(2 / turnColor);
              } else {
                //何もしない
              }
            } else if (board[y + 5][x - 5] === turnColor) {
              newBoard[y + 4][x - 4] = turnColor;
              newBoard[y + 3][x - 3] = turnColor;
              newBoard[y + 2][x - 2] = turnColor;
              newBoard[y + 1][x - 1] = turnColor;
              newBoard[y][x] = turnColor;
              setTurnColor(2 / turnColor);
            } else {
              //何もしない
            }
          } else if (board[y + 4][x - 4] === turnColor) {
            newBoard[y + 3][x - 3] = turnColor;
            newBoard[y + 2][x - 2] = turnColor;
            newBoard[y + 1][x - 1] = turnColor;
            newBoard[y][x] = turnColor;
            setTurnColor(2 / turnColor);
          } else {
            //何もしない
          }
        } else if (board[y + 3][x - 3] === turnColor) {
          newBoard[y + 2][x - 2] = turnColor;
          newBoard[y + 1][x - 1] = turnColor;
          newBoard[y][x] = turnColor;
          setTurnColor(2 / turnColor);
        } else {
          //何もしない
        }
      } else if (newBoard[y + 2][x - 2] === turnColor) {
        newBoard[y + 1][x - 1] = turnColor;
        newBoard[y][x] = turnColor;
        setTurnColor(2 / turnColor);
      } else {
        //何もしない
      }
      setBoard(newBoard);
    }
    //左
    if (board[y][x - 1] !== undefined && board[y][x - 1] === 2 / turnColor) {
      if (board[y][x - 2] !== undefined && board[y][x - 2] === 2 / turnColor) {
        if (board[y][x - 3] !== undefined && board[y][x - 3] === 2 / turnColor) {
          if (board[y][x - 4] !== undefined && board[y][x - 4] === 2 / turnColor) {
            if (board[y][x - 5] !== undefined && board[y][x - 5] === 2 / turnColor) {
              if (board[y][x - 6] !== undefined && board[y][x - 6] === 2 / turnColor) {
                if (board[y][x - 7] !== undefined && board[y][x - 7] === 2 / turnColor) {
                  //何もしない
                } else if (board[y][x - 7] === turnColor) {
                  newBoard[y][x - 6] = turnColor;
                  newBoard[y][x - 5] = turnColor;
                  newBoard[y][x - 4] = turnColor;
                  newBoard[y][x - 3] = turnColor;
                  newBoard[y][x - 2] = turnColor;
                  newBoard[y][x - 1] = turnColor;
                  newBoard[y][x] = turnColor;
                  setTurnColor(2 / turnColor);
                } else {
                  //何もしない
                }
              } else if (board[y][x - 6] === turnColor) {
                newBoard[y][x - 5] = turnColor;
                newBoard[y][x - 4] = turnColor;
                newBoard[y][x - 3] = turnColor;
                newBoard[y][x - 2] = turnColor;
                newBoard[y][x - 1] = turnColor;
                newBoard[y][x] = turnColor;
                setTurnColor(2 / turnColor);
              } else {
                //何もしない
              }
            } else if (board[y][x - 5] === turnColor) {
              newBoard[y][x - 4] = turnColor;
              newBoard[y][x - 3] = turnColor;
              newBoard[y][x - 2] = turnColor;
              newBoard[y][x - 1] = turnColor;
              newBoard[y][x] = turnColor;
              setTurnColor(2 / turnColor);
            } else {
              //何もしない
            }
          } else if (board[y][x - 4] === turnColor) {
            newBoard[y][x - 3] = turnColor;
            newBoard[y][x - 2] = turnColor;
            newBoard[y][x - 1] = turnColor;
            newBoard[y][x] = turnColor;
            setTurnColor(2 / turnColor);
          } else {
            //何もしない
          }
        } else if (board[y][x - 3] === turnColor) {
          newBoard[y][x - 2] = turnColor;
          newBoard[y][x - 1] = turnColor;
          newBoard[y][x] = turnColor;
          setTurnColor(2 / turnColor);
        } else {
          //何もしない
        }
      } else if (newBoard[y][x - 2] === turnColor) {
        newBoard[y][x - 1] = turnColor;
        newBoard[y][x] = turnColor;
        setTurnColor(2 / turnColor);
      } else {
        //何もしない
      }
      setBoard(newBoard);
    }
    //左上
    if (board[y - 1][x - 1] !== undefined && board[y - 1][x - 1] === 2 / turnColor) {
      if (board[y - 2][x - 2] !== undefined && board[y - 2][x - 2] === 2 / turnColor) {
        if (board[y - 3][x - 3] !== undefined && board[y - 3][x - 3] === 2 / turnColor) {
          if (board[y - 4][x - 4] !== undefined && board[y - 4][x - 4] === 2 / turnColor) {
            if (board[y - 5][x - 5] !== undefined && board[y - 5][x - 5] === 2 / turnColor) {
              if (board[y - 6][x - 6] !== undefined && board[y - 6][x - 6] === 2 / turnColor) {
                if (board[y - 7][x - 7] !== undefined && board[y - 7][x - 7] === 2 / turnColor) {
                  //何もしない
                } else if (board[y - 7][x - 7] === turnColor) {
                  newBoard[y - 6][x - 6] = turnColor;
                  newBoard[y - 5][x - 5] = turnColor;
                  newBoard[y - 4][x - 4] = turnColor;
                  newBoard[y - 3][x - 3] = turnColor;
                  newBoard[y - 2][x - 2] = turnColor;
                  newBoard[y - 1][x - 1] = turnColor;
                  newBoard[y][x] = turnColor;
                  setTurnColor(2 / turnColor);
                } else {
                  //何もしない
                }
              } else if (board[y - 6][x - 6] === turnColor) {
                newBoard[y - 5][x - 5] = turnColor;
                newBoard[y - 4][x - 4] = turnColor;
                newBoard[y - 3][x - 3] = turnColor;
                newBoard[y - 2][x - 2] = turnColor;
                newBoard[y - 1][x - 1] = turnColor;
                newBoard[y][x] = turnColor;
                setTurnColor(2 / turnColor);
              } else {
                //何もしない
              }
            } else if (board[y - 5][x - 5] === turnColor) {
              newBoard[y - 4][x - 4] = turnColor;
              newBoard[y - 3][x - 3] = turnColor;
              newBoard[y - 2][x - 2] = turnColor;
              newBoard[y - 1][x - 1] = turnColor;
              newBoard[y][x] = turnColor;
              setTurnColor(2 / turnColor);
            } else {
              //何もしない
            }
          } else if (board[y - 4][x - 4] === turnColor) {
            newBoard[y - 3][x - 3] = turnColor;
            newBoard[y - 2][x - 2] = turnColor;
            newBoard[y - 1][x - 1] = turnColor;
            newBoard[y][x] = turnColor;
            setTurnColor(2 / turnColor);
          } else {
            //何もしない
          }
        } else if (board[y - 3][x - 3] === turnColor) {
          newBoard[y - 2][x - 2] = turnColor;
          newBoard[y - 1][x - 1] = turnColor;
          newBoard[y][x] = turnColor;
          setTurnColor(2 / turnColor);
        } else {
          //何もしない
        }
      } else if (newBoard[y - 2][x - 2] === turnColor) {
        newBoard[y - 1][x - 1] = turnColor;
        newBoard[y][x] = turnColor;
        setTurnColor(2 / turnColor);
      } else {
        //何もしない
      }
      setBoard(newBoard);
    }
    //上
    if (board[y - 1][x] !== undefined && board[y - 1][x] === 2 / turnColor) {
      if (board[y - 2][x] !== undefined && board[y - 2][x] === 2 / turnColor) {
        if (board[y - 3][x] !== undefined && board[y - 3][x] === 2 / turnColor) {
          if (board[y - 4][x] !== undefined && board[y - 4][x] === 2 / turnColor) {
            if (board[y - 5][x] !== undefined && board[y - 5][x] === 2 / turnColor) {
              if (board[y - 6][x] !== undefined && board[y - 6][x] === 2 / turnColor) {
                if (board[y - 7][x] !== undefined && board[y - 7][x] === 2 / turnColor) {
                  //何もしない
                } else if (board[y - 7][x] === turnColor) {
                  newBoard[y - 6][x] = turnColor;
                  newBoard[y - 5][x] = turnColor;
                  newBoard[y - 4][x] = turnColor;
                  newBoard[y - 3][x] = turnColor;
                  newBoard[y - 2][x] = turnColor;
                  newBoard[y - 1][x] = turnColor;
                  newBoard[y][x] = turnColor;
                  setTurnColor(2 / turnColor);
                } else {
                  //何もしない
                }
              } else if (board[y - 6][x] === turnColor) {
                newBoard[y - 5][x] = turnColor;
                newBoard[y - 4][x] = turnColor;
                newBoard[y - 3][x] = turnColor;
                newBoard[y - 2][x] = turnColor;
                newBoard[y - 1][x] = turnColor;
                newBoard[y][x] = turnColor;
                setTurnColor(2 / turnColor);
              } else {
                //何もしない
              }
            } else if (board[y - 5][x] === turnColor) {
              newBoard[y - 4][x] = turnColor;
              newBoard[y - 3][x] = turnColor;
              newBoard[y - 2][x] = turnColor;
              newBoard[y - 1][x] = turnColor;
              newBoard[y][x] = turnColor;
              setTurnColor(2 / turnColor);
            } else {
              //何もしない
            }
          } else if (board[y - 4][x] === turnColor) {
            newBoard[y - 3][x] = turnColor;
            newBoard[y - 2][x] = turnColor;
            newBoard[y - 1][x] = turnColor;
            newBoard[y][x] = turnColor;
            setTurnColor(2 / turnColor);
          } else {
            //何もしない
          }
        } else if (board[y - 3][x] === turnColor) {
          newBoard[y - 2][x] = turnColor;
          newBoard[y - 1][x] = turnColor;
          newBoard[y][x] = turnColor;
          setTurnColor(2 / turnColor);
        } else {
          //何もしない
        }
      } else if (newBoard[y - 2][x] === turnColor) {
        newBoard[y - 1][x] = turnColor;
        newBoard[y][x] = turnColor;
        setTurnColor(2 / turnColor);
      } else {
        //何もしない
      }
      setBoard(newBoard);
    }
    //右上
    if (board[y - 1][x + 1] !== undefined && board[y - 1][x + 1] === 2 / turnColor) {
      if (board[y - 2][x + 2] !== undefined && board[y - 2][x + 2] === 2 / turnColor) {
        if (board[y - 3][x + 3] !== undefined && board[y - 3][x + 3] === 2 / turnColor) {
          if (board[y - 4][x + 4] !== undefined && board[y - 4][x + 4] === 2 / turnColor) {
            if (board[y - 5][x + 5] !== undefined && board[y - 5][x + 5] === 2 / turnColor) {
              if (board[y - 6][x + 6] !== undefined && board[y - 6][x + 6] === 2 / turnColor) {
                if (board[y - 7][x + 7] !== undefined && board[y - 7][x + 7] === 2 / turnColor) {
                  //何もしない
                } else if (board[y - 7][x + 7] === turnColor) {
                  newBoard[y - 6][x + 6] = turnColor;
                  newBoard[y - 5][x + 5] = turnColor;
                  newBoard[y - 4][x + 4] = turnColor;
                  newBoard[y - 3][x + 3] = turnColor;
                  newBoard[y - 2][x + 2] = turnColor;
                  newBoard[y - 1][x + 1] = turnColor;
                  newBoard[y][x] = turnColor;
                  setTurnColor(2 / turnColor);
                } else {
                  //何もしない
                }
              } else if (board[y - 6][x + 6] === turnColor) {
                newBoard[y - 5][x + 5] = turnColor;
                newBoard[y - 4][x + 4] = turnColor;
                newBoard[y - 3][x + 3] = turnColor;
                newBoard[y - 2][x + 2] = turnColor;
                newBoard[y - 1][x + 1] = turnColor;
                newBoard[y][x] = turnColor;
                setTurnColor(2 / turnColor);
              } else {
                //何もしない
              }
            } else if (board[y - 5][x + 5] === turnColor) {
              newBoard[y - 4][x + 4] = turnColor;
              newBoard[y - 3][x + 3] = turnColor;
              newBoard[y - 2][x + 2] = turnColor;
              newBoard[y - 1][x + 1] = turnColor;
              newBoard[y][x] = turnColor;
              setTurnColor(2 / turnColor);
            } else {
              //何もしない
            }
          } else if (board[y - 4][x + 4] === turnColor) {
            newBoard[y - 3][x + 3] = turnColor;
            newBoard[y - 2][x + 2] = turnColor;
            newBoard[y - 1][x + 1] = turnColor;
            newBoard[y][x] = turnColor;
            setTurnColor(2 / turnColor);
          } else {
            //何もしない
          }
        } else if (board[y - 3][x + 3] === turnColor) {
          newBoard[y - 2][x + 2] = turnColor;
          newBoard[y - 1][x + 1] = turnColor;
          newBoard[y][x] = turnColor;
          setTurnColor(2 / turnColor);
        } else {
          //何もしない
        }
      } else if (newBoard[y - 2][x + 2] === turnColor) {
        newBoard[y - 1][x + 1] = turnColor;
        newBoard[y][x] = turnColor;
        setTurnColor(2 / turnColor);
      } else {
        //何もしない
      }
      setBoard(newBoard);
    }
    //右
    if (board[y][x + 1] !== undefined && board[y][x + 1] === 2 / turnColor) {
      if (board[y][x + 2] !== undefined && board[y][x + 2] === 2 / turnColor) {
        if (board[y][x + 3] !== undefined && board[y][x + 3] === 2 / turnColor) {
          if (board[y][x + 4] !== undefined && board[y][x + 4] === 2 / turnColor) {
            if (board[y][x + 5] !== undefined && board[y][x + 5] === 2 / turnColor) {
              if (board[y][x + 6] !== undefined && board[y][x + 6] === 2 / turnColor) {
                if (board[y][x + 7] !== undefined && board[y][x + 7] === 2 / turnColor) {
                  //何もしない
                } else if (board[y][x + 7] === turnColor) {
                  newBoard[y][x + 6] = turnColor;
                  newBoard[y][x + 5] = turnColor;
                  newBoard[y][x + 4] = turnColor;
                  newBoard[y][x + 3] = turnColor;
                  newBoard[y][x + 2] = turnColor;
                  newBoard[y][x + 1] = turnColor;
                  newBoard[y][x] = turnColor;
                  setTurnColor(2 / turnColor);
                } else {
                  //何もしない
                }
              } else if (board[y][x + 6] === turnColor) {
                newBoard[y][x + 5] = turnColor;
                newBoard[y][x + 4] = turnColor;
                newBoard[y][x + 3] = turnColor;
                newBoard[y][x + 2] = turnColor;
                newBoard[y][x + 1] = turnColor;
                newBoard[y][x] = turnColor;
                setTurnColor(2 / turnColor);
              } else {
                //何もしない
              }
            } else if (board[y][x + 5] === turnColor) {
              newBoard[y][x + 4] = turnColor;
              newBoard[y][x + 3] = turnColor;
              newBoard[y][x + 2] = turnColor;
              newBoard[y][x + 1] = turnColor;
              newBoard[y][x] = turnColor;
              setTurnColor(2 / turnColor);
            } else {
              //何もしない
            }
          } else if (board[y][x + 4] === turnColor) {
            newBoard[y][x + 3] = turnColor;
            newBoard[y][x + 2] = turnColor;
            newBoard[y][x + 1] = turnColor;
            newBoard[y][x] = turnColor;
            setTurnColor(2 / turnColor);
          } else {
            //何もしない
          }
        } else if (board[y][x + 3] === turnColor) {
          newBoard[y][x + 2] = turnColor;
          newBoard[y][x + 1] = turnColor;
          newBoard[y][x] = turnColor;
          setTurnColor(2 / turnColor);
        } else {
          //何もしない
        }
      } else if (newBoard[y][x + 2] === turnColor) {
        newBoard[y][x + 1] = turnColor;
        newBoard[y][x] = turnColor;
        setTurnColor(2 / turnColor);
      } else {
        //何もしない
      }
      setBoard(newBoard);
    }
    //右下
    if (board[y + 1][x + 1] !== undefined && board[y + 1][x + 1] === 2 / turnColor) {
      if (board[y + 2][x + 2] !== undefined && board[y + 2][x + 2] === 2 / turnColor) {
        if (board[y + 3][x + 3] !== undefined && board[y + 3][x + 3] === 2 / turnColor) {
          if (board[y + 4][x + 4] !== undefined && board[y + 4][x + 4] === 2 / turnColor) {
            if (board[y + 5][x + 5] !== undefined && board[y + 5][x + 5] === 2 / turnColor) {
              if (board[y + 6][x + 6] !== undefined && board[y + 6][x + 6] === 2 / turnColor) {
                if (board[y + 7][x + 7] !== undefined && board[y + 7][x + 7] === 2 / turnColor) {
                  //何もしない
                } else if (board[y + 7][x + 7] === turnColor) {
                  newBoard[y + 6][x + 6] = turnColor;
                  newBoard[y + 5][x + 5] = turnColor;
                  newBoard[y + 4][x + 4] = turnColor;
                  newBoard[y + 3][x + 3] = turnColor;
                  newBoard[y + 2][x + 2] = turnColor;
                  newBoard[y + 1][x + 1] = turnColor;
                  newBoard[y][x] = turnColor;
                  setTurnColor(2 / turnColor);
                } else {
                  //何もしない
                }
              } else if (board[y + 6][x + 6] === turnColor) {
                newBoard[y + 5][x + 5] = turnColor;
                newBoard[y + 4][x + 4] = turnColor;
                newBoard[y + 3][x + 3] = turnColor;
                newBoard[y + 2][x + 2] = turnColor;
                newBoard[y + 1][x + 1] = turnColor;
                newBoard[y][x] = turnColor;
                setTurnColor(2 / turnColor);
              } else {
                //何もしない
              }
            } else if (board[y + 5][x + 5] === turnColor) {
              newBoard[y + 4][x + 4] = turnColor;
              newBoard[y + 3][x + 3] = turnColor;
              newBoard[y + 2][x + 2] = turnColor;
              newBoard[y + 1][x + 1] = turnColor;
              newBoard[y][x] = turnColor;
              setTurnColor(2 / turnColor);
            } else {
              //何もしない
            }
          } else if (board[y + 4][x + 4] === turnColor) {
            newBoard[y + 3][x + 3] = turnColor;
            newBoard[y + 2][x + 2] = turnColor;
            newBoard[y + 1][x + 1] = turnColor;
            newBoard[y][x] = turnColor;
            setTurnColor(2 / turnColor);
          } else {
            //何もしない
          }
        } else if (board[y + 3][x + 3] === turnColor) {
          newBoard[y + 2][x + 2] = turnColor;
          newBoard[y + 1][x + 1] = turnColor;
          newBoard[y][x] = turnColor;
          setTurnColor(2 / turnColor);
        } else {
          //何もしない
        }
      } else if (newBoard[y + 2][x + 2] === turnColor) {
        newBoard[y + 1][x + 1] = turnColor;
        newBoard[y][x] = turnColor;
        setTurnColor(2 / turnColor);
      } else {
        //何もしない
      }
      setBoard(newBoard);
    }
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
