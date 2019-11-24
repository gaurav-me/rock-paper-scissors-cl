const Game = require("../src/components/Game");
const Utils = require("../src/common/Utils");
const Constants = require("../src/common/Constants");
jest.mock("../src/common/Utils");

describe("Tests whether the Game class correctly identifies different game scenarios", () => {
  beforeEach(() => jest.resetModules());

  const mockPlayerMoves = { playerA: Constants.ROCK, playerB: Constants.PAPER };
  const mockPlayerMovesDraw = {
    playerA: Constants.SCISSORS,
    playerB: Constants.SCISSORS
  };

  test("Game class identifies winner based on unique player moves", () => {
    const newGame = new Game();
    let messageDisplayed = "";
    Utils.displayMessage.mockImplementation(
      input => (messageDisplayed += input)
    );
    const winningMove = newGame.getWinner(mockPlayerMoves);
    expect(typeof winningMove).toBe("number");
    expect(winningMove).toEqual(2);
    expect(messageDisplayed).toBe("paper beats rock!");
    expect(newGame.winningPlayer).toBe(2);
  });

  test("Game class identifies a draw based on the same player moves", () => {
    const newGame = new Game();
    let messageDisplayed = "";
    Utils.displayMessage.mockImplementation(
      input => (messageDisplayed += input)
    );
    const drawingMove = newGame.getWinner(mockPlayerMovesDraw);
    expect(typeof drawingMove).toBe("boolean");
    expect(drawingMove).toBeFalsy();
    expect(messageDisplayed).toBe(
      "Both players chose scissors. It's a draw. Play again!"
    );
    expect(newGame.winningPlayer).toBe(0);
  });

  test("Game class announces (Player 1) computer as correct winner", () => {
    const newGame = new Game();
    let messageDisplayed = "";
    Utils.displayMessage.mockImplementation(
      input => (messageDisplayed += input)
    );
    newGame.winningPlayer = 1;
    newGame.announceWinner(Constants.COMPUTER);
    expect(messageDisplayed).toBe("(Player 1) computer wins!");
  });

  test("Game class announces human as correct winner", () => {
    const newGame = new Game();
    let messageDisplayed = "";
    Utils.displayMessage.mockImplementation(
      input => (messageDisplayed += input)
    );
    newGame.winningPlayer = 2;
    newGame.announceWinner(Constants.HUMAN);
    expect(messageDisplayed).toBe("(Player 2) you win!");
  });
});
