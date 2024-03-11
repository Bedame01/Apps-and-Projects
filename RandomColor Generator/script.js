const generatBtn = document.querySelector('.generatBtn');
let displayBody = document.querySelector('.colorDisplay');
let displayColorName = document.getElementById("colorName");
let copyColor = document.querySelector('.copyLink');
const colorTypeBtn = document.querySelectorAll('.colorType');
const solidBtn = document.querySelector('#solid');
const gradientBtn = document.querySelector('#gradient');
let randomColors;
let colorCode;

function gradientClick() {
    generatBtn.addEventListener('click', () => {
        generateGradient();
    })
};
function solidClick() {
    generatBtn.addEventListener('click', () => {
        generateSolid();
    })
};

solidClick();

// GET RANDOM SOLID RGB COLOR
function getSolid() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return `Rgb(${r}, ${g}, ${b})`
};
// GET RANDOM GRADIENT RGB COLOR
function getGradient() {
    let LinearGradient = `linear-gradient(120deg, ${getSolid()}, ${getSolid()})`;
    return LinearGradient
}

// COLOR TYPE DIFFERENCES FUNCTIONALITY
function generateGradient() {
    randomGradient = getGradient();
    displayBody.style.background = randomGradient;
    displayColorName.textContent = randomGradient;
    displayColorName.style.color = '#00233b';
    displayColorName.style.fontSize = '190%';
    copyColor.style.visibility = 'visible';
};
function generateSolid() {
    randomColors = getSolid();
    displayBody.style.background = randomColors;
    displayColorName.textContent = randomColors;
    displayColorName.style.color = randomColors;
    copyColor.style.visibility = 'visible';
}

// COLOR TYPE COMPARISON FUNCTION
colorTypeBtn.forEach(colorTypeBtn => colorTypeBtn.addEventListener('click', (e) => {
    let typeChoosen = e.target.id;

    if (typeChoosen === 'solid') {
        solidBtn.classList.add('selected');
        gradientBtn.classList.remove('selected');
        solidClick();
    }
    if (typeChoosen === 'gradient') {
        gradientBtn.classList.add('selected');
        solidBtn.classList.remove('selected');
        gradientClick();
    }
}));


// COPY COLOR CODE TO CLIPBOARD FUNCTIONALITY
function copyToClipboard() {
    // const text = document.getElementById('textToCopy').innerText;
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Text copied to clipboard');
}
