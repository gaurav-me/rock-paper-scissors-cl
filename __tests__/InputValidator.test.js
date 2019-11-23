const InputValidator = require("../src/components/InputValidator");
const Utils = require("../src/utils/Utils");
const Constants = require("../src/utils/Constants");
const requestValidInput = require("../src/utils/RequestValidInput");
jest.mock("../src/utils/RequestValidInput");
jest.mock("../src/utils/Utils");

describe("Tests whether the input validation function is accepting correct values", () => {
  beforeEach(() => jest.resetModules());

  const mockAcceptableValues = ["red", "green", "blue"];
  const mockCorrectInput = "Green";
  const mockWrongInput = "Orange";
  const newValidator = new InputValidator();

  test("User input is an acceptable value", () => {
    const validInput = newValidator.isValidInput(
      mockAcceptableValues,
      mockCorrectInput
    );
    expect(typeof validInput).toBe("string");
    expect(validInput).toEqual("green");
  });

  test("User input is an invalid value", () => {
    const validInput = newValidator.isValidInput(
      mockAcceptableValues,
      mockWrongInput
    );
    expect(typeof validInput).toBe("boolean");
    expect(validInput).toBeFalsy();
  });

  test("Validated input types are returned", () => {
    const validMoveInput = "Paper";
    newValidator.isValidInput = jest.fn().mockReturnValue("paper");
    const validatedInput = newValidator.validateUserInput(
      validMoveInput,
      Constants.MOVE_TYPE
    );
    expect(typeof validatedInput).toBe("string");
    expect(validatedInput).toEqual("paper");
  });

  test("Rejected input types return false", () => {
    const invalidMoveInput = "Grass";
    newValidator.isValidInput = jest.fn().mockReturnValue(false);
    const validatedInput = newValidator.validateUserInput(
      invalidMoveInput,
      Constants.MOVE_TYPE
    );
    expect(typeof validatedInput).toBe("boolean");
    expect(validatedInput).toBeFalsy();
  });
});
