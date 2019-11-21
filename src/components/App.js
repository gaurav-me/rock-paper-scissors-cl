const Game = require("./Game");
const Player = require("./Player");
const { displayMessage } = require("../utils/Utils");
const requestValidInput = require("../utils/RequestValidInput");
const {
  COMPUTER,
  PLAYER_TYPE,
  GAME_END_MESSAGE,
  GAME_START_MESSAGE,
  REPEAT_GAME_MESSAGE,
  VALIDATION_SUCCESS_PHRASE,
  USER_CONFIRMATION_RESPONSE,
  REQUEST_PLAYER_TYPE_MESSAGE,
  MAX_NUMBER_OF_GAME_ROUNDS,
  MAX_ROUNDS_TERMINATION_MESSAGE
} = require("../utils/Constants");

const playGame = async () => {
  const currentGame = new Game();

  displayMessage(GAME_START_MESSAGE);

  let playerType = await requestValidInput(
    PLAYER_TYPE,
    REQUEST_PLAYER_TYPE_MESSAGE
  );

  displayMessage(`${VALIDATION_SUCCESS_PHRASE} ${playerType}`);

  const playerA = new Player(COMPUTER);
  const playerB = new Player(playerType);

  let moveA = "";
  let moveB = "";
  let winner = "";
  let gameRounds = 0;

  while (!winner) {
    if (gameRounds >= MAX_NUMBER_OF_GAME_ROUNDS) {
      displayMessage(MAX_ROUNDS_TERMINATION_MESSAGE);
      break;
    }
    moveA = await playerA.makeMove();
    moveB = await playerB.makeMove();
    displayMessage(
      `(Player 2) ${playerType === COMPUTER ? COMPUTER : "you"} chose ${moveB}`
    );
    displayMessage(`(Player 1) ${COMPUTER} chose ${moveA}`);
    winner = currentGame.getWinner({ playerA: moveA, playerB: moveB });
    gameRounds += 1;
  }

  currentGame.announceWinner(playerType);
  return;
};

const playGameLoop = async () => {
  let end = false;
  while (!end) {
    await playGame();
    const userResponse = await requestValidInput(
      USER_CONFIRMATION_RESPONSE,
      REPEAT_GAME_MESSAGE
    );
    if (userResponse === "n") {
      end = true;
    }
  }
  displayMessage(GAME_END_MESSAGE);
  return;
};

module.exports = playGameLoop;
