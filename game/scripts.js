//Four rooms, four bosses
//current ideas for bosses:
//dog in the bed room, vacuum in living room, rat in kitchen, house plant in a family room.

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

var menu;
var started;
window.onload = function () {
	started = false;
	menu = new Image();
	menu.src = "../assets/catMenu.png";
	menu.onload = function() {
		ctx.drawImage(menu,0,0,width,height,0,0,width,height);
		console.log("onload");
	};
}

var menuExit = function() {
	var menuDone = false;
	var c = 0;
	var j = 0;
	//first row
	var interval = setInterval(function() { 
		ctx.drawImage(menu,c,j,width,height,0,0,width,height); 
		c += 400;
		console.log("interval 1");
		if(c >= 2000){
			// clearInterval(interval);
			c = 0;
			j += 400;
		}
		if (j >= 1200) {
			clearInterval(interval);
			menuDone = true;
		}
		console.log(menuDone);
		if(menuDone){
			gameLoop();
		}
	}, 100);
};

var gameLoop = function() {
	bedroom.draw();
	cat.draw();
	cat.move();
	requestAnimationFrame(gameLoop);
};

var keys = [];

document.addEventListener('keydown', function (e) {
	keys[e.keyCode] = true;
});

document.addEventListener("keyup", function(e) {
    keys[e.keyCode] = false;
});

canvas.addEventListener("click", function(e){
	if(!started){
		started = true;
		console.log("clicked");
		menuExit();
	}
});