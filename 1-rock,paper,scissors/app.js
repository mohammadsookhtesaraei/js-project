// base choice

const choices = ["rock", "paper", "scissors"];

// final soccer
let playerSoccer = 0;
let computerSoccer = 0;

// check winner function

const checkWinner = (player, pc) => {
  if (player === pc) {
    return "Its a tie!";
  } else {
    switch (player) {
      case "rock":
        return pc === "scissors" ? "player" : "pc";

      case "paper":
        return pc === "rock" ? "player" : "pc";

      case "scissors":
        return pc === "paper" ? "player" : "pc";

      default:
        return "invalid Data!";
    }
  }
};

// check who win function

const showResult = (result) => {
  if (result === "player") {
    console.log("You win");
    playerSoccer++;
  } else if (result === "pc") {
    console.log("You loose !");
    computerSoccer++;
  } else {
    console.log("its a tie!");
  }

  console.log("You soccer:", playerSoccer);
  console.log("pc soccer:", computerSoccer);
  console.log("_..............................._");
};

// play game function

const playGames = () => {
  if (playerSoccer === 5) {
    console.log("You win ! Are you ready for new round just reload page!");
    return;
  } else if (computerSoccer === 5) {
    console.log("You loose ! Are you ready for new round just reload page!");
    return;
  }

  const playerChoice = prompt("Choose rock,paper,scissors");
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  if (choices.indexOf(playerChoice?.toLowerCase()) !== -1) {
    console.log(`player choose : ${playerChoice}`);
  } else {
    console.log("You cheated! and pc win ");
    return;
  }

  if (computerChoice) {
    console.log(`pc choose : ${computerChoice}`);
  }
  const gameResult = checkWinner(playerChoice, computerChoice);
  showResult(gameResult);
  playGames();
};

playGames();
