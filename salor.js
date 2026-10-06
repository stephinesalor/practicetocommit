function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function playGame(targetNumber, userGuess) {
  if (userGuess < 1 || userGuess > 10) {
    return "Please enter a number between 1 and 10.";
  }

  if (userGuess === targetNumber) {
    return `🎉 Correct! The number was ${targetNumber}.`;
  } else if (userGuess < targetNumber) {
    return `Too low! (Secret number was ${targetNumber})`;
  } else {
    return `Too high! (Secret number was ${targetNumber})`;
  }
}

const secretNum = getRandomInt(1, 10);
const myGuess = 7;

console.log(`Your guess: ${myGuess}`);
console.log(playGame(secretNum, myGuess));