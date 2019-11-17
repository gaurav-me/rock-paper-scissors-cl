const { generateRandomInt } = require("../utils/Utils");
const Query = require("./Query");
const { ENTER_MOVE_MESSAGE, moves, COMPUTER } = require("../utils/Constants");

class Player {
  constructor(userType) {
    this.userType = userType;
  }

  async makeMove() {
    if (this.userType === COMPUTER) {
      const newMoveNumber = await generateRandomInt(3);
      return moves[newMoveNumber];
    } else {
      const query = new Query();
      const move = await query.makeQuery(ENTER_MOVE_MESSAGE);
      return move;
    }
  }
}

module.exports = Player;
