const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const sizeEl = document.getElementById("size");
const colorEl = document.getElementById("color");
const clearEl = document.getElementById("clear");


// this is the initial size of the brush, but it can be changed
let size = 5;
let isPressed = false;
let color = 'black';
let x = undefined;
let y = undefined;

canvas.addEventListener('mousedown', (e) => {
    isPressed = true;

    x = e.offsetX;
    y = e.offsetY;
});

canvas.addEventListener('mouseup', (e) => {
    isPressed = false;

    x = undefined;
    y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
    // this is used to show us the info recorded when clicking the canvas
    // console.log(e);
    if (isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);
        x = x2;
        y = y2;
    }
});

increaseBtn.addEventListener("click", () => {
    size += 5;

    if (size > 50) {
        size = 50;
    }

    updateSizeOnScreen();
});

decreaseBtn.addEventListener("click", () => {
    size -= 5;

    if (size < 5){
        size = 5;
    }

    updateSizeOnScreen();
});

colorEl.addEventListener('change', (e) => {
    color = e.target.value;
});

clearEl.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
});

function updateSizeOnScreen() {
    sizeEl.innerText = size;
}

function drawCircle(x, y) {
    ctx.beginPath();
    // x = x coordinate of center of circle
    // y = y coordinate of center of circle
    // size = radius of the circle
    // #4 = starting angle
    // #5 = ending angle
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x1, y1, x2, y2){
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size;
    ctx.stroke();
}

