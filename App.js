const Query = require("./src/components/Query");
const Game = require("./src/components/Game");
const Player = require("./src/components/Player");
const InputValidator = require("./src/components/InputValidator");
const { displayMessage } = require("./src/utils/Utils");
const {
  COMPUTER,
  GAME_START_MESSAGE,
  REQUEST_PLAYER_TYPE_MESSAGE,
  VALIDATION_SUCCESS_PHRASE,
  MAX_NUMBER_OF_GAME_ROUNDS,
  MAX_ROUNDS_TERMINATION_MESSAGE,
  INVALID_MOVE_INPUT_PHRASE,
  INVALID_PLAYER_INPUT_PHRASE
} = require("./src/utils/Constants");

const query = new Query();
const valid = new InputValidator();

const playGame = async () => {
  const currentGame = new Game();

  displayMessage(GAME_START_MESSAGE);

  let userType = await query.makeQuery(REQUEST_PLAYER_TYPE_MESSAGE);
  while (!valid.playerTypeInput(userType)) {
    displayMessage(`${userType} ${INVALID_PLAYER_INPUT_PHRASE}`);
    userType = await query.makeQuery(REQUEST_PLAYER_TYPE_MESSAGE);
  }

  displayMessage(`${VALIDATION_SUCCESS_PHRASE} ${userType}`);

  const playerA = new Player(COMPUTER);
  const playerB = new Player(userType);

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

    if (userType !== COMPUTER) {
      while (!valid.moveNameInput(moveB)) {
        displayMessage(`${moveB} ${INVALID_MOVE_INPUT_PHRASE}`);
        moveB = await playerB.makeMove();
      }
    }
    displayMessage(
      `(Player 2) ${userType === COMPUTER ? COMPUTER : "you"} chose ${moveB}`
    );
    displayMessage(`(Player 1) ${COMPUTER} chose ${moveA}`);

    winner = currentGame.getWinner(moveA, moveB);
    gameRounds += 1;
  }

  if (winner === moveA) {
    displayMessage(`(Player 1) ${COMPUTER} wins!`);
  } else if (winner === moveB) {
    displayMessage(
      `(Player 2) ${userType.toLowerCase() === COMPUTER ? COMPUTER : "you"} ${
        userType.toLowerCase() === COMPUTER ? "wins" : "win"
      }!`
    );
  }
  return;
};

const playLoop = async () => {
  let end = false;
  while (!end) {
    await playGame();
    let userResponse = await query.makeQuery("Play again? (y/n): ");
    while (!valid.repeatGameInput(userResponse)) {
      displayMessage(
        `Sorry I can't understand '${userResponse}'. Would you like to play again? (y/n):  `
      );
      userResponse = await query.makeQuery("Play again? (y/n): ");
    }
    if (userResponse === "n") {
      end = true;
    }
  }
  displayMessage("Thanks for playing!");
  return;
};

playLoop();
