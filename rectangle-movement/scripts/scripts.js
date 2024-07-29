// This is the JS script for scripts.js

console.log("Hello World!");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let x = 0;
let y = 0;
let vx = 0;
let vy = 0;

function update(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    x += vx;
    y += vy;
    ctx.fillRect(x, y, 110, 300);
    ctx.fillStyle = "green";
    requestAnimationFrame(update);
}

update();