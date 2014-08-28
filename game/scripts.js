//Four rooms, four bosses
//current ideas for bosses:
//dog in the bed room, vacuum in living room, rat in kitchen, house plant in a family room.

window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;

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
	};
}

var menuExit = function() {
	var menuDone = false;
	var c = 0;
	var j = 0;

	var interval = setInterval(function() { 
		ctx.drawImage(menu,c,j,width,height,0,0,width,height); 
		c += 400;
		if(c >= 2000){
			c = 0;
			j += 400;
		}
		if (j >= 1200) {
			clearInterval(interval);
			menuDone = true;
		}
		if(menuDone){
			gameLoop();
		}
	}, 100);
};

var gameLoop = function() {
	bedroom.draw();
	cat.draw();
	dog.draw();
	dog.AI();
	collisionCheck();
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
		menuExit();
	}
});

var collisionCheck = function() {
	var vectorX = (cat.x + (cat.width/2)) - (dog.x + (dog.width/2));
	var vectorY = (cat.y + (cat.height/2)) - (dog.y + (dog.height/2));

	var halfWidths = (cat.width/2) + (dog.width/2);
	var halfHeights = (cat.height/2) + (dog.height/2);

	if (Math.abs(vectorX) < halfWidths && Math.abs(vectorY) < halfHeights) {
		damageHealth(cat, 0.5);
	};
};

var damageHealth = function(character, amountOfDamage) {
	if (character.health >  0) {
		character.health -= amountOfDamage;
	}

	healthCheck(character);
};

var healthCheck = function(character) {
	if(character.health <= 0){
		console.log(character.name + " = dead");
		//return character.death = true????
	}
};