const InputValidator = require("../src/components/InputValidator");
const Utils = require("../src/common/Utils");
const Constants = require("../src/common/Constants");
const requestValidInput = require("../src/common/RequestValidInput");
jest.mock("../src/common/RequestValidInput");
jest.mock("../src/common/Utils");

describe("Tests whether the input validation function accepts correct values", () => {
  beforeEach(() => jest.resetModules());

  const mockAcceptableValues = ["red", "green", "blue"];
  const mockCorrectInput = "Green";
  const mockWrongInput = "Orange";
  const validator = new InputValidator();

  test("isValidInput method returns acceptable user input in lowercase", () => {
    const validInput = validator.isValidInput(
      mockAcceptableValues,
      mockCorrectInput
    );
    expect(typeof validInput).toBe("string");
    expect(validInput).toEqual("green");
  });

  test("isValidInput method returns false for incorrect user input", () => {
    const validInput = validator.isValidInput(
      mockAcceptableValues,
      mockWrongInput
    );
    expect(typeof validInput).toBe("boolean");
    expect(validInput).toBeFalsy();
  });

  test("validateUserInput returns valid user move-type input", () => {
    const validMoveInput = "Paper";
    validator.isValidInput = jest.fn().mockReturnValue("paper");
    const validatedInput = validator.validateUserInput(
      validMoveInput,
      Constants.MOVE_TYPE
    );
    expect(typeof validatedInput).toBe("string");
    expect(validatedInput).toEqual("paper");
  });
  test("validateUserInput returns valid user player-type input", () => {
    const validPlayerInput = "computer";
    validator.isValidInput = jest.fn().mockReturnValue("computer");
    const validatedInput = validator.validateUserInput(
      validPlayerInput,
      Constants.PLAYER_TYPE
    );
    expect(typeof validatedInput).toBe("string");
    expect(validatedInput).toEqual("computer");
  });

  test("validateUserInput returns valid user confirmation (yes/no) response", () => {
    const validConfirmationInputPositive = "Yes";
    validator.isValidInput = jest.fn().mockReturnValue("yes");
    const validatedInputPositive = validator.validateUserInput(
      validConfirmationInputPositive,
      Constants.USER_CONFIRMATION_RESPONSE_TYPE
    );
    expect(typeof validatedInputPositive).toBe("string");
    expect(validatedInputPositive).toEqual("y");
  });

  test("validateUserInput returns false for invalid user move-type input", () => {
    const invalidMoveInput = "Paperr";
    validator.isValidInput = jest.fn().mockReturnValue(false);
    const rejectedInput = validator.validateUserInput(
      invalidMoveInput,
      Constants.MOVE_TYPE
    );
    expect(typeof rejectedInput).toBe("boolean");
    expect(rejectedInput).toBeFalsy();
  });
  test("validateUserInput returns false for invalid user player-type input", () => {
    const invalidPlayerInput = "Alien";
    validator.isValidInput = jest.fn().mockReturnValue(false);
    const rejectedInput = validator.validateUserInput(
      invalidPlayerInput,
      Constants.PLAYER_TYPE
    );
    expect(typeof rejectedInput).toBe("boolean");
    expect(rejectedInput).toBeFalsy();
  });

  test("validateUserInput returns false for invalid user confirmation (yes/no) response", () => {
    const invalidConfirmationInput = "Naa";
    validator.isValidInput = jest.fn().mockReturnValue(false);
    const rejectedInput = validator.validateUserInput(
      invalidConfirmationInput,
      Constants.USER_CONFIRMATION_RESPONSE_TYPE
    );
    expect(typeof rejectedInput).toBe("boolean");
    expect(rejectedInput).toBeFalsy();
  });
});
