const { displayMessage } = require("../utils/Utils");
const { moveRules } = require("../utils/Constants");

class Game {
  getWinner(moveA, moveB) {
    if (moveRules[moveA].includes(moveB)) {
      displayMessage(`${moveA} beats ${moveB}!`);
      return moveA;
    } else if (moveRules[moveB].includes(moveA)) {
      displayMessage(`${moveB} beats ${moveA}!`);
      return moveB;
    } else {
      displayMessage(`Both players chose ${moveA}. It's a draw. Play again!`);
      return false;
    }
  }
}

module.exports = Game;
