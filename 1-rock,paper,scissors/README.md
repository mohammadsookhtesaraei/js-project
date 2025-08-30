# Rock-Paper-Scissors Game 🎮

A simple **Rock-Paper-Scissors** game implemented in JavaScript that you can play directly in the browser using `prompt` and `console.log`. The game is a race to **5 points**, where either the player or the computer wins.

---

## Features

* Choose between **rock, paper, or scissors**.
* Random computer choice for each round.
* Score tracking for both player and computer.
* Automatically ends when either the player or the computer reaches **5 points**.
* Handles **invalid or empty input** gracefully.
* Supports **case-insensitive input** (`Rock`, `PAPER`, `scissors`, etc.).

---

## How to Play

1. Open the `index.html` or run the JavaScript in a browser console.
2. When prompted, type your choice:

   ```
   rock
   paper
   scissors
   ```
3. The computer will make its choice randomly.
4. The console will display the result of the round and update the score.
5. The game continues until either the player or the computer reaches 5 points.
6. Once the game ends, reload the page to play again.

---

## Example

```
Player chose: rock
PC chose: scissors
You win this round!
Your score: 1
PC score: 0
_..............................._
```

---

## How It Works

* The main game loop is handled by the `playGames()` function.
* The `checkWinner(player, pc)` function determines the winner of each round.
* The `showResult(result)` function updates and displays the score.
* The game stops automatically when **playerScore** or **computerScore** reaches 5.

---

## Code Snippet

```javascript
const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

const checkWinner = (player, pc) => { /* ... */ };
const showResult = (result) => { /* ... */ };
const playGames = () => { /* ... */ };

playGames();
```

---

## License

This project is **free to use** for learning and personal purposes. No license required.
