const InputValidator = require("../src/components/InputValidator");
const Query = require("../src/components/Query");
const Utils = require("../src/common/Utils");
const Constants = require("../src/common/Constants");
const requestValidInput = require("../src/common/RequestValidInput");
// jest.mock("../src/components/InputValidator");
// jest.mock("../src/components/Query");
// jest.mock("../src/components/Query", () => {
//   return function() {
//     return {
//       makeQuery: () => {
//         return "computer";
//       }
//     };
//   };
// });
// jest.mock("../src/components/InputValidator", () => {
//   return function() {
//     return {
//       validateUserInput: () => {
//         return "computer";
//       }
//     };
//   };
// });
jest.mock("../src/common/Utils");

describe("Tests correctness of common functions used by various components of the program", () => {
  beforeEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
  });

  test("requestValidInput function accepts correct user input", async () => {
    Query.prototype.makeQuery = jest.fn().mockImplementation(() => "computer");
    InputValidator.prototype.validateUserInput = jest
      .fn()
      .mockImplementation(() => "computer");

    const spy = jest.spyOn(Utils, "displayMessage");

    const validPlayerInput = await requestValidInput(
      Constants.PLAYER_TYPE,
      Constants.REQUEST_PLAYER_TYPE_MESSAGE
    );
    expect(validPlayerInput).toEqual("computer");
    expect(spy).not.toHaveBeenCalled();
  });

  test("requestValidInput function rejects incorrect user input and requests user to enter input again", async () => {
    Query.prototype.makeQuery = jest.fn().mockReturnValueOnce("Wrong Input");
    InputValidator.prototype.validateUserInput = jest
      .fn()
      .mockReturnValueOnce(false)
      .mockReturnValueOnce("human");

    const spy = jest.spyOn(Utils, "displayMessage");

    let messageDisplayed = "";
    Utils.displayMessage.mockImplementation(
      input => (messageDisplayed += input)
    );
    const validPlayerInput = await requestValidInput(
      Constants.PLAYER_TYPE,
      Constants.REQUEST_PLAYER_TYPE_MESSAGE
    );
    expect(validPlayerInput).toEqual("human");
    expect(messageDisplayed).toBe(
      "Sorry, Wrong Input is not a valid player type. Please enter the player type again."
    );
    expect(spy).toHaveBeenCalled();
  });
});
