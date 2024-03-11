let colorArray = getRandomColors(6);
const colorDisplay = document.querySelector('.displaycolor');
let boxes = document.querySelectorAll('.square');
let header = document.querySelector('#header');
let displayMessage = document.querySelector('.message');
let refreshColors = document.querySelector('.redo');
const easyMode = document.querySelector(".easy");
const hardMode = document.querySelector(".hard");
const selectEasy = document.querySelectorAll(".easymode");

// Display random rgb colors on page
// picked a random color from colors array
function pickColor() {
    var random = Math.floor(Math.random() * colorArray.length);
    return colorArray[random];
};
// assigned picked color to display on page
var pickedColor = pickColor();
colorDisplay.textContent = pickedColor;

// Assign each boxes with different color
for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = colorArray[i];
    boxes[i].addEventListener('click', function() {
        // get color of a box that is clicked
        var clickedColor = this.style.backgroundColor;
        // compare clicked color with displayed color on page
        if (clickedColor === pickedColor) {
            changeAllColor(clickedColor);
            displayMessage.textContent = 'Correct!';
            refreshColors.textContent = 'Play Again?'
        } else {
            this.style.backgroundColor = 'rgb(8, 1, 8)';
            displayMessage.textContent = 'Try Again!';
            refreshColors.textContent = 'NEW COLORS'
        }
    })
}

function changeAllColor(col) {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = col;
    }
}

// CODE FUNCTIONALITY TO GET RANDOM RG COLORS
function getRandomColors(num) {
    // get empty array
    let arr = [];
    // loop through arr
    for (let i = 0; i < num; i++) {
        // push random colors to arr
        arr.push(generateRandomColors());
    };
    return arr;
}

// CODE FUNCTIONALITY TO GENERATE RANDOM RG COLORS
function generateRandomColors() {
    // getting rgb color code from 0 - 255
    // red color code from 0 - 255
    let r = Math.floor(Math.random() * 256);
    // green color code from 0 - 255
    let g = Math.floor(Math.random() * 256);
    // blue color code from 0 - 255
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// REFRESH AND GENERATE NEW COLORS ON "NEW COLORS" BUTTON CLICK
refreshColors.addEventListener('click', function () {
    colorArray = getRandomColors(6);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = colorArray[i];
    }

    displayMessage.textContent = '';
})
