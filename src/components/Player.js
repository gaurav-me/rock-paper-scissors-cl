const { generateRandomInt } = require("../utils/Utils");
const {
  ENTER_MOVE_MESSAGE,
  MOVE_TYPE,
  moves,
  COMPUTER,
  HUMAN
} = require("../utils/Constants");
const requestValidInput = require("../utils/RequestValidInput");

class Player {
  constructor(userType) {
    this.userType = userType;
  }

  async makeMove() {
    if (this.userType === COMPUTER) {
      const newMoveNumber = await generateRandomInt(3);
      return moves[newMoveNumber];
    } else if (this.userType === HUMAN) {
      const move = await requestValidInput(MOVE_TYPE, ENTER_MOVE_MESSAGE);
      return move;
    }
  }
}

module.exports = Player;
