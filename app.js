/* 
  
    

  - 2 Players, player 1 X & player 2 O
  - 
  checkRow(playerSymbol)
    loop through arr check if all 3 = playerSymbol
    
  checkCol(playerSymbol)
    if arr = 1 
      check arr2[1] & arr3[1]
    if arr = 2
      check arr1[1] & arr3[1]
    if arr = 3
      check arr1[1] & arr3[1]

  checkDiagonal(playerSymbol)
    if arr = 1 && [0] || 1 && [2] 
      check arr2[1] & arr3[2]
    if arr = 2 && [1] 
      check arr1[0] & arr3[2]
    if arr = 3 && [0] || 3 && [2] 
      check arr1[0] & arr2[1]

  checkGameStatus(player)
    checkRow(playerSymbol)
    checkCol(playerSymbol)
    checkRow(playerSymbol)
    loop through arr2 check if player got 3 in a row

  - render out game board
    [null , null , null] arr1
    [null , null , null] arr2
    [null , null , null] arr3
  - add on click listener on all arrays
  
  - player 1 turn

    [null ,  x   , null] arr1
    [null , null , null] arr2
    [null , null , null] arr3

  - checkGameStatus() = checks horizontal, vertical & diagonal for 3 in a row
  - if 3 in a row stop game and show winner
  - else player 2 turns

      [null ,  x   , null] arr1
      [null , null ,  O  ] arr2
      [null , null , null] arr3

*/
