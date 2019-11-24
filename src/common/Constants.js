const GAME_START_MESSAGE = "Welcome to Rock, paper, scissors! Let's begin!";
const GAME_END_MESSAGE = "Thanks for playing!";
const REQUEST_PLAYER_TYPE_MESSAGE =
  "Who would you like to play this game, 'human' or 'computer'?: ";
const VALIDATION_SUCCESS_PHRASE = "You have chosen";
const MAX_NUMBER_OF_GAME_ROUNDS = 50;
const MAX_ROUNDS_TERMINATION_MESSAGE = `You have played ${MAX_NUMBER_OF_GAME_ROUNDS} rounds! Phew! We are ending the game and calling it a draw.`;
const INVALID_MOVE_INPUT_PHRASE =
  "is not a valid move. Please type your move again. ";
const INVALID_PLAYER_INPUT_PHRASE =
  "is not a valid player type. Please enter the player type again. ";
const ENTER_MOVE_MESSAGE =
  "Enter your move (choose either 'rock', 'paper', or 'scissors'): ";
const BLANK_LINE = "";
const USER_ACCEPT = ["y", "yes", "ok", "okay"];
const USER_DENY = ["n", "no", "nope"];
const USER_INPUT_PLAY_AGAIN = "Y";
const USER_INPUT_END_GAME = "n";
const INVALID_INPUT_PHRASE = "is not a valid";
const REPEAT_GAME_MESSAGE = "Play again? (y/n): ";
const NO_WINNER_ERROR_MESSAGE = "There is no winner.";

const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
const HUMAN = "human";
const COMPUTER = "computer";
const PLAYER_TYPE = "player type";
const MOVE_TYPE = "move";
const USER_CONFIRMATION_RESPONSE_TYPE = "response";

const playerTypes = [HUMAN, COMPUTER];
const moves = { "0": ROCK, "1": PAPER, "2": SCISSORS };
const moveWinningRules = {
  [ROCK]: [SCISSORS],
  [PAPER]: [ROCK],
  [SCISSORS]: [PAPER]
};

module.exports = {
  GAME_END_MESSAGE,
  GAME_START_MESSAGE,
  REQUEST_PLAYER_TYPE_MESSAGE,
  VALIDATION_SUCCESS_PHRASE,
  MAX_NUMBER_OF_GAME_ROUNDS,
  MAX_ROUNDS_TERMINATION_MESSAGE,
  INVALID_MOVE_INPUT_PHRASE,
  INVALID_PLAYER_INPUT_PHRASE,
  ENTER_MOVE_MESSAGE,
  INVALID_INPUT_PHRASE,
  USER_CONFIRMATION_RESPONSE_TYPE,
  REPEAT_GAME_MESSAGE,
  NO_WINNER_ERROR_MESSAGE,
  USER_INPUT_PLAY_AGAIN,
  USER_INPUT_END_GAME,
  PLAYER_TYPE,
  MOVE_TYPE,
  USER_ACCEPT,
  USER_DENY,
  BLANK_LINE,
  ROCK,
  PAPER,
  SCISSORS,
  moveWinningRules,
  playerTypes,
  HUMAN,
  COMPUTER,
  moves
};
