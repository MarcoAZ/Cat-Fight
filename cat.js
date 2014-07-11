var catImage = new Image();
catImage.src = "catRun.png";

var tick = 0;

var cat = {
	x: 350,
	y: 350,
	dx: 5,
	width: 37,
	height: 31,
	walkFrame: 0
}

cat.move = function(button) {
	tick++;
	switch(button){
    case 37:
    	cat.x -= cat.dx;
    	if (tick % 3 === 0){
    		cat.walkFrame++;
    		if (cat.walkFrame > 5) {
    			cat.walkFrame = 0;
    		};
    	}
    break;

    case 39:
    	cat.x += cat.dx;
    	if (tick % 3 === 0){
    		cat.walkFrame++;
    		if (cat.walkFrame < 6 || cat.walkFrame > 11) {
    			cat.walkFrame = 6;
    		};
    	}    	
	break;

	case 38:
		cat.y -= cat.dx;
	break;

	case 40:
		cat.y +=cat.dx;
	break;
	default:
	console.log(button);
	break;
	}
}

cat.jump = function() {

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