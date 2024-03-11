var boxesLength = 6;
let colorArray = getRandomColors(boxesLength);
const colorDisplay = document.querySelector('.displaycolor');
let boxes = document.querySelectorAll('.square');
let header = document.querySelector('#header');
let displayMessage = document.querySelector('.message');
let refreshColors = document.querySelector('.redo');
const easyMode = document.querySelector(".easy");
const hardMode = document.querySelector(".hard");
const selectEasy = document.querySelectorAll(".easymode");

// REFRESH COLORS FUNCTIONALITY
refreshColors.addEventListener('click', function () {
    colorArray = getRandomColors(boxesLength);
    autoPick = pickColor();
    colorDisplay.textContent = autoPick;

    // LOOPS THROUGH ALL BOXES
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = colorArray[i];
    }
    displayMessage.textContent = "";
    header.style.backgroundColor = 'rgb(0, 101, 173)';
    this.textContent = 'new colors';
});

// RESET BOXES TO THREE BOXES ON EASY MODE

var autoPick = pickColor();
colorDisplay.textContent = autoPick;
console.log(autoPick);

// LOOPS THROUGH ALL BOXES
for (let i = 0; i < colorArray.length; i++) {
    boxes[i].style.backgroundColor = colorArray[i];
    boxes[i].addEventListener('click', function () {
        var clickedColor = this.style.backgroundColor;
        console.log(clickedColor);
        if (clickedColor === autoPick) {
            changeAllColor(clickedColor);
            header.style.backgroundColor = autoPick;
            displayMessage.textContent = "Correct";
            displayMessage.classList.remove('shake');
            refreshColors.textContent = 'Play Again?';
        } else {
            this.style.backgroundColor = 'rgb(8, 1, 8)';
            displayMessage.textContent = "Try Again!";
            displayMessage.classList.add('shake');
            refreshColors.textContent = 'New colors';
        }
    })
}

// CHANGE ALL BOX COLOR STATE TO GIVEN CONDITION
function changeAllColor(color) {
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = color;
    }
}

// GETTING COLOR NAME FUNCTION
function pickColor() {
    var random = Math.floor(Math.random() * colorArray.length);
    return colorArray[random]
}

//  GET RANDOM COLORS GENERATOR FUNCTION
function getRandomColors(num) {
    // create empty array
    var arr = [];
    for (let i = 0; i < num; i++){
        arr.push(randomColorsGenerator())
    }
    return arr;
};

// RANDOM COLORS GENERATOR FUNCTION
function randomColorsGenerator() {
    // get rgb red color from 1 - 255
    let r = Math.floor(Math.random() * 256);
    // get rgb green color from 1 - 255
    let g = Math.floor(Math.random() * 256);
    // get rgb blue color from 1 - 255
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
};


// LEVEL MODE FUNCTIONALITY 
easyMode.addEventListener('click', () => {
    easyMode.classList.add("selected");
    hardMode.classList.remove("selected");
    boxesLength = 3;
    colorArray = getRandomColors(boxesLength);
    autoPick = pickColor();
    colorDisplay.textContent = autoPick;
    for (let i = 0; i < boxes.length; i++) {
        if (colorArray[i]) {
            boxes[i].style.backgroundColor = colorArray[i];
        } else {
            boxes[i].style.display = 'none';
        }
    };

    function getRandomColors(num) {
        // create empty array
        var arr = [];
        for (let i = 0; i < num; i++){
            arr.push(randomColorsGenerator())
        }
        return arr;
    };

    header.style.backgroundColor = 'rgb(0, 101, 173)';

});

hardMode.addEventListener('click', () => {
    hardMode.classList.add("selected");
    easyMode.classList.remove("selected");
    boxesLength = 6;
    colorArray = getRandomColors(boxesLength);
    autoPick = pickColor();
    colorDisplay.textContent = autoPick;
    for (let i = 0; i < boxes.length; i++) {
            boxes[i].style.backgroundColor = colorArray[i];
            boxes[i].style.display = 'block';
    };

    header.style.backgroundColor = 'rgb(0, 101, 173)';
});


