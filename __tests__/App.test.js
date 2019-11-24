const App = require("../src/components/App");
const Player = require("../src/components/Player");
const Game = require("../src/components/Game");
const Utils = require("../src/common/Utils");
const Constants = require("../src/common/Constants");
const requestValidInput = require("../src/common/RequestValidInput");
jest.mock("../src/common/RequestValidInput");
jest.mock("../src/common/Utils");

describe("Tests playGame function that controls the flow of the game", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  const timesPlayerMakesMovePerRound = 2;
  const messagesDisplayedInOneRound = 9;
  const messagesDisplayedInDrawLoop = 4;

  test("Winner is announced when a player wins (integration test)", async () => {
    requestValidInput.mockReturnValue("computer");
    Player.prototype.makeMove = jest
      .fn()
      .mockReturnValueOnce("rock")
      .mockReturnValueOnce("scissors");

    const winner = await App.playGame();
    expect(winner).toEqual(1);
    expect(Utils.displayMessage).toHaveBeenCalledTimes(9);
    expect(Utils.displayMessage).toHaveBeenLastCalledWith(
      "(Player 1) computer wins!"
    );
  });

  test("Game repeats if there is a draw (integration test)", async () => {
    requestValidInput.mockReturnValue("human");
    Player.prototype.makeMove = jest
      .fn()
      .mockReturnValueOnce("rock")
      .mockReturnValueOnce("rock")
      .mockReturnValueOnce("paper")
      .mockReturnValueOnce("scissors");

    const winner = await App.playGame();
    expect(winner).toEqual(2);
    expect(Utils.displayMessage).toHaveBeenCalledTimes(
      messagesDisplayedInOneRound + messagesDisplayedInDrawLoop
    );
    expect(Utils.displayMessage).toHaveBeenLastCalledWith(
      "(Player 2) you win!"
    );
  });

  test("Current game ends after 50 rounds limit", async () => {
    Player.prototype.makeMove = jest.fn().mockImplementation(() => "rock");
    Game.prototype.getWinner = jest.fn().mockImplementation(() => false);
    requestValidInput.mockReturnValue("computer");

    const winner = await App.playGame();
    expect(winner).toBeFalsy();
    expect(Player.prototype.makeMove).toHaveBeenCalledTimes(
      timesPlayerMakesMovePerRound * Constants.MAX_NUMBER_OF_GAME_ROUNDS
    );
    expect(Game.prototype.getWinner).toHaveBeenCalledTimes(
      Constants.MAX_NUMBER_OF_GAME_ROUNDS
    );
    expect(Utils.displayMessage).toHaveBeenLastCalledWith(
      "There is no winner."
    );
  });

  test("Current game ends when a player wins", async () => {
    requestValidInput.mockReturnValue("computer");
    Player.prototype.makeMove = jest
      .fn()
      .mockReturnValueOnce("rock")
      .mockReturnValueOnce("scissors");
    Game.prototype.getWinner = jest.fn().mockReturnValue(1);

    const winner = await App.playGame();
    expect(winner).toEqual(1);
    expect(Player.prototype.makeMove).toHaveBeenCalledTimes(
      timesPlayerMakesMovePerRound * 1
    );
    expect(Game.prototype.getWinner).toHaveBeenCalledTimes(1);
  });
});
