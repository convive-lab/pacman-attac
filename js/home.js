var HOME = false;

var HOME_PRESENTATION_TIMER = -1;
var HOME_PRESENTATION_STATE = 0;

var HOME_TRAILER_TIMER = -1;
var HOME_TRAILER_STATE = 0;

var PACMAN_TRAILER_CANVAS_CONTEXT = null;
var PACMAN_TRAILER_DIRECTION = 3;
var PACMAN_TRAILER_POSITION_X = 600;
var PACMAN_TRAILER_POSITION_Y = 25;
var PACMAN_TRAILER_POSITION_STEP = 3;
var PACMAN_TRAILER_MOUNTH_STATE = 3;
var PACMAN_TRAILER_MOUNTH_STATE_MAX = 6;
var PACMAN_TRAILER_SIZE = 12;

var GHOST_TRAILER_CANVAS_CONTEXT = null;
var GHOST_TRAILER_BODY_STATE_MAX = 8;
var GHOST_TRAILER_POSITION_STEP = 3;

var GHOST_1_TRAILER_POSITION_X = 1000;
var GHOST_1_TRAILER_POSITION_Y = 25;
var GHOST_1_TRAILER_DIRECTION = 3;
var GHOST_1_TRAILER_COLOR = "#ed1b24";
var GHOST_1_TRAILER_BODY_STATE = 0;
var GHOST_1_TRAILER_STATE = 0;

var GHOST_2_TRAILER_POSITION_X = 1035;
var GHOST_2_TRAILER_POSITION_Y = 25;
var GHOST_2_TRAILER_DIRECTION = 3;
var GHOST_2_TRAILER_COLOR = "#feaec9";
var GHOST_2_TRAILER_BODY_STATE = 1;
var GHOST_2_TRAILER_STATE = 0;

var GHOST_3_TRAILER_POSITION_X = 1070;
var GHOST_3_TRAILER_POSITION_Y = 25;
var GHOST_3_TRAILER_DIRECTION = 3;
var GHOST_3_TRAILER_COLOR = "#4adecb";
var GHOST_3_TRAILER_BODY_STATE = 2;
var GHOST_3_TRAILER_STATE = 0;

var GHOST_4_TRAILER_POSITION_X = 1105;
var GHOST_4_TRAILER_POSITION_Y = 25;
var GHOST_4_TRAILER_DIRECTION = 3;
var GHOST_4_TRAILER_COLOR = "#f99c00";
var GHOST_4_TRAILER_BODY_STATE = 3;
var GHOST_4_TRAILER_STATE = 0;

var GHOST_0_TRAILER_POSITION_X = 1140;
var GHOST_0_TRAILER_POSITION_Y = 25;
var GHOST_0_TRAILER_DIRECTION = 3;
var GHOST_0_TRAILER_COLOR = "#eb4188";
var GHOST_0_TRAILER_BODY_STATE = 4;
var GHOST_0_TRAILER_STATE = 0;

function initHome() {
	HOME = true;

	GAMEOVER = false;
	LOCK = false;
	PACMAN_DEAD = false;
	$("#engage-popup").hide();
	$("#game").removeClass("started");
	$("#panel").hide();
	$("#home").show();
	$("#home h3 em").append( " - " + new Date().getFullYear() );

	$('#help').fadeOut("slow");

	var ctx = null;
	var canvas = document.getElementById('canvas-home-title-pacman');
	canvas.setAttribute('width', '115');
	canvas.setAttribute('height', '100');
	if (canvas.getContext) {
		ctx = canvas.getContext('2d');
	}

	var x = 50;
	var y = 50;

	ctx.fillStyle = "#f9b200";
	ctx.beginPath();
	ctx.arc(x, y, 45, (0.35 - (3 * 0.05)) * Math.PI, (1.65 + (3 * 0.05)) * Math.PI, false);
	ctx.lineTo(x - 10, y);
	ctx.fill();
	ctx.closePath();

	x = 95;
	y = 50;

	ctx.fillStyle = "#dca5be";
	ctx.beginPath();
	ctx.arc(x, y, 10, 0, 2 * Math.PI, false);
	ctx.fill();
	ctx.closePath();



}
function drawPresentation(){
	$("#presentation").show();
	var ctx = null;
	var canvas = null;
	canvas = document.getElementById('canvas-presentation-0');
	canvas.setAttribute('width', '50');
	canvas.setAttribute('height', '50');
	if (canvas.getContext) {
		ctx = canvas.getContext('2d');
	}
	ctx.fillStyle = GHOST_1_COLOR;
	drawHelperGhost(ctx, 25, 25, 1, 0, 0, 0);

	canvas = document.getElementById('canvas-presentation-1');
	canvas.setAttribute('width', '50');
	canvas.setAttribute('height', '50');
	if (canvas.getContext) {
		ctx = canvas.getContext('2d');
	}
	ctx.fillStyle = GHOST_2_COLOR;
	drawHelperGhost(ctx, 25, 25, 1, 0, 0, 0);

	canvas = document.getElementById('canvas-presentation-3');
	canvas.setAttribute('width', '50');
	canvas.setAttribute('height', '50');
	if (canvas.getContext) {
		ctx = canvas.getContext('2d');
	}
	ctx.fillStyle = GHOST_3_COLOR;
	drawHelperGhost(ctx, 25, 25, 1, 0, 0, 0);

	canvas = document.getElementById('canvas-presentation-4');
	canvas.setAttribute('width', '50');
	canvas.setAttribute('height', '50');
	if (canvas.getContext) {
		ctx = canvas.getContext('2d');
	}
	ctx.fillStyle = GHOST_4_COLOR;

	drawHelperGhost(ctx, 25, 25, 1, 0, 0, 0);
	canvas = document.getElementById('canvas-presentation-2');
	canvas.setAttribute('width', '50');
	canvas.setAttribute('height', '50');
	if (canvas.getContext) {
		ctx = canvas.getContext('2d');
	}
	ctx.fillStyle = GHOST_0_COLOR;
	drawHelperGhost(ctx, 25, 25, 1, 0, 0, 0);
	startPresentation();
}
function startPresentation() {
	$("#presentation *").hide();

	if (HOME_PRESENTATION_TIMER === -1) {
		HOME_PRESENTATION_STATE = 0;
		HOME_PRESENTATION_TIMER = setInterval("nextSequencePresentation()", 200);
	}
}

function stopPresentation() {

	if (HOME_PRESENTATION_TIMER != -1) {
		$("#presentation *").hide();
		HOME_PRESENTATION_STATE = 0;
		clearInterval(HOME_PRESENTATION_TIMER);
		HOME_PRESENTATION_TIMER = -1;
	}
}
function nextSequencePresentation() {
	if (HOME_PRESENTATION_STATE === 0) {
		$("#presentation-titles").show();
	} else if (HOME_PRESENTATION_STATE === 2) {
		$("#canvas-presentation-3").show();
	} else if (HOME_PRESENTATION_STATE === 4) {
		$("#presentation-character-3").show();
	} else if (HOME_PRESENTATION_STATE === 5) {
		$("#presentation-name-3").show();
	} else if (HOME_PRESENTATION_STATE === 6) {
		$("#canvas-presentation-1").show();
	} else if (HOME_PRESENTATION_STATE === 8) {
		$("#presentation-character-1").show();
	} else if (HOME_PRESENTATION_STATE === 9) {
		$("#presentation-name-1").show();
	} else if (HOME_PRESENTATION_STATE === 10) {
		$("#canvas-presentation-0").show();
	} else if (HOME_PRESENTATION_STATE === 12) {
		$("#presentation-character-0").show();
	} else if (HOME_PRESENTATION_STATE === 13) {
		$("#presentation-name-0").show();
	} else if (HOME_PRESENTATION_STATE === 14) {
		$("#canvas-presentation-4").show();
	} else if (HOME_PRESENTATION_STATE === 16) {
		$("#presentation-character-4").show();
	} else if (HOME_PRESENTATION_STATE === 17) {
		$("#presentation-name-4").show();
	} else if (HOME_PRESENTATION_STATE === 18) {
		$("#canvas-presentation-2").show();
	} else if (HOME_PRESENTATION_STATE === 19) {
		$("#presentation-character-2").show();
	} else if (HOME_PRESENTATION_STATE === 20) {
		$("#presentation-name-2").show();
	}


	if (HOME_PRESENTATION_STATE === 20) {
		clearInterval(HOME_PRESENTATION_TIMER);
		HOME_PRESENTATION_TIMER = -1;

		startTrailer();
	} else {
		HOME_PRESENTATION_STATE ++;
	}
}

function startTrailer() {

	var canvas = document.getElementById('trailer');
	canvas.setAttribute('width', '500');
	canvas.setAttribute('height', '50');
	if (canvas.getContext) {
		PACMAN_TRAILER_CANVAS_CONTEXT = canvas.getContext('2d');
	}

	if (HOME_TRAILER_TIMER === -1) {
		HOME_TRAILER_STATE = 0;
		HOME_TRAILER_TIMER = setInterval("nextSequenceTrailer()", 20);
	}
}
function stopTrailer() {

	if (HOME_TRAILER_TIMER != -1) {
		$("#presentation *").hide();
		HOME_TRAILER_STATE = 0;
		clearInterval(HOME_TRAILER_TIMER);
		HOME_TRAILER_TIMER = -1;
	}
}
function nextSequenceTrailer() {

	erasePacmanTrailer();
	eraseGhostsTrailer();

	if (PACMAN_TRAILER_MOUNTH_STATE < PACMAN_TRAILER_MOUNTH_STATE_MAX) {
		PACMAN_TRAILER_MOUNTH_STATE ++;
	} else {
		PACMAN_TRAILER_MOUNTH_STATE = 0;
	}
	if ( PACMAN_TRAILER_DIRECTION === 1 ) {
		PACMAN_TRAILER_POSITION_X += PACMAN_TRAILER_POSITION_STEP;
	} else if ( PACMAN_TRAILER_DIRECTION === 3 ) {
		PACMAN_TRAILER_POSITION_X -= PACMAN_TRAILER_POSITION_STEP;
	}
	if ( PACMAN_TRAILER_POSITION_X < -650) {
		PACMAN_TRAILER_DIRECTION = 1;
		PACMAN_TRAILER_POSITION_STEP ++;
	}

	if (GHOST_1_TRAILER_BODY_STATE < GHOST_TRAILER_BODY_STATE_MAX) {
		GHOST_1_TRAILER_BODY_STATE ++;
	} else {
		GHOST_1_TRAILER_BODY_STATE = 0;
	}
	if (GHOST_2_TRAILER_BODY_STATE < GHOST_TRAILER_BODY_STATE_MAX) {
		GHOST_2_TRAILER_BODY_STATE ++;
	} else {
		GHOST_2_TRAILER_BODY_STATE = 0;
	}
	if (GHOST_3_TRAILER_BODY_STATE < GHOST_TRAILER_BODY_STATE_MAX) {
		GHOST_3_TRAILER_BODY_STATE ++;
	} else {
		GHOST_3_TRAILER_BODY_STATE = 0;
	}
	if (GHOST_4_TRAILER_BODY_STATE < GHOST_TRAILER_BODY_STATE_MAX) {
		GHOST_4_TRAILER_BODY_STATE ++;
	} else {
		GHOST_4_TRAILER_BODY_STATE = 0;
	}
	if (GHOST_0_TRAILER_BODY_STATE < GHOST_TRAILER_BODY_STATE_MAX) {
		GHOST_0_TRAILER_BODY_STATE ++;
	} else {
		GHOST_0_TRAILER_BODY_STATE = 0;
	}
	if ( GHOST_1_TRAILER_DIRECTION === 1 ) {
		GHOST_1_TRAILER_POSITION_X += GHOST_TRAILER_POSITION_STEP;
	} else if ( GHOST_1_TRAILER_DIRECTION === 3 ) {
		GHOST_1_TRAILER_POSITION_X -= GHOST_TRAILER_POSITION_STEP;
	}
	if ( GHOST_2_TRAILER_DIRECTION === 1 ) {
		GHOST_2_TRAILER_POSITION_X += GHOST_TRAILER_POSITION_STEP;
	} else if ( GHOST_2_TRAILER_DIRECTION === 3 ) {
		GHOST_2_TRAILER_POSITION_X -= GHOST_TRAILER_POSITION_STEP;
	}
	if ( GHOST_3_TRAILER_DIRECTION === 1 ) {
		GHOST_3_TRAILER_POSITION_X += GHOST_TRAILER_POSITION_STEP;
	} else if ( GHOST_3_TRAILER_DIRECTION === 3 ) {
		GHOST_3_TRAILER_POSITION_X -= GHOST_TRAILER_POSITION_STEP;
	}
	if ( GHOST_4_TRAILER_DIRECTION === 1 ) {
		GHOST_4_TRAILER_POSITION_X += GHOST_TRAILER_POSITION_STEP;
	} else if ( GHOST_4_TRAILER_DIRECTION === 3 ) {
		GHOST_4_TRAILER_POSITION_X -= GHOST_TRAILER_POSITION_STEP;
	}
	if ( GHOST_0_TRAILER_DIRECTION === 1 ) {
		GHOST_0_TRAILER_POSITION_X += GHOST_TRAILER_POSITION_STEP;
	} else if ( GHOST_0_TRAILER_DIRECTION === 3 ) {
		GHOST_0_TRAILER_POSITION_X -= GHOST_TRAILER_POSITION_STEP;
	}
	if ( GHOST_1_TRAILER_POSITION_X < -255) {
		GHOST_1_TRAILER_DIRECTION = 1;
		GHOST_1_TRAILER_STATE = 1;
	}
	if ( GHOST_2_TRAILER_POSITION_X < -220) {
		GHOST_2_TRAILER_DIRECTION = 1;
		GHOST_2_TRAILER_STATE = 1;
	}
	if ( GHOST_3_TRAILER_POSITION_X < -185) {
		GHOST_3_TRAILER_DIRECTION = 1;
		GHOST_3_TRAILER_STATE = 1;
	}
	if ( GHOST_4_TRAILER_POSITION_X < -150) {
		GHOST_4_TRAILER_DIRECTION = 1;
		GHOST_4_TRAILER_STATE = 1;
	}
	if ( GHOST_0_TRAILER_POSITION_X < -280) {
		GHOST_0_TRAILER_DIRECTION = 1;
		GHOST_0_TRAILER_STATE = 1;
	}
	drawPacmanTrailer();
	drawGhostsTrailer();

	if (HOME_TRAILER_STATE === 750) {
		clearInterval(HOME_TRAILER_TIMER);
		HOME_TRAILER_TIMER = -1;
	} else {
		HOME_TRAILER_STATE ++;
	}
}

function getGhostsTrailerCanevasContext() {
	return PACMAN_TRAILER_CANVAS_CONTEXT;
}
function drawGhostsTrailer() {
	var ctx = getGhostsTrailerCanevasContext();

	if (GHOST_1_TRAILER_STATE === 1) {
		ctx.fillStyle = GHOST_AFFRAID_COLOR;
	} else {
		ctx.fillStyle = GHOST_1_COLOR;
	}
	drawHelperGhost(ctx, GHOST_1_TRAILER_POSITION_X, GHOST_1_TRAILER_POSITION_Y, GHOST_1_TRAILER_DIRECTION, GHOST_1_TRAILER_BODY_STATE, GHOST_1_TRAILER_STATE, 0);

	if (GHOST_2_TRAILER_STATE === 1) {
		ctx.fillStyle = GHOST_AFFRAID_COLOR;
	} else {
		ctx.fillStyle = GHOST_2_COLOR;
	}
	drawHelperGhost(ctx, GHOST_2_TRAILER_POSITION_X, GHOST_2_TRAILER_POSITION_Y, GHOST_2_TRAILER_DIRECTION, GHOST_2_TRAILER_BODY_STATE, GHOST_2_TRAILER_STATE, 0);

	if (GHOST_3_TRAILER_STATE === 1) {
		ctx.fillStyle = GHOST_AFFRAID_COLOR;
	} else {
		ctx.fillStyle = GHOST_3_COLOR;
	}
	drawHelperGhost(ctx, GHOST_3_TRAILER_POSITION_X, GHOST_3_TRAILER_POSITION_Y, GHOST_3_TRAILER_DIRECTION, GHOST_3_TRAILER_BODY_STATE, GHOST_3_TRAILER_STATE, 0);

	if (GHOST_4_TRAILER_STATE === 1) {
		ctx.fillStyle = GHOST_AFFRAID_COLOR;
	} else {
		ctx.fillStyle = GHOST_4_COLOR;
	}
	drawHelperGhost(ctx, GHOST_4_TRAILER_POSITION_X, GHOST_4_TRAILER_POSITION_Y, GHOST_4_TRAILER_DIRECTION, GHOST_4_TRAILER_BODY_STATE, GHOST_4_TRAILER_STATE, 0);

	if (GHOST_0_TRAILER_STATE === 1) {
		ctx.fillStyle = GHOST_AFFRAID_COLOR;
	} else {
		ctx.fillStyle = GHOST_0_COLOR;
	}
	drawHelperGhost(ctx, GHOST_0_TRAILER_POSITION_X, GHOST_0_TRAILER_POSITION_Y, GHOST_0_TRAILER_DIRECTION, GHOST_0_TRAILER_BODY_STATE, GHOST_0_TRAILER_STATE, 0);
}
function eraseGhostsTrailer(ghost) {

	var ctx = getGhostsTrailerCanevasContext();

	ctx.clearRect(GHOST_1_TRAILER_POSITION_X - 17, GHOST_1_TRAILER_POSITION_Y - 17, 34, 34);
	ctx.clearRect(GHOST_2_TRAILER_POSITION_X - 17, GHOST_1_TRAILER_POSITION_Y - 17, 34, 34);
	ctx.clearRect(GHOST_3_TRAILER_POSITION_X - 17, GHOST_1_TRAILER_POSITION_Y - 17, 34, 34);
	ctx.clearRect(GHOST_4_TRAILER_POSITION_X - 17, GHOST_1_TRAILER_POSITION_Y - 17, 34, 34);
	ctx.clearRect(GHOST_0_TRAILER_POSITION_X - 17, GHOST_1_TRAILER_POSITION_Y - 17, 34, 34);
}

function getPacmanTrailerCanevasContext() {
	return PACMAN_TRAILER_CANVAS_CONTEXT;
}
function drawPacmanTrailer() {

	var ctx = getPacmanTrailerCanevasContext();

	ctx.fillStyle = "#f9b200";
	ctx.beginPath();

	var startAngle = 0;
	var endAngle = 2 * Math.PI;
	var lineToX = PACMAN_TRAILER_POSITION_X;
	var lineToY = PACMAN_TRAILER_POSITION_Y;
	if (PACMAN_TRAILER_DIRECTION === 1) {
		startAngle = (0.35 - (PACMAN_TRAILER_MOUNTH_STATE * 0.05)) * Math.PI;
		endAngle = (1.65 + (PACMAN_TRAILER_MOUNTH_STATE * 0.05)) * Math.PI;
		lineToX -= 8;
	} else if (PACMAN_TRAILER_DIRECTION === 2) {
		startAngle = (0.85 - (PACMAN_TRAILER_MOUNTH_STATE * 0.05)) * Math.PI;
		endAngle = (0.15 + (PACMAN_TRAILER_MOUNTH_STATE * 0.05)) * Math.PI;
		lineToY -= 8;
	} else if (PACMAN_TRAILER_DIRECTION === 3) {
		startAngle = (1.35 - (PACMAN_TRAILER_MOUNTH_STATE * 0.05)) * Math.PI;
		endAngle = (0.65 + (PACMAN_TRAILER_MOUNTH_STATE * 0.05)) * Math.PI;
		lineToX += 8;
	} else if (PACMAN_TRAILER_DIRECTION === 4) {
		startAngle = (1.85 - (PACMAN_TRAILER_MOUNTH_STATE * 0.05)) * Math.PI;
		endAngle = (1.15 + (PACMAN_TRAILER_MOUNTH_STATE * 0.05)) * Math.PI;
		lineToY += 8;
	}
	ctx.arc(PACMAN_TRAILER_POSITION_X, PACMAN_TRAILER_POSITION_Y, PACMAN_TRAILER_SIZE, startAngle, endAngle, false);
	ctx.lineTo(lineToX, lineToY);
	ctx.fill();
	ctx.closePath();
}
function erasePacmanTrailer() {

	var ctx = getPacmanTrailerCanevasContext();
	ctx.clearRect(PACMAN_TRAILER_POSITION_X - PACMAN_TRAILER_SIZE, PACMAN_TRAILER_POSITION_Y - PACMAN_TRAILER_SIZE, PACMAN_TRAILER_SIZE * 2, PACMAN_TRAILER_SIZE * 2);
}
$(document).ready(function() {
	function ag() {
		gtag('event', "activist-guide", {
		'event_category': "landingpage",
		});
	}
	var agEl = document.getElementById('activist-guide');
	agEl.onclick = ag;
	// function n() {
	// 	gtag('event', "newsletter", {
	// 	'event_category': "landingpage",
	// 	});
	// }
	// var nEl = document.getElementById('newsletter');
	// nEl.onclick = ag;
	// function s() {
	// 	gtag('event', "spenden", {
	// 	'event_category': "landingpage",
	// 	});
	// }
	// var sEl = document.getElementById('spenden');
	// sEl.onclick = s;
});
