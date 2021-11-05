//Canvas setup
const canvas = document.getElementById("gameScreen1");
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 500;

//Mouse interaction
let canvasPosition = canvas.getBoundingClientRect();
console.log(canvasPosition);
const mouse = {
    x: canvas.width/2,
    y: canvas.height/2,
    click: false
}
canvas.addEventListener('mousedown', function(event) {
    mouse.x = event.x - canvasPosition.left;
    mouse.y = event.y - canvasPosition.top;
    console.log(mouse.x, mouse.y);
});

