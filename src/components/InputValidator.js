const {
  moveRules,
  playerTypes,
  USER_ACCEPT,
  USER_DENY
} = require("../utils/Constants");
const { displayMessage } = require("../utils/Utils");

class InputValidator {
  moveNameInput(moveInput) {
    if (Object.keys(moveRules).includes(moveInput.toLowerCase())) {
      return moveInput.toLowerCase();
    }
    return false;
  }

  playerTypeInput(playerType) {
    if (playerTypes.includes(playerType.toLowerCase())) {
      return playerType.toLowerCase();
    }
    return false;
  }

  repeatGameInput(confirmation) {
    if (USER_ACCEPT.includes(confirmation.toLowerCase())) {
      return "y";
    } else if (USER_DENY.includes(confirmation.toLowerCase())) {
      return "n";
    } else return false;
  }
}

module.exports = InputValidator;
