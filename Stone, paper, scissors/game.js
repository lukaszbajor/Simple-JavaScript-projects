//Objects
const gameStats = {
    numbersOfGame: 0,
    numbersOfWins: 0,
    numbersOfLosses: 0,
    numbersOfdraws: 0
}

const game = {
    player: "",
    pc: ""
}

//Add border for current choice
const choices = [...document.querySelectorAll(".square")];

function selectedChoice() {
    game.player = this.dataset.option;
    choices.forEach(choice => choice.style.boxShadow = "");
    this.style.boxShadow = "0 0 0 3px white";
}


choices.forEach(choice => choice.addEventListener("click", selectedChoice))


//PC choice

function pcChoice() {
    const pcMove = choices[Math.floor(Math.random() * choices.length)].dataset.option;
    return pcMove;
}

//Compare values andn check who win

function compareValue(player, pc) {
    if (player === pc) {
        return "draw";
    } else if ((player === "paper" && pc === "stone") || (player === "stone" && pc === "scissors") || (player === "scissors" && pc === "paper")) {
        return "win";
    } else {
        return "loss";
    }
}

function getResults(player, pc, result) {
    document.querySelector('[data-results="your-choice"]').textContent = player;
    document.querySelector('[data-results="pc-choice"]').textContent = pc;
    document.querySelector('p.numbers span').textContent = ++gameStats.numbersOfGame;
    if (result === "win") {
        document.querySelector('p.wins span').textContent = ++gameStats.numbersOfWins;
        document.querySelector('[data-results="winner"]').textContent = "Player";
    } else if (result === "draw") {
        document.querySelector('p.draws span').textContent = ++gameStats.numbersOfdraws;
        document.querySelector('[data-results="winner"]').textContent = "Draw";
    } else {
        document.querySelector('p.losses span').textContent = ++gameStats.numbersOfLosses;
        document.querySelector('[data-results="winner"]').textContent = "PC";
    }
}

function resetChoice() {
    document.querySelector(`[data-option="${game.player}"]`).style.boxShadow = "";
    game.player = "";
}
//Button "Play"
function clickPlay() {
    if (!game.player) {
        return alert("You must choice one option!");
    }
    game.pc = pcChoice();
    const result = compareValue(game.player, game.pc);
    getResults(game.player, game.pc, result);
    resetChoice();
}

document.querySelector(".start").addEventListener("click", clickPlay)