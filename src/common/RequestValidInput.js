const { INVALID_INPUT_PHRASE } = require("./Constants");
const { displayMessage } = require("./Utils");
const Query = require("../components/Query");
const InputValidator = require("../components/InputValidator");

const validator = new InputValidator();
const query = new Query();

module.exports = requestValidInput = async (inputType, queryMessage) => {
  let input = await query.makeQuery(queryMessage);
  let validatedInput = validator.validateUserInput(input, inputType);
  while (!validatedInput) {
    displayMessage(
      `Sorry, ${input} ${INVALID_INPUT_PHRASE} ${inputType}. Please enter the ${inputType} again.`
    );
    input = await query.makeQuery(queryMessage);
    validatedInput = validator.validateUserInput(input, inputType);
  }
  return validatedInput;
};
