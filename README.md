# Rock, Paper, Scissors

By Gaurav Sharma

# INSTRUCTIONS TO RUN CODE

1. npm is required to run the program. Please install npm from https://docs.npmjs.com/cli/install. Jest testing framework is used for unit testing. Jump to point 7 for details on how to run the tests.
2. Unzip file and save it to a particular directory
3. Open Terminal (or equivalent) and go to directory the project is saved in. For instance, the directory could be ~/Desktop/rock-paper-scissors
4. Run command npm install to install the Jest testing framework
5. Run command 'node App.js' to execute program
6. To run ALL tests, run command 'npm run test:All'
7. To run a particular test file, run command 'npm test', then press 'p' upon loading and type the filename, followed by enter

# EXPLANATION OF THE PROGRAM

1. Program is a re-creation of the classical game of rock, paper, scissors, that cn be played on the command line.
2. Player 1 is my default the computer. The user is first promted to choose Player 2 by either entering 'human' or 'computer'
3. The game then proceeds. If it is a draw, i.e. both players are prompted to play the round again.
4. The computer's moves are randomly generated (or almost randomly generated, it's hard for computers to produce a purely random number). Each move has an approximately 33.3% chance of being generated.
5. The maximum number of rounds is currently limited to 50. This is because there is a tiny by valid probability for draw's to reoccur repeatedly.
6. After the round successfully results in a win for one of the players, the user is then prompted to choose whether to end the game or play a new game again.
