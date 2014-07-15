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

var buttonsAllowed = [];
buttonsAllowed[32]= true;
buttonsAllowed[37]= true;
buttonsAllowed[38]= true;
buttonsAllowed[39]= true;
buttonsAllowed[40]= true;

document.addEventListener('keydown', function (e) {
    if (e.keyCode in buttonsAllowed) {
    	cat.move(e.keyCode);
	};
});
