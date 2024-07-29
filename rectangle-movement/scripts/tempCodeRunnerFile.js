// This is the JS script for the project

console.log("Hello World!");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function update(){
    ctx.fillRect(0, 0, 100, 100);
    requestAnimationFrame(update);
}

update();