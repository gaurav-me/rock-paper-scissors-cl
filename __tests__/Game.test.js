const Game = require("../src/components/Game");
const Utils = require("../src/utils/Utils");
const Constants = require("../src/utils/Constants");
jest.mock("../src/utils/Utils");

describe("Tests whether the input validation function is accepting correct values", () => {
  beforeEach(() => jest.resetModules());

  const mockPlayerMoves = { playerA: "rock", playerB: "paper" };
  const mockPlayerMovesDraw = { playerA: "scissors", playerB: "scissors" };

  test("Game engine identifies winner based on different player moves", () => {
    const newGame = new Game();
    let messageDisplayed = "";
    Utils.displayMessage.mockImplementation(
      input => (messageDisplayed += input)
    );
    const winningMove = newGame.getWinner(mockPlayerMoves);
    expect(typeof winningMove).toBe("string");
    expect(winningMove).toEqual("paper");
    expect(messageDisplayed).toBe("paper beats rock!");
    expect(newGame.winningPlayer).toBe(2);
  });

  test("Game engine identifies a draw based on the same player moves", () => {
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

  test("Game announces computer as correct winner", () => {
    const newGame = new Game();
    let messageDisplayed = "";
    Utils.displayMessage.mockImplementation(
      input => (messageDisplayed += input)
    );
    newGame.winningPlayer = 1;
    newGame.announceWinner(Constants.COMPUTER);
    expect(messageDisplayed).toBe("(Player 1) computer wins!");
  });

  test("Game announces human as correct winner", () => {
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
