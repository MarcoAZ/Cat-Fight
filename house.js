var sprite = new Image();
sprite.src = "castle_2.png";

var house = {
	topMold: {spriteX: 1, spriteY: 43, width: 94, height: 21,
		draw: function() {
			for (var i = 0; i < width; i += house.topMold.width) {
				ctx.drawImage(sprite,
					house.topMold.spriteX, house.topMold.spriteY, house.topMold.width,house.topMold.height,
					i, 0, house.topMold.width, house.topMold.height);
			}
		}
	},

	wallpaper: {spriteX: 2, spriteY: 64, width: 92, height: 32,
		draw: function() {
			for (var i = 0; i < width; i += house.wallpaper.width) {
				ctx.drawImage(sprite,
					house.wallpaper.spriteX, house.wallpaper.spriteY, house.wallpaper.width,house.wallpaper.height,
					i, house.topMold.height, house.wallpaper.width, house.wallpaper.height);
			}
		}
	},

	wall: {spriteX: 2, spriteY: 64, width: 92, height: 64,
		draw: function() {
			for (var i = 0; i < width; i += house.wall.width) {
				ctx.drawImage(sprite,
					house.wall.spriteX, house.wall.spriteY, house.wall.width,house.wall.height,
					i, house.topMold.height + house.wallpaper.height, house.wall.width, house.wall.height);
			}
		}
	},

	floor: {spriteX: 96, spriteY: 0, width: 32, height: 32,
		draw: function() {
			for (var i = 0, j = house.topMold.height+house.wall.height+house.wallpaper.height; j < height; i += house.floor.width) {
				if (i >= width) {
					i = 0;
					j += house.floor.height;
				}

				ctx.drawImage(sprite,
					house.floor.spriteX, house.floor.spriteY, house.floor.width, house.floor.height, 
					i, j, house.floor.width, house.floor.height);							 
			}
		}
	},

	draw: function() {
		house.floor.draw();
		house.wall.draw();
		house.wallpaper.draw();
		house.topMold.draw();
	}
}

var bedroom = {
	bed: {spriteX: 96, spriteY: 224, width: 64, height: 96,
		draw: function() {
			ctx.drawImage(sprite,
				bedroom.bed.spriteX, bedroom.bed.spriteY, bedroom.bed.width, bedroom.bed.height,
				175, house.topMold.height + house.wallpaper.height + 30, bedroom.bed.width, bedroom.bed.height);
		}
	},

	painting: {spriteX: 168, spriteY: 328, width: 80, height: 24,
		draw: function() {
			ctx.drawImage(sprite,
				bedroom.painting.spriteX, bedroom.painting.spriteY, bedroom.painting.width, bedroom.painting.height,
				167, house.topMold.height + house.wallpaper.height-10, bedroom.painting.width, bedroom.painting.height);
		}
	},

	draw: function() {
		house.draw();
		bedroom.painting.draw();
		bedroom.bed.draw();
	}
}
