const InputValidator = require("../src/components/InputValidator");
const Query = require("../src/components/Query");
const Utils = require("../src/common/Utils");
const Constants = require("../src/common/Constants");
const requestValidInput = require("../src/common/RequestValidInput");

jest.mock("../src/common/Utils");

describe("Tests correctness of the common function requestValidInput used in the program", () => {
  beforeEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
  });

  test("requestValidInput function accepts valid user input", async () => {
    Query.prototype.makeQuery = jest
      .fn()
      .mockImplementation(() => Constants.COMPUTER);
    InputValidator.prototype.validateUserInput = jest
      .fn()
      .mockImplementation(() => Constants.COMPUTER);

    const spy = jest.spyOn(Utils, "displayMessage");

    const validPlayerInput = await requestValidInput(
      Constants.PLAYER_TYPE,
      Constants.REQUEST_PLAYER_TYPE_MESSAGE
    );
    expect(validPlayerInput).toEqual(Constants.COMPUTER);
    expect(spy).not.toHaveBeenCalled();
  });

  test("requestValidInput function rejects invalid user input and requests user to enter input again", async () => {
    Query.prototype.makeQuery = jest.fn().mockReturnValueOnce("Wrong Input");
    InputValidator.prototype.validateUserInput = jest
      .fn()
      .mockReturnValueOnce(false)
      .mockReturnValueOnce(Constants.HUMAN);

    const spy = jest.spyOn(Utils, "displayMessage");

    let messageDisplayed = "";
    Utils.displayMessage.mockImplementation(
      input => (messageDisplayed += input)
    );
    const validPlayerInput = await requestValidInput(
      Constants.PLAYER_TYPE,
      Constants.REQUEST_PLAYER_TYPE_MESSAGE
    );
    expect(messageDisplayed).toBe(
      "Sorry, Wrong Input is not a valid player type. Please enter the player type again."
    );
    expect(spy).toHaveBeenCalledTimes(1);
    expect(validPlayerInput).toEqual(Constants.HUMAN);
  });
});
