// Get DOM elements
const gradient = document.getElementById('gradient');
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const h3 = document.querySelector('h3');
const randomBtn = document.getElementById('random');

// Set initial color values
color1.value = '#FF0000';
color2.value = '#FFFF00';

// Set gradient colors to match either random or manual input
function setGradient(){
    gradient.style.background = `linear-gradient(to right, ${color1.value} , ${color2.value})`;
    h3.textContent = gradient.style.background;
}

// Create a random hex code
function getRandom(){
    let codes = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    let hex = '';
    for (let i = 0; i < 6; i++) {
        let num = Math.floor(Math.random() * codes.length);
        hex += codes[num];
    }
    return `#${hex}`;
};

// Set color picker values to random and set gradient
function generateRandomColors() {
    color1.value = getRandom();
    color2.value = getRandom();
    setGradient();
}

// Add gradient info to h3 text content on load
window.addEventListener('load', setGradient);

// Update gradient when color pickers change
color1.addEventListener('change', setGradient);
color2.addEventListener('change', setGradient);

// Set random gradient
randomBtn.addEventListener('click', generateRandomColors);

