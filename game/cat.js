var catArrowImg = new Image();
catArrowImg.src = "../assets/catSprites.png";

var tick = 0;

var cat = {
	name: "Cat",
	x: 350,
	y: 350,
	speed: 5,
	friction: 0.78,
	velX: 0,
	velY: 0,
	width: 40,
	height: 40,
	walkFrame: 0,
	wasFacing: "left", //leftover from old jumping animation but might be necessary for attack anim
	health: 100
}

cat.move = function() {
	tick++; //for sprite changing
	//keyboard events
	//to enable diagonal movements, remove "else" in "else if" statements
	if(keys[37]){
		cat.wasFacing = "left";
		if(cat.velX > -cat.speed){
			cat.velX--;
		}
		if (tick % 4 === 0){
			cat.walkFrame++;
			if (cat.walkFrame > 5) {
				cat.walkFrame = 0;
			}
		}
	}
	else if(keys[39]){
		cat.wasFacing = "right";
		if(cat.velX < cat.speed){
			cat.velX++;
		}
		if (tick % 4 === 0){
			cat.walkFrame++;
			if (cat.walkFrame < 6 || cat.walkFrame > 11) {
				cat.walkFrame = 6;
			}
		}
	}    	
	else if(keys[38]){ //up
		if(cat.velY > -cat.speed){
			cat.velY--;
		}
		if (tick % 4 === 0){
			cat.walkFrame++;
			if (cat.walkFrame < 18 || cat.walkFrame > 23) {
				cat.walkFrame = 18;
			}
		}
	}
	else if(keys[40]){ //down
		if(cat.velY < cat.speed){
			cat.velY++;
		}
		if (tick % 4 === 0){
			cat.walkFrame++;
			if (cat.walkFrame < 12 || cat.walkFrame > 17) {
				cat.walkFrame = 12;
			}
		}
	}

	else if(keys[32]){ //spacebar

	}
	
	//the actual movement animation
	cat.velX *= cat.friction;
	cat.velY *= cat.friction;

	cat.x += cat.velX;
	cat.y += cat.velY; 

	//border collisions
	if(cat.x > width - cat.width){
		cat.x = width - cat.width;
	}
	else if(cat.x < 0){
		cat.x = 0;
	}
	if (cat.y < house.topMold.height+house.wall.height+house.wallpaper.height - cat.height){
		cat.y = house.topMold.height+house.wall.height+house.wallpaper.height - cat.height;
	}
	else if (cat.y > height - cat.height) {
		cat.y = height - cat.height;
	}
}

var healthBar = function(name, health, x, y){
	var rectWidth = health;
	var rectHeight = 10;
	ctx.fillStyle = "red";
	ctx.fillRect(x, y, rectWidth, rectHeight);
	ctx.strokeRect(x, y, 100, rectHeight);
	ctx.fillStyle = "black";
	ctx.font = "10pt Lucida Console";
	ctx.fillText(name, x, y-4);
}

cat.draw = function() {
	ctx.drawImage(catArrowImg,
		catSprite[cat.walkFrame].x, catSprite[cat.walkFrame].y, cat.width, cat.height,
		cat.x, cat.y, cat.width, cat.height);
	
	healthBar(cat.name, cat.health, 10, 35);
}

//each holds a sprite location
var catSprite = [];
catSprite[0] = {x: 0, y: 1}; //left
catSprite[1] = {x: 0, y: 41};
catSprite[2] = {x: 0, y: 81};
catSprite[3] = {x: 0, y: 121};
catSprite[4] = {x: 0, y: 161};
catSprite[5] = {x: 0, y: 201};
catSprite[6] = {x: 40, y: 1}; //right
catSprite[7] = {x: 40, y: 41};
catSprite[8] = {x: 40, y: 81};
catSprite[9] = {x: 40, y: 121};
catSprite[10] = {x: 40, y: 161};
catSprite[11] = {x: 40, y: 201};
catSprite[12] = {x: 80, y: 0};	//down
catSprite[13] = {x: 80, y: 40};
catSprite[14] = {x: 80, y: 80};
catSprite[15] = {x: 80, y: 120};
catSprite[16] = {x: 80, y: 160};
catSprite[17] = {x: 80, y: 200};
catSprite[18] = {x: 120, y: 0};	//up
catSprite[19] = {x: 120, y: 40};
catSprite[20] = {x: 120, y: 80};
catSprite[21] = {x: 120, y: 120};
catSprite[22] = {x: 120, y: 160};
catSprite[23] = {x: 120, y: 200};

