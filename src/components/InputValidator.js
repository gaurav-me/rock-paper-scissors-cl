const {
  moveWinningRules,
  playerTypes,
  USER_ACCEPT,
  USER_DENY,
  PLAYER_TYPE,
  MOVE_TYPE,
  USER_INPUT_END_GAME,
  USER_INPUT_PLAY_AGAIN,
  USER_CONFIRMATION_RESPONSE_TYPE
} = require("../common/Constants");

class InputValidator {
  isValidInput(validInputs, newInput) {
    const lowerCaseInput = newInput.toLowerCase();
    if (validInputs.includes(lowerCaseInput)) return lowerCaseInput;
    return false;
  }

  validateUserInput(input, inputType) {
    switch (inputType) {
      case MOVE_TYPE:
        return this.isValidInput(Object.keys(moveWinningRules), input);
      case PLAYER_TYPE:
        return this.isValidInput(playerTypes, input);
      case USER_CONFIRMATION_RESPONSE_TYPE:
        const positiveCase = this.isValidInput(USER_ACCEPT, input);
        if (positiveCase) return USER_INPUT_PLAY_AGAIN;
        const negativeCase = this.isValidInput(USER_DENY, input);
        if (negativeCase) return USER_INPUT_END_GAME;
        return false;
      default:
        return false;
    }
  }
}

module.exports = InputValidator;
