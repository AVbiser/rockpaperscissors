// userChoice, compChoice, gamePlay

function getComputerChoice() {
	let compChoice = Math.floor(Math.random() * 3);

	let choiceArray = ["rock", "paper", "scissors"];

	return choiceArray[compChoice];
}

let userChoice = "rock";

function gamePlay(userInput, compInput) {
	console.log(userInput);
	console.log(compInput);

	if (userInput === compInput) {
		return "It`s a tie!";
	} else if (
		(userInput === "rock" && compInput === "scissors") ||
		(userInput === "paper" && compInput === "rock") ||
		(userInput === "scissors" && compInput === "paper")
	) {
		return "User wins!";
	} else if (
		(compInput === "rock" && userInput === "scissors") ||
		(compInput === "paper" && userInput === "rock") ||
		(compInput === "scissors" && userInput === "paper")
	) {
		return "Computer wins!";
	}
}

console.log(gamePlay(userChoice, getComputerChoice()));
