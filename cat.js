var catImage = new Image();
catImage.src = "catRun.png";

var tick = 0;

var cat = {
	x: 350,
	y: 350,
	dx: 5,
	width: 37,
	height: 31,
	walkFrame: 0,
	jumping: false,
	falling: false,
	timesMoved: 0,
	facing: "left"
}

cat.move = function(button) {
	tick++;
	if(!cat.jumping){
		if(!cat.falling){
			switch(button){
				case 37: //left
					cat.facing = "left";
					cat.x -= cat.dx;
					if (tick % 3 === 0){
						cat.walkFrame++;
						if (cat.walkFrame > 5) {
							cat.walkFrame = 0;
						};
					}
				break;

				case 39: //right
					cat.facing = "right";
					cat.x += cat.dx;
					if (tick % 3 === 0){
						cat.walkFrame++;
						if (cat.walkFrame < 6 || cat.walkFrame > 11) {
							cat.walkFrame = 6;
						}
					}    	
				break;

				case 38: //up
					cat.y -= cat.dx;
				break;

				case 40: //down
					cat.y +=cat.dx;
				break;

				case 32: //spacebar
					cat.jumping = true;
					if (cat.facing === "left"){
						cat.walkFrame = 12;
					}
					else{
						cat.walkFrame = 15;
					}
					cat.timesMoved = 0;
				break;

				default:
					//nothing
				break;
			}
		}
		else{
			cat.fall();
		}
	}
	else{
		cat.jump();
	}
}

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
