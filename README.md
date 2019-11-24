# Rock, Paper, Scissors

By Gaurav Sharma

# INSTRUCTIONS TO RUN CODE

1. npm package namager is required to run the program. Please install npm from https://docs.npmjs.com/cli/install. Jest testing framework is used for unit testing. Jump to point 7 for details on how to run the tests.
2. Unzip file and save it to a particular directory.
3. Open Terminal (or equivalent) and go to directory the project is saved in. For instance, the directory could be ~/Desktop/rock-paper-scissors.
4. Run command npm install to install the Jest testing framework.
5. Run command 'node index.js' to execute program.
6. To run ALL tests, run command 'npm run test:All'.
7. To run a particular test file, run command 'npm test' followed by the test file name. For example, 'npm test Player.test.js'.

# EXPLANATION OF THE PROGRAM

1. Program is a re-creation of the classical game of rock, paper, scissors, that cn be played on the command line.
2. Player 1 is by default the computer. The user is prompted to choose the second player by either entering 'human' or 'computer'. User input is case insensitive.
3. Player 2 is then prompted to choose a move (either rock, paper or scissors) by typing it in. If it is a draw, both players are prompted to play the round again.
4. The computer's moves are randomly generated (or almost randomly generated, it's hard for deterministic computers to produce purely random numbers). Each move has an approximately 33.3% chance of being generated.
5. The maximum number of rounds of the game is currently limited to 50. This is because there is a tiny but valid probability for draws to reoccur repeatedly.
6. After the round successfully results in a win for one of the players, the user is then prompted to choose whether to end the game or play a new one.
