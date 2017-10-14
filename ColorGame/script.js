let numSquares = 6;
let colors = [];
let pickedColor;
// selector variables
const squares = document.querySelectorAll(".square");
const colorDisplay = document.getElementById("colorDisplay");
const messageDisplay = document.querySelector("#message");
const h1 = document.querySelector("h1");
const resetBtn = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
        });
    }
    for (let i = 0; i < squares.length; i++) {
        //add click listeners to squares
        squares[i].addEventListener("click", function() {
            //grab color of clicked squares
            var clickedColor = this.style.background;
            // console.log needed to check for === equality of rgb
            console.log(clickedColor, pickedColor)
            //compare color to pickedColor
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                messageDisplay.style.background = "darkgreen";
                changeColors(clickedColor);
                resetBtn.textContent = "Play again?";
                resetBtn.style.color = "#FF6347";
                resetBtn.style.background = "#FFFFFF";
                changeColors(clickedColor);
                h1.style.background = clickedColor;
            } else {
                this.style.background = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
    reset();
}

function reset() {
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked Color
    colorDisplay.textContent = pickedColor;
    resetBtn.textContent = "New Colors";
    messageDisplay.textContent = "";
    //change colors of squares
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.background = "#FF6347";
}

resetBtn.addEventListener("click", function() {
    reset();
});

colorDisplay.textContent = pickedColor;

function changeColors(color) {
    //loop through all squares
    for (let i = 0; i < squares.length; i++) {
        //change each color to match given color
        squares[i].style.background = color;
    }
}

function pickColor() {
    const random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    // make an array
    let arr = [];
    // repeat num times
    for (let i = 0; i < num; i++) {
        // add random colors to aray
        arr.push(randomColor());
    }
    // return array
    return arr;
}

function randomColor() {
    // pick a red (Math.floor & Math.random for all)
    let r = Math.floor(Math.random() * 256);
    /* 256 cause we want 255 to be our greatest nr */
    // pick a green
    let g = Math.floor(Math.random() * 256);
    // pick a blue
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}