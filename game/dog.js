// get reference to dog image
var dogSprites = new Image();
dogSprites.src = "../assets/dog.png";

// create the dog object with:
// 	health
var dog = {
	width: 70,
	height: 60,
	x: 30,
	y: house.topMold.height+house.wall.height+house.wallpaper.height+30,
	speed: 10,
	friction: 0.85,
	velX: 0,
	velY: 0,
	currFrame: 0,
	yFrame: null,
	yLastFrame: null,
	lastFrame: null,
	chasing: false
}

// function that takes current cat.x and cat.y
dog.chaseInit = function(catX, catY) {
	var targetX = catX - dog.x;
	var targetY = catY - dog.y;
	if (targetX > 0) {
		var startFrame = 0;
		dog.currFrame = startFrame;
		dog.lastFrame = 8;
	}
	else{
		var startFrame = 9;
		dog.currFrame = startFrame;
		dog.lastFrame = 17;
	}
	if (targetY < 0) {
		var yStartFrame = 18;
		dog.yFrame = yStartFrame;
		dog.yLastFrame = 26;
	}
	else{
		var yStartFrame = 27;
		dog.yFrame = yStartFrame;
		dog.yLastFrame = 35;
	}

	return {
		startFrame: startFrame,
		yStartFrame: yStartFrame,
		targetX: targetX,
		targetY: targetY
	}
};


var chaseData;
var	startFrame, yStartFrame;
var cX, cY;
var tX, tY;

dog.chase = function(catX, catY) {
	if(!dog.chasing){
		chaseData = dog.chaseInit(catX, catY);
		startFrame = chaseData.startFrame;
		yStartFrame = chaseData.yStartFrame;
		dog.chasing = true;
		cX = catX;
		cY = catY;
		tX = chaseData.targetX;
		tY = chaseData.targetY;
		requestAnimationFrame(dog.chase);
	}
	else{
		dog.velX *= dog.friction;
		dog.velY *= dog.friction;
//TO DO, CHECK FOR NEGATIVES SO THE DOG CAN RUN IN VELX VELY NEGATIVE VALUES
		if(tX > 0){
			if(dog.velX < dog.speed){
				dog.velX++;
			}
		}
		else{
			if (dog.velX > -dog.speed) {
				dog.velX--;
			}
		}

		if (tY > 0) {
			if (dog.velY < dog.speed) {
				dog.velY++;
			}
		}
		else{
			if (dog.velY > -dog.speed) {
				dog.velY--;
			}
		}

		if (Math.abs(cX - dog.x) - dog.width/5 > 0) {
			dog.x += dog.velX;
			if(tick % 2 ===0){
				dog.currFrame++;
				if (dog.currFrame > dog.lastFrame) {
					dog.currFrame = startFrame;
				}
			}
			requestAnimationFrame(dog.chase);
		}
		else if (Math.abs(cY - dog.y) - dog.height/5 > 0) {
			dog.y += dog.velY;
			if(tick % 2 === 0){
				dog.currFrame++;
				if (dog.currFrame < yStartFrame || dog.currFrame > dog.yLastFrame) {
					dog.currFrame = yStartFrame;
				}
			}
			requestAnimationFrame(dog.chase);
		}
		else{
			dog.currFrame = startFrame;
			cancelAnimationFrame(dog.chase);
			dog.chasing = false;
		}
	}
};
var wait = -1;
dog.AI = function(){
	wait++;
	if (wait % 100 === 0 && !dog.chasing) {
		dog.chase(cat.x, cat.y);
	}
};

//dog idle function with appro anims

// a drawing function
dog.draw = function() {
	ctx.drawImage(dogSprites,
		dogAnim[dog.currFrame].x, dogAnim[dog.currFrame].y, dog.width, dog.height,
		dog.x, dog.y, dog.width, dog.height);
};

// an array with each sprite frame
var dogAnim = [];
dogAnim[0] = {x: 0, y: 0}; //right
dogAnim[1] = {x: 70, y: 0};
dogAnim[2] = {x: 140, y: 0};
dogAnim[3] = {x: 210, y: 0};
dogAnim[4] = {x: 280, y: 0};
dogAnim[5] = {x: 350, y: 0};
dogAnim[6] = {x: 420, y: 0};
dogAnim[7] = {x: 490, y: 0};
dogAnim[8] = {x: 560, y: 0};
dogAnim[9] = {x: 0, y: 60}; //left
dogAnim[10] = {x: 70, y: 60};
dogAnim[11] = {x: 140, y: 60};
dogAnim[12] = {x: 210, y: 60};
dogAnim[13] = {x: 280, y: 60};
dogAnim[14] = {x: 350, y: 60};
dogAnim[15] = {x: 420, y: 60};
dogAnim[16] = {x: 490, y: 60};
dogAnim[17] = {x: 560, y: 60};
dogAnim[18] = {x: 0, y: 120}; //up
dogAnim[19] = {x: 70, y: 120};
dogAnim[20] = {x: 140, y: 120};
dogAnim[21] = {x: 210, y: 120};
dogAnim[22] = {x: 280, y: 120};
dogAnim[23] = {x: 350, y: 120};
dogAnim[24] = {x: 420, y: 120};
dogAnim[25] = {x: 490, y: 120};
dogAnim[26] = {x: 560, y: 120};
dogAnim[27] = {x: 0, y: 180}; //down
dogAnim[28] = {x: 70, y: 180};
dogAnim[29] = {x: 140, y: 180};
dogAnim[30] = {x: 210, y: 180};
dogAnim[31] = {x: 280, y: 180};
dogAnim[32] = {x: 350, y: 180};
dogAnim[33] = {x: 420, y: 180};
dogAnim[34] = {x: 490, y: 180};
dogAnim[35] = {x: 560, y: 180};
