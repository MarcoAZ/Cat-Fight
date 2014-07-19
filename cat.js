var catImage = new Image();
catImage.src = "catRun.png";

var tick = 0;

var cat = {
	x: 350,
	y: 350,
	speed: 5,
	friction: 0.7,
	velX: 0,
	velY: 0,
	leapTopSpeed: 6,
	leapDeltaV: 0,
	width: 37,
	height: 31,
	walkFrame: 0,
	falling: false,
	jumping: false,
	yJumpLoc: null,
	facing: "left"
}

cat.move = function() {
	tick++; //for sprite changing
	//keyboard events
	if(keys[37]){
		cat.facing = "left";
		if(cat.velX > -cat.speed){
			cat.velX--;
		}
		if (tick % 3 === 0){
			if(!cat.jumping && !cat.falling){
				cat.walkFrame++;
				if (cat.walkFrame > 5) {
					cat.walkFrame = 0;
				}
			}
		}
	}
	if(keys[39]){
		cat.facing = "right";
		if(cat.velX < cat.speed){
			cat.velX++;
		}
		if (tick % 3 === 0){
			if(!cat.jumping && !cat.falling){
				cat.walkFrame++;
				if (cat.walkFrame < 6 || cat.walkFrame > 11) {
					cat.walkFrame = 6;
				}
			}
		}
	}    	
	if(!cat.jumping && !cat.falling){
		if(keys[38]){ //up
			if(cat.velY > -cat.speed){
				cat.velY--;
			}
		}
		if(keys[40]){ //down
			if(cat.velY < cat.speed){
				cat.velY++;
			}
			if (tick % 3 === 0){
				cat.walkFrame = cat.walkFrame === 16 ? 17 : 16;
			}
		}

		if(keys[32]){ //spacebar
			if(!cat.jumping){
				cat.jumping = true;
				cat.yJumpLoc = cat.y;
			}
			if (cat.facing === "left"){
				cat.walkFrame = 12;
			}
			else{
				cat.walkFrame = 15;
			}
		}
	}
	
	//the actual movement animation
	cat.velX *= cat.friction;
	cat.velY *= cat.friction;

	if(cat.jumping){
		if(cat.leapDeltaV < cat.leapTopSpeed){
			cat.leapDeltaV++;
		}
		else{
			cat.jumping = false;
			cat.falling = true;
		}

	}
	else if(cat.y < cat.yJumpLoc){
		cat.leapDeltaV--;
	}
	else{
		cat.yJumpLoc = null;
		cat.leapDeltaV = 0;
		cat.falling = false;
	}
	//console.log(cat.leapDeltaV, cat.y, cat.yJumpLoc);
	cat.x += cat.velX;
	cat.y += cat.velY; 
	cat.y -= cat.leapDeltaV;

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


/*******
old jump/fall animations
cat.jump = function() {
	if (cat.timesMoved < 5){
		if(tick % 3 === 0){
			cat.timesMoved++;
			cat.y -= 10;
			if (cat.facing === "left"){
				cat.x -= 5;
			}
			else {
				cat.x += 5;
			}
		}
	}
	else{
		cat.jumping = false;
		cat.timesMoved = 0;
		cat.falling = true;
		if (cat.facing === "left"){
			cat.walkFrame = 13;
		}
		else{
			cat.walkFrame = 14;
		}
	}

}

cat.fall = function() {
	if (cat.timesMoved < 5){
		if (tick % 3 ===0){
			cat.timesMoved++;
			cat.y += 10;
		}
	}
	else{
		cat.falling = false;
		if (cat.facing === "left"){
			cat.walkFrame = 0;
		}
		else{
			cat.walkFrame = 6;
		}
	}
	
}
******/

cat.draw = function() {
	ctx.drawImage(catImage,
		catSprite[cat.walkFrame].x, catSprite[cat.walkFrame].y, cat.width, cat.height,
		cat.x, cat.y, cat.width, cat.height);
}

var catSprite = []
catSprite[0] = {x: 3, y: 34};
catSprite[1] = {x: 47, y: 33};
catSprite[2] = {x: 89, y: 33};
catSprite[3] = {x: 133, y: 33};
catSprite[4] = {x: 176, y: 33};
catSprite[5] = {x: 220, y: 33};
catSprite[6] = {x: 4, y: 107};
catSprite[7] = {x: 48, y: 107};
catSprite[8] = {x: 90, y: 107};
catSprite[9] = {x: 134, y: 107};
catSprite[10] = {x: 176, y: 107};
catSprite[11] = {x: 220, y: 107};
catSprite[12] = {x: 7, y: 67};	//jump left
catSprite[13] = {x: 51, y: 67}; //fall left
catSprite[14] = {x: 5, y: 143}; //fall right
catSprite[15] = {x: 49, y: 141}; //jump right
catSprite[16] = {x: 91, y: 141}; //down
catSprite[17] = {x: 130, y: 141}; //down2
