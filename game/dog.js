/*get reference to dog image

create the dog object with:
	width
	height (doubles for the size on canvas and sprite sheet size)
	health
	x and y position
	speed and friction (maybe a global value for everything?)
	velocities
	current frame

//function that takes current cat.x
	if catx is less than dogx
		get difference and move(run)/subtract from dog.y
	else add the difference

//similar function with cat.y param
	if cat.y is less than dog.y
		get difference and run/subtract from dog.y
	else add the difference

(both of these will be called by the cat.move function?)