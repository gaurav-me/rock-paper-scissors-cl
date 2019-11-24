const Player = require("../src/components/Player");
const Utils = require("../src/common/Utils");
const Constants = require("../src/common/Constants");
const requestValidInput = require("../src/common/RequestValidInput");
jest.mock("../src/common/RequestValidInput");
jest.mock("../src/common/Utils");

describe("Tests the ability of any type of player in the game to generate a new move", () => {
  // const mockMath = Object.create(global.Math);
  // mockMath.random = () => 0.1;
  // global.Math = mockMath;
  beforeEach(() => jest.resetModules());

  test("Computer player type can randomly choose a move (either 'rock', 'paper' or 'scissors')", async () => {
    Utils.generateRandomInt.mockReturnValue(1);
    const newPlayerComputer = new Player(Constants.COMPUTER);
    const newComputerMove = await newPlayerComputer.makeMove();
    expect(typeof newComputerMove).toBe("string");
    expect(newComputerMove).toEqual("paper");
  });

  test("Human player type can choose a move ('rock', 'paper' or 'scissors')", async () => {
    const newPlayerComputer = new Player(Constants.HUMAN);
    requestValidInput.mockReturnValue("rock");
    const newComputerMove = await newPlayerComputer.makeMove();
    expect(typeof newComputerMove).toBe("string");
    expect(newComputerMove).toEqual("rock");
  });
});
