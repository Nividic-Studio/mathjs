

Math.distance = function(a,b){
	return 123;
}

Math.clamp = function (num, min, max) {
	return Math.min(Math.max(num, min), max);
}

Math.gradient = function (min, max, gradient = 0, sigma = .2) {
	var pi = Math.PI;
	var y = Math.random() * 1.0 / Math.sqrt(2 * pi * sigma * sigma);
	var h = Math.sqrt(Math.log(y * Math.sqrt(2 * pi * sigma * sigma)) * (-4 * sigma * sigma)); // lol! 

	// Valeurs générés au dessus de la valeur max
	var spread = h * ((max + gradient) - max);

	var maxWithSpread = max + spread;
	var minWithSpread = min - spread;

	return Math.random() * (maxWithSpread - minWithSpread) + minWithSpread;
}

Math.rand = function (min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

Math.pileOuFace = function () {
	return Math.random() > .5 ? -1 : 1;
}

Math.deg2rad = function (deg) {
	return deg * (Math.PI / 180);
}

Math.rad2deg = function (rad) {
	return rad / (Math.PI / 180);
}

/*------------------------------------------------------------------------------
Retourne l'image d'un point par une rotation (repère X de gauche à droite, Y du
haut vers le bas).
ENTREE :
	M        Point à transformer
	O        Point centre de la rotation
	angle    Angle (en degrés)
SORTIE :
	Image de M par la rotation d'angle angle autour de O (les coordonnées ne
	sont pas entières).
------------------------------------------------------------------------------*/
Math.rotate = function (M, O, angle) {
	var xM, yM, x, y;
	angle *= Math.PI / 180;
	xM = M.x - O.x;
	yM = M.y - O.y;
	x = xM * Math.cos(angle) + yM * Math.sin(angle) + O.x;
	y = - xM * Math.sin(angle) + yM * Math.cos(angle) + O.y;

	return {
		x: x,
		y: y
	};
}

Math.getAngleWithTwoPoints = function (point1, point2, rad = false) {
	let angle = (Math.atan((point2.y - point1.y) / (point2.x - point1.x)));

	if (point1.x > point2.x) {
		// console.log('aa')
		// angle += Math.PI/2 - angle;
	}


	if (rad)
		return angle

	return Math.rad2deg(angle);
}

Math.distance = function (point1, point2, rounded = false) {
	let distance = Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));

	if (rounded)
		return Math.round(distance);

	return distance;
}

Math.pointToLineDistance = function (x, y, x1, y1, x2, y2) {
	const A = x - x1;
	const B = y - y1;
	const C = x2 - x1;
	const D = y2 - y1;

	const dot = A * C + B * D;
	const lenSq = C * C + D * D;
	let param = -1;

	if (lenSq !== 0) // to avoid division by 0
		param = dot / lenSq;

	let xx, yy;

	if (param < 0) {
		xx = x1;
		yy = y1;
	}
	else if (param > 1) {
		xx = x2;
		yy = y2;
	}
	else {
		xx = x1 + param * C;
		yy = y1 + param * D;
	}

	const dx = x - xx;
	const dy = y - yy;

	return Math.sqrt(dx * dx + dy * dy);
}

Math.getRandomFromArray = function (arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}

Math.isInCircle = function (point, circleCenter, radius) {
	// Calcul de la distance entre le point et le cercle
	const distance = Math.sqrt((point.x - circleCenter.x) ** 2 + (point.y - circleCenter.y) ** 2);
	// console.log(distance);

	// Vérification de la collision
	// console.log(distance, radius);
	if (distance < radius) {
		return true; // Collision détectée
	} else {
		return false; // Pas de collision
	}
}

Math.generateRandomCoordinatesInCircle = function (radius) {
	// Générer un angle aléatoire entre 0 et 2 * π (radians)
	const angle = Math.random() * 2 * Math.PI;

	// Générer une distance aléatoire (rayon) entre 0 et le rayon donné
	const distance = Math.random() * radius;

	// Calculer les coordonnées x et y en utilisant la formule de la distance polaire
	const x = distance * Math.cos(angle);
	const y = distance * Math.sin(angle);

	return { x, y };
}


function getRandomColor() {
	const letters = "0123456789ABCDEF";
	let color = "0x";

	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}

	return parseInt(color, 16);
}





