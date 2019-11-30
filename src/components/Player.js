const { generateRandomInt } = require("../common/Utils");
const {
  ENTER_MOVE_MESSAGE,
  MOVE_TYPE,
  movesMapper,
  COMPUTER,
  HUMAN
} = require("../common/Constants");
const requestValidInput = require("../common/RequestValidInput");

class Player {
  constructor(userType) {
    this.userType = userType;
  }

  async makeMove() {
    if (this.userType === COMPUTER) {
      const newMoveNumber = await generateRandomInt(3);
      return movesMapper[newMoveNumber];
    } else if (this.userType === HUMAN) {
      const move = await requestValidInput(MOVE_TYPE, ENTER_MOVE_MESSAGE);
      return move;
    }
  }
}

module.exports = Player;
