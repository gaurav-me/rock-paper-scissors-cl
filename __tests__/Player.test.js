const Player = require("../src/components/Player");
const Utils = require("../src/common/Utils");
const Constants = require("../src/common/Constants");
const requestValidInput = require("../src/common/RequestValidInput");
jest.mock("../src/common/RequestValidInput");
jest.mock("../src/common/Utils");

describe("Tests the ability of either type of player in the game to generate a new move", () => {
  beforeEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
  });

  test("Computer player type can randomly choose a move (either 'rock', 'paper' or 'scissors')", async () => {
    Utils.generateRandomInt.mockReturnValue(1);
    const newPlayerComputer = new Player(Constants.COMPUTER);
    const newComputerMove = await newPlayerComputer.makeMove();
    expect(typeof newComputerMove).toBe("string");
    expect(newComputerMove).toEqual(Constants.PAPER);
  });

  test("Human player type can choose a move ('rock', 'paper' or 'scissors')", async () => {
    const newPlayerComputer = new Player(Constants.HUMAN);
    requestValidInput.mockReturnValue("rock");
    const newComputerMove = await newPlayerComputer.makeMove();
    expect(typeof newComputerMove).toBe("string");
    expect(newComputerMove).toEqual(Constants.ROCK);
  });
});
