window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var width = 400;
var height = 400;
canvas.width = width;
canvas.height = height;	    
ctx.imageSmoothingEnabled = false;
ctx.mozImageSmoothingEnabled = false;
ctx.webkitImageSmoothingEnabled = false;

window.onload = function () {
	bedroom.draw();
	cat.draw();
	cat.move();
	requestAnimationFrame(window.onload);
}

var keys = [];

document.addEventListener('keydown', function (e) {
	keys[e.keyCode] = true;
});

document.addEventListener("keyup", function(e) {
    keys[e.keyCode] = false;
});
