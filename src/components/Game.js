const { displayMessage } = require("../common/Utils");
const {
  moveWinningRules,
  COMPUTER,
  NO_WINNER_ERROR_MESSAGE
} = require("../common/Constants");

class Game {
  constructor() {
    this.winningPlayer = 0;
  }

  getWinner(playerMoves) {
    const { playerA: moveA, playerB: moveB } = playerMoves;
    if (moveWinningRules[moveA].includes(moveB)) {
      displayMessage(`${moveA} beats ${moveB}!`);
      this.winningPlayer = 1;
      return 1;
    } else if (moveWinningRules[moveB].includes(moveA)) {
      displayMessage(`${moveB} beats ${moveA}!`);
      this.winningPlayer = 2;
      return 2;
    } else {
      displayMessage(`Both players chose ${moveA}. It's a draw. Play again!`);
      return false;
    }
  }

  announceWinner(playerType) {
    if (this.winningPlayer === 1) {
      displayMessage(`(Player 1) ${COMPUTER} wins!`);
    } else if (this.winningPlayer === 2) {
      displayMessage(
        `(Player 2) ${playerType === COMPUTER ? COMPUTER : "you"} ${
          playerType === COMPUTER ? "wins" : "win"
        }!`
      );
    } else {
      displayMessage(NO_WINNER_ERROR_MESSAGE);
    }
  }
}

module.exports = Game;
