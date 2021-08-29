class TicTacToe {
   currentPlayer="x";
   gameField=[
       [null ,null, null],
       [null ,null, null],
       [null ,null, null],
   ]

    getCurrentPlayerSymbol() {
      return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if(this.gameField[rowIndex][columnIndex]===null){
     
     this.gameField[rowIndex][columnIndex]=this.currentPlayer;
      this.currentPlayer=this.currentPlayer == "x" ? "o": "x";
     
        }
    }

    isFinished() {      
      return ((this.getWinner()!==null)||(this.noMoreTurns()===true));
    }

    getWinner() {
        if ((this.gameField[0][0]==this.gameField[0][1])&&(this.gameField[0][1]==this.gameField[0][2])){
             return this.gameField[0][0];
        }
        else if((this.gameField[1][0]==this.gameField[1][1])&&(this.gameField[1][1]==this.gameField[1][2])){
            return this.gameField[1][0];
        }
        else if((this.gameField[2][0]==this.gameField[2][1])&&(this.gameField[2][1]==this.gameField[2][2])){
            return this.gameField[2][0];
        }
        else if((this.gameField[0][0]==this.gameField[1][0])&&(this.gameField[1][0]==this.gameField[2][0])){
            return this.gameField[0][0];
        }
        else if((this.gameField[0][1]==this.gameField[1][1])&&(this.gameField[1][1]==this.gameField[2][1])){
            return this.gameField[0][1];
        }
        else if((this.gameField[0][2]==this.gameField[1][2])&&(this.gameField[1][2]==this.gameField[2][2])){
            return this.gameField[0][2];
        }
        else if((this.gameField[0][0]==this.gameField[1][1])&&(this.gameField[1][1]==this.gameField[2][2])){
            return this.gameField[0][0];
        }
        else if((this.gameField[0][2]==this.gameField[1][1])&&(this.gameField[1][1]==this.gameField[2][0])){
            return this.gameField[0][2];
        }
        
        else{
            return null;
        }
       

    }

    noMoreTurns() {       
       for(let i=0; i<this.gameField.length; i++){
           for(let k=0; k<this.gameField[i].length;k++){
               if(this.gameField[i][k]==null){
                  return false;
               }
           }
       }
       return true;
    }

    isDraw() {
        return((this.noMoreTurns())&&(this.getWinner()===null));          
    }

    getFieldValue(rowIndex, colIndex) {
        if (this.gameField[rowIndex][colIndex]){
            return this.gameField[rowIndex][colIndex];
        }
        else{
            return null;
        }

    }
}


module.exports = TicTacToe;
