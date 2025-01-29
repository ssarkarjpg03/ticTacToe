let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");
let box5 = document.getElementById("box5");
let box6 = document.getElementById("box6");
let box7 = document.getElementById("box7");
let box8 = document.getElementById("box8");
let box9 = document.getElementById("box9");
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
    name1.innerText=inp1.value + " x  "
    name2.innerText=inp2.value + " 0  "
}

function ok(){
    inputBoxName.style.display = "none";
    mainBox.style.display = "flex";
}

let chance = "X"

function changeChance() {
    if (chance == "X") {
        chance = "0";
    }
    else {
        chance = "X";
    }
}

function play(ele) {
    if (ele.innerText == "") {
        ele.innerText = chance;
        win();
        changeChance();
    }
}

function win() {
    if (box1.innerText == box2.innerText && box1.innerText == box3.innerText && box1.innerText != "") {
        console.log(chance + "win");
        horiTop.style.display = "flex"
        setTimeout(() => {
            result.style.display = "flex";
            if (chance == "X") {
                chance = "0"
                chance = inp2.value
            }
            else {
                chance = "X"
                chance = inp1.value;
            }
            result.innerText = chance + " Is Win";
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        }, 1000);

    }
    if (box4.innerText == box5.innerText && box4.innerText == box6.innerText && box4.innerText != "") {
        console.log(chance + "win");
        horiMiddle.style.display = "flex";
        setTimeout(() => {
            result.style.display = "flex";
            if (chance == "X") {
                chance = "0"
                chance = inp2.value
            }
            else {
                chance = "X"
                chance = inp1.value;
            }
            result.innerText = chance + " Is Win";
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        }, 1000);
    }
    if (box7.innerText == box8.innerText && box7.innerText == box9.innerText && box7.innerText != "") {
        console.log(chance + "win");
        horiBottom.style.display = "flex"
        setTimeout(() => {
            result.style.display = "flex";
            if (chance == "X") {
                chance = "0"
                chance = inp2.value
            }
            else {
                chance = "X"
                chance = inp1.value;
            }
            result.innerText = chance + " Is Win";
            setTimeout(() => {
                window.location.reload();
            }, 1500);
        }, 1000);
    }

    if (box1.innerText == box4.innerText && box1.innerText == box7.innerText && box1.innerText != "") {
        console.log(chance + "win");

        virtop.style.display = "flex";
        setTimeout(() => {
            result.style.display = "flex";
            if (chance == "X") {
                chance = "0"
                chance = inp2.value
            }
            else {
                chance = "X"
                chance = inp1.value;
            }
            result.innerText = chance + " Is Win";
            setTimeout(() => {
                window.location.reload();
            }, 1500);
        }, 1000);

    }
    if (box2.innerText == box5.innerText && box2.innerText == box8.innerText && box2.innerText != "") {
        console.log(chance + "win");
        virmiddle.style.display = "flex";
        setTimeout(() => {
            result.style.display = "flex";
            if (chance == "X") {
                chance = "0"
                chance = inp2.value
            }
            else {
                chance = "X"
                chance = inp1.value;
            }
            result.innerText = chance + " Is Win";
            setTimeout(() => {
                window.location.reload();
            }, 1500);
        }, 1000);
    }
    if (box3.innerText == box6.innerText && box3.innerText == box9.innerText && box3.innerText != "") {
        console.log(chance + "win");
        virbottom.style.display = "flex";
        setTimeout(() => {
            result.style.display = "flex";
            if (chance == "X") {
                chance = "0"
                chance = inp2.value
            }
            else {
                chance = "X"
                chance = inp1.value;
            }
            result.innerText = chance + " Is Win";
            setTimeout(() => {
                window.location.reload();
            }, 1500);
        }, 1000);
    }

    if (box1.innerText == box5.innerText && box1.innerText == box9.innerText && box1.innerText != "") {
        console.log(chance + "win");
        diag1.style.display = "flex"
        setTimeout(() => {
            result.style.display = "flex";
            if (chance == "X") {
                chance = "0"
                chance = inp2.value
            }
            else {
                chance = "X"
                chance = inp1.value;
            }
            result.innerText = chance + " Is Win";
            setTimeout(() => {
                window.location.reload();
            }, 1500);
        }, 1000);
    }
    if (box3.innerText == box5.innerText && box3.innerText == box7.innerText && box3.innerText != "") {
        console.log(chance + "win");
        diag2.style.display = "flex";
        setTimeout(() => {
            result.style.display = "flex";
            if (chance == "X") {
                chance = "0"
                chance = inp2.value
            }
            else {
                chance = "X"
                chance = inp1.value;
            }
            result.innerText = chance + " Is Win";
            setTimeout(() => {
                window.location.reload();
            }, 1500);
        }, 1000);
    }
}