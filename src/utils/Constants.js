const GAME_START_MESSAGE = "Welcome to Rock, paper, scissors! Let's begin!";
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
const USER_ACCEPT = ["y", "yes", "ok", "okay"];
const USER_DENY = ["n", "no", "nope"];

const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
const HUMAN = "human";
const COMPUTER = "computer";

const playerTypes = [HUMAN, COMPUTER];
const moves = { "0": ROCK, "1": PAPER, "2": SCISSORS };
const moveRules = {
  [ROCK]: [SCISSORS],
  [PAPER]: [ROCK],
  [SCISSORS]: [PAPER]
};

module.exports = {
  GAME_START_MESSAGE,
  REQUEST_PLAYER_TYPE_MESSAGE,
  VALIDATION_SUCCESS_PHRASE,
  MAX_NUMBER_OF_GAME_ROUNDS,
  MAX_ROUNDS_TERMINATION_MESSAGE,
  INVALID_MOVE_INPUT_PHRASE,
  INVALID_PLAYER_INPUT_PHRASE,
  ENTER_MOVE_MESSAGE,
  USER_ACCEPT,
  USER_DENY,
  ROCK,
  PAPER,
  SCISSORS,
  moveRules,
  playerTypes,
  HUMAN,
  COMPUTER,
  moves
};
