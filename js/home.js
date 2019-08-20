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

var GHOST_SPO_TRAILER_POSITION_X = 1000;
var GHOST_SPO_TRAILER_POSITION_Y = 25;
var GHOST_SPO_TRAILER_DIRECTION = 3;
var GHOST_SPO_TRAILER_COLOR = "#ed1b24";
var GHOST_SPO_TRAILER_BODY_STATE = 0;
var GHOST_SPO_TRAILER_STATE = 0;

var GHOST_FPO_TRAILER_POSITION_X = 1035;
var GHOST_FPO_TRAILER_POSITION_Y = 25;
var GHOST_FPO_TRAILER_DIRECTION = 3;
var GHOST_FPO_TRAILER_COLOR = "#feaec9";
var GHOST_FPO_TRAILER_BODY_STATE = 1;
var GHOST_FPO_TRAILER_STATE = 0;

var GHOST_OVP_TRAILER_POSITION_X = 1070;
var GHOST_OVP_TRAILER_POSITION_Y = 25;
var GHOST_OVP_TRAILER_DIRECTION = 3;
var GHOST_OVP_TRAILER_COLOR = "#4adecb";
var GHOST_OVP_TRAILER_BODY_STATE = 2;
var GHOST_OVP_TRAILER_STATE = 0;

var GHOST_GRUNE_TRAILER_POSITION_X = 1105;
var GHOST_GRUNE_TRAILER_POSITION_Y = 25;
var GHOST_GRUNE_TRAILER_DIRECTION = 3;
var GHOST_GRUNE_TRAILER_COLOR = "#f99c00";
var GHOST_GRUNE_TRAILER_BODY_STATE = 3;
var GHOST_GRUNE_TRAILER_STATE = 0;

var GHOST_NEOS_TRAILER_POSITION_X = 1140;
var GHOST_NEOS_TRAILER_POSITION_Y = 25;
var GHOST_NEOS_TRAILER_DIRECTION = 3;
var GHOST_NEOS_TRAILER_COLOR = "#eb4188";
var GHOST_NEOS_TRAILER_BODY_STATE = 4;
var GHOST_NEOS_TRAILER_STATE = 0;

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

	canvas = document.getElementById('canvas-presentation-spo');
	canvas.setAttribute('width', '50');
	canvas.setAttribute('height', '50');
	if (canvas.getContext) {
		ctx = canvas.getContext('2d');
	}
	ctx.fillStyle = GHOST_SPO_COLOR;
	drawHelperGhost(ctx, 25, 25, 1, 0, 0, 0);

	canvas = document.getElementById('canvas-presentation-fpo');
	canvas.setAttribute('width', '50');
	canvas.setAttribute('height', '50');
	if (canvas.getContext) {
		ctx = canvas.getContext('2d');
	}
	ctx.fillStyle = GHOST_FPO_COLOR;
	drawHelperGhost(ctx, 25, 25, 1, 0, 0, 0);

	canvas = document.getElementById('canvas-presentation-ovp');
	canvas.setAttribute('width', '50');
	canvas.setAttribute('height', '50');
	if (canvas.getContext) {
		ctx = canvas.getContext('2d');
	}
	ctx.fillStyle = GHOST_OVP_COLOR;
	drawHelperGhost(ctx, 25, 25, 1, 0, 0, 0);

	canvas = document.getElementById('canvas-presentation-grune');
	canvas.setAttribute('width', '50');
	canvas.setAttribute('height', '50');
	if (canvas.getContext) {
		ctx = canvas.getContext('2d');
	}
	ctx.fillStyle = GHOST_GRUNE_COLOR;

	drawHelperGhost(ctx, 25, 25, 1, 0, 0, 0);
	canvas = document.getElementById('canvas-presentation-neos');
	canvas.setAttribute('width', '50');
	canvas.setAttribute('height', '50');
	if (canvas.getContext) {
		ctx = canvas.getContext('2d');
	}
	ctx.fillStyle = GHOST_NEOS_COLOR;
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
		$("#canvas-presentation-ovp").show();
	} else if (HOME_PRESENTATION_STATE === 4) {
		$("#presentation-character-ovp").show();
	} else if (HOME_PRESENTATION_STATE === 5) {
		$("#presentation-name-ovp").show();
	} else if (HOME_PRESENTATION_STATE === 6) {
		$("#canvas-presentation-fpo").show();
	} else if (HOME_PRESENTATION_STATE === 8) {
		$("#presentation-character-fpo").show();
	} else if (HOME_PRESENTATION_STATE === 9) {
		$("#presentation-name-fpo").show();
	} else if (HOME_PRESENTATION_STATE === 10) {
		$("#canvas-presentation-spo").show();
	} else if (HOME_PRESENTATION_STATE === 12) {
		$("#presentation-character-spo").show();
	} else if (HOME_PRESENTATION_STATE === 13) {
		$("#presentation-name-spo").show();
	} else if (HOME_PRESENTATION_STATE === 14) {
		$("#canvas-presentation-grune").show();
	} else if (HOME_PRESENTATION_STATE === 16) {
		$("#presentation-character-grune").show();
	} else if (HOME_PRESENTATION_STATE === 17) {
		$("#presentation-name-grune").show();
	} else if (HOME_PRESENTATION_STATE === 18) {
		$("#canvas-presentation-neos").show();
	} else if (HOME_PRESENTATION_STATE === 19) {
		$("#presentation-character-neos").show();
	} else if (HOME_PRESENTATION_STATE === 20) {
		$("#presentation-name-neos").show();
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

	if (GHOST_SPO_TRAILER_BODY_STATE < GHOST_TRAILER_BODY_STATE_MAX) {
		GHOST_SPO_TRAILER_BODY_STATE ++;
	} else {
		GHOST_SPO_TRAILER_BODY_STATE = 0;
	}
	if (GHOST_FPO_TRAILER_BODY_STATE < GHOST_TRAILER_BODY_STATE_MAX) {
		GHOST_FPO_TRAILER_BODY_STATE ++;
	} else {
		GHOST_FPO_TRAILER_BODY_STATE = 0;
	}
	if (GHOST_OVP_TRAILER_BODY_STATE < GHOST_TRAILER_BODY_STATE_MAX) {
		GHOST_OVP_TRAILER_BODY_STATE ++;
	} else {
		GHOST_OVP_TRAILER_BODY_STATE = 0;
	}
	if (GHOST_GRUNE_TRAILER_BODY_STATE < GHOST_TRAILER_BODY_STATE_MAX) {
		GHOST_GRUNE_TRAILER_BODY_STATE ++;
	} else {
		GHOST_GRUNE_TRAILER_BODY_STATE = 0;
	}
	if (GHOST_NEOS_TRAILER_BODY_STATE < GHOST_TRAILER_BODY_STATE_MAX) {
		GHOST_NEOS_TRAILER_BODY_STATE ++;
	} else {
		GHOST_NEOS_TRAILER_BODY_STATE = 0;
	}
	if ( GHOST_SPO_TRAILER_DIRECTION === 1 ) {
		GHOST_SPO_TRAILER_POSITION_X += GHOST_TRAILER_POSITION_STEP;
	} else if ( GHOST_SPO_TRAILER_DIRECTION === 3 ) {
		GHOST_SPO_TRAILER_POSITION_X -= GHOST_TRAILER_POSITION_STEP;
	}
	if ( GHOST_FPO_TRAILER_DIRECTION === 1 ) {
		GHOST_FPO_TRAILER_POSITION_X += GHOST_TRAILER_POSITION_STEP;
	} else if ( GHOST_FPO_TRAILER_DIRECTION === 3 ) {
		GHOST_FPO_TRAILER_POSITION_X -= GHOST_TRAILER_POSITION_STEP;
	}
	if ( GHOST_OVP_TRAILER_DIRECTION === 1 ) {
		GHOST_OVP_TRAILER_POSITION_X += GHOST_TRAILER_POSITION_STEP;
	} else if ( GHOST_OVP_TRAILER_DIRECTION === 3 ) {
		GHOST_OVP_TRAILER_POSITION_X -= GHOST_TRAILER_POSITION_STEP;
	}
	if ( GHOST_GRUNE_TRAILER_DIRECTION === 1 ) {
		GHOST_GRUNE_TRAILER_POSITION_X += GHOST_TRAILER_POSITION_STEP;
	} else if ( GHOST_GRUNE_TRAILER_DIRECTION === 3 ) {
		GHOST_GRUNE_TRAILER_POSITION_X -= GHOST_TRAILER_POSITION_STEP;
	}
	if ( GHOST_NEOS_TRAILER_DIRECTION === 1 ) {
		GHOST_NEOS_TRAILER_POSITION_X += GHOST_TRAILER_POSITION_STEP;
	} else if ( GHOST_NEOS_TRAILER_DIRECTION === 3 ) {
		GHOST_NEOS_TRAILER_POSITION_X -= GHOST_TRAILER_POSITION_STEP;
	}
	if ( GHOST_SPO_TRAILER_POSITION_X < -255) {
		GHOST_SPO_TRAILER_DIRECTION = 1;
		GHOST_SPO_TRAILER_STATE = 1;
	}
	if ( GHOST_FPO_TRAILER_POSITION_X < -220) {
		GHOST_FPO_TRAILER_DIRECTION = 1;
		GHOST_FPO_TRAILER_STATE = 1;
	}
	if ( GHOST_OVP_TRAILER_POSITION_X < -185) {
		GHOST_OVP_TRAILER_DIRECTION = 1;
		GHOST_OVP_TRAILER_STATE = 1;
	}
	if ( GHOST_GRUNE_TRAILER_POSITION_X < -150) {
		GHOST_GRUNE_TRAILER_DIRECTION = 1;
		GHOST_GRUNE_TRAILER_STATE = 1;
	}
	if ( GHOST_NEOS_TRAILER_POSITION_X < -280) {
		GHOST_NEOS_TRAILER_DIRECTION = 1;
		GHOST_NEOS_TRAILER_STATE = 1;
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

	if (GHOST_SPO_TRAILER_STATE === 1) {
		ctx.fillStyle = GHOST_AFFRAID_COLOR;
	} else {
		ctx.fillStyle = GHOST_SPO_COLOR;
	}
	drawHelperGhost(ctx, GHOST_SPO_TRAILER_POSITION_X, GHOST_SPO_TRAILER_POSITION_Y, GHOST_SPO_TRAILER_DIRECTION, GHOST_SPO_TRAILER_BODY_STATE, GHOST_SPO_TRAILER_STATE, 0);

	if (GHOST_FPO_TRAILER_STATE === 1) {
		ctx.fillStyle = GHOST_AFFRAID_COLOR;
	} else {
		ctx.fillStyle = GHOST_FPO_COLOR;
	}
	drawHelperGhost(ctx, GHOST_FPO_TRAILER_POSITION_X, GHOST_FPO_TRAILER_POSITION_Y, GHOST_FPO_TRAILER_DIRECTION, GHOST_FPO_TRAILER_BODY_STATE, GHOST_FPO_TRAILER_STATE, 0);

	if (GHOST_OVP_TRAILER_STATE === 1) {
		ctx.fillStyle = GHOST_AFFRAID_COLOR;
	} else {
		ctx.fillStyle = GHOST_OVP_COLOR;
	}
	drawHelperGhost(ctx, GHOST_OVP_TRAILER_POSITION_X, GHOST_OVP_TRAILER_POSITION_Y, GHOST_OVP_TRAILER_DIRECTION, GHOST_OVP_TRAILER_BODY_STATE, GHOST_OVP_TRAILER_STATE, 0);

	if (GHOST_GRUNE_TRAILER_STATE === 1) {
		ctx.fillStyle = GHOST_AFFRAID_COLOR;
	} else {
		ctx.fillStyle = GHOST_GRUNE_COLOR;
	}
	drawHelperGhost(ctx, GHOST_GRUNE_TRAILER_POSITION_X, GHOST_GRUNE_TRAILER_POSITION_Y, GHOST_GRUNE_TRAILER_DIRECTION, GHOST_GRUNE_TRAILER_BODY_STATE, GHOST_GRUNE_TRAILER_STATE, 0);

	if (GHOST_NEOS_TRAILER_STATE === 1) {
		ctx.fillStyle = GHOST_AFFRAID_COLOR;
	} else {
		ctx.fillStyle = GHOST_NEOS_COLOR;
	}
	drawHelperGhost(ctx, GHOST_NEOS_TRAILER_POSITION_X, GHOST_NEOS_TRAILER_POSITION_Y, GHOST_NEOS_TRAILER_DIRECTION, GHOST_NEOS_TRAILER_BODY_STATE, GHOST_NEOS_TRAILER_STATE, 0);
}
function eraseGhostsTrailer(ghost) {

	var ctx = getGhostsTrailerCanevasContext();

	ctx.clearRect(GHOST_SPO_TRAILER_POSITION_X - 17, GHOST_SPO_TRAILER_POSITION_Y - 17, 34, 34);
	ctx.clearRect(GHOST_FPO_TRAILER_POSITION_X - 17, GHOST_SPO_TRAILER_POSITION_Y - 17, 34, 34);
	ctx.clearRect(GHOST_OVP_TRAILER_POSITION_X - 17, GHOST_SPO_TRAILER_POSITION_Y - 17, 34, 34);
	ctx.clearRect(GHOST_GRUNE_TRAILER_POSITION_X - 17, GHOST_SPO_TRAILER_POSITION_Y - 17, 34, 34);
	ctx.clearRect(GHOST_NEOS_TRAILER_POSITION_X - 17, GHOST_SPO_TRAILER_POSITION_Y - 17, 34, 34);
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
