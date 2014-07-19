var catImage = new Image();
catImage.src = "catRun.png";

var spriteTicks = 0; //to make animation look smooth

var cat = {
	x: 350,
	y: 350,
	dx: 5,
	width: 37,
	height: 31,
	walkFrame: 0,
	direction: "left",
	jumping: false,
	falling: false
}

cat.move = function(button) {
	button = button || undefined;

	spriteTicks++;

	if (button != undefined) {

	switch(button){
    case 37:
    	cat.direction = "left";
    	cat.x -= cat.dx;
    	if (cat.walkFrame === 0 || cat.walkFrame > 5) {
			cat.walkFrame = 5;
		}

    break;

    case 39:
    	cat.direction = "right";
    	cat.x += cat.dx;
		if (cat.walkFrame <= 6 || cat.walkFrame > 11) {
			cat.walkFrame = 11;
		}
	break;

	case 38:
		cat.y -= cat.dx;
	break;

	case 40:
		cat.y +=cat.dx;
	break;

	case 32:
		cat.jumping = true;
		cat.jump();
	break

	default:
	//nothing
	break;
		}

	}
	// else{
		
	// 	if (spriteTicks % 5 === 0) {
	// 		if (cat.jumping && cat.direction === "left") {
	// 			cat.walkFrame = 12;
	// 		}
	// 		if (cat.direction === "left") {
	// 			cat.walkFrame = cat.walkFrame > 0 ? cat.walkFrame - 1 : 0;
	// 		}
	// 		else if(cat.direction === "right"){
	// 			cat.walkFrame = cat.walkFrame > 6 ? cat.walkFrame - 1 : 6;
	// 		}
	// 	}

	// }
}

cat.jump = function() {
	cat.y -= 15;
	setTimeout(function() {cat.jumping = false}, 200);
}

cat.fall = function() {

}

cat.draw = function() {
	// var currSprite;
	// if (cat.jumping && cat.direction === "left") {
	// 	currSprite = 12;
	// }
	// else{
	// 	currSprite = cat.walkFrame;
	// }
	if (spriteTicks % 5 === 0) {
		if (cat.jumping && cat.direction === "left") {
			cat.walkFrame = 12;
		}
		else if (cat.direction === "left") {
			cat.walkFrame = cat.walkFrame > 0 ? cat.walkFrame - 1 : 0;
		}
		else if(cat.direction === "right"){
			cat.walkFrame = cat.walkFrame > 6 ? cat.walkFrame - 1 : 6;
		}
	}


	ctx.drawImage(catImage,
		catSprite[cat.walkFrame].x, catSprite[cat.walkFrame].y, cat.width, cat.height,
		cat.x, cat.y, cat.width, cat.height);
}

var catSprite = []
catSprite[4] = {x: 3, y: 34}; //left
catSprite[5] = {x: 47, y: 33};
catSprite[0] = {x: 89, y: 33};
catSprite[1] = {x: 133, y: 33};
catSprite[2] = {x: 176, y: 33};
catSprite[3] = {x: 220, y: 33};

catSprite[6] = {x: 4, y: 107}; //right
catSprite[7] = {x: 48, y: 107};
catSprite[8] = {x: 90, y: 107};
catSprite[9] = {x: 134, y: 107};
catSprite[10] = {x: 176, y: 107};
catSprite[11] = {x: 220, y: 107};

catSprite[12] = {x: 6, y: 67}; //jump dir left