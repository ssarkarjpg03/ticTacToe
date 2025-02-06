let box = document.getElementsByClassName("box");
let virtop = document.getElementById("top");
let virmiddle = document.getElementById("middle");
let virbottom = document.getElementById("bottom");
let horiTop = document.getElementById("horiTop");
let horiMiddle = document.getElementById("horiMiddle");
let horiBottom = document.getElementById("horiBottom");
let diag1 = document.getElementById("diag1");
let diag2 = document.getElementById("diag2");
let result = document.getElementById("result");
let mainBox = document.getElementById("mainBox");
let inputBoxOuter = document.getElementById("inputBoxOuter");
let inp1 = document.getElementById("inp1");
let inp2 = document.getElementById("inp2");
let inputBoxName = document.getElementById("inputBoxName");
let name1 = document.getElementById("name1");
let name2 = document.getElementById("name2");

function playerTake() {
    inputBoxOuter.style.display = "none"
    inputBoxName.style.display = "flex";
    name1.innerText = inp1.value + " X ";
    name2.innerText = inp2.value + " 0 ";
}

function ok() {
    inputBoxName.style.display = "none";
    mainBox.style.display = "flex";
}

let chance = "X";

function changeChance() {
    chance = chance === "X" ? "0" : "X";
}

function play(ele) {
    if (ele.innerText === "") {
        ele.innerText = chance;
        win();
        changeChance();
    }
}

function win() {
    const winPatterns = [
        [box[0], box[1], box[2], horiTop],
        [box[3], box[4], box[5], horiMiddle],
        [box[6], box[7], box[8], horiBottom],
        [box[0], box[3], box[6], virtop],
        [box[1], box[4], box[7], virmiddle],
        [box[2], box[5], box[8], virbottom],
        [box[0], box[4], box[8], diag1],
        [box[2], box[4], box[6], diag2]
    ];

    let isWinner = false;

    // Check for a win
    for (const [b1, b2, b3, line] of winPatterns) {
        if (b1.innerText === b2.innerText && b1.innerText === b3.innerText && b1.innerText !== "") {
            line.style.display = "flex"; // Show the winning line
            isWinner = true;
            setTimeout(() => displayResult(b1.innerText), 1000); // Show the result after a delay
            break;
        }
    }

    // Check for a draw if there's no winner and all boxes are filled
    if (!isWinner && isBoardFull()) {
        setTimeout(() => {
            result.style.display = "flex";
            result.innerHTML = "It's a Draw! <button id='done'>Replay</button>";
            document.getElementById("done").addEventListener("click", replay);
        }, 500);
    }
}

function isBoardFull() {
    // Check if all boxes are filled
    return Array.from(box).every((b) => b.innerText !== "");
}

function displayResult(winnerSymbol) {
    result.style.display = "flex";

    const winner = winnerSymbol === "X" ? inp1.value : inp2.value;
    result.innerHTML = `${winner} Wins! <button id='done'>Replay</button>`;

    // Handle Replay Button
    document.getElementById("done").addEventListener("click", replay);
}

function replay() {
    result.style.display = "none"; // Hide the result box
    Array.from(box).forEach((b) => (b.innerText = "")); // Clear all box texts
    chance = "X"; // Reset the initial chance to "X"
    hideWinningLines(); // Hide any winning lines displayed
}

function hideWinningLines() {
    const lines = [horiTop, horiMiddle, horiBottom, virtop, virmiddle, virbottom, diag1, diag2];
    lines.forEach((line) => (line.style.display = "none"));
}
