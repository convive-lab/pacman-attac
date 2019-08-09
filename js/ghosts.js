var GHOST_SPO_CANVAS_CONTEXT = null;
var GHOST_SPO_POSITION_X = 238;
var GHOST_SPO_POSITION_Y = 258;
var GHOST_SPO_DIRECTION = 3;
var GHOST_SPO_COLOR = "#ed1b24";
var GHOST_SPO_MOVING_TIMER = -1;
var GHOST_SPO_MOVING = false;
var GHOST_SPO_BODY_STATE = 0;
var GHOST_SPO_STATE = 0;
var GHOST_SPO_EAT_TIMER = null;
var GHOST_SPO_AFFRAID_TIMER = null;
var GHOST_SPO_AFFRAID_STATE = 0;
var GHOST_SPO_TUNNEL = false;

var GHOST_FPO_CANVAS_CONTEXT = null;
var GHOST_FPO_POSITION_X = 276;
var GHOST_FPO_POSITION_Y = 258;
var GHOST_FPO_DIRECTION = 2;
var GHOST_FPO_COLOR = "#005ca7";
var GHOST_FPO_MOVING_TIMER = -1;
var GHOST_FPO_MOVING = false;
var GHOST_FPO_BODY_STATE = 1;
var GHOST_FPO_STATE = 0;
var GHOST_FPO_EAT_TIMER = null;
var GHOST_FPO_AFFRAID_TIMER = null;
var GHOST_FPO_AFFRAID_STATE = 0;
var GHOST_FPO_TUNNEL = false;

var GHOST_OVP_CANVAS_CONTEXT = null;
var GHOST_OVP_POSITION_X = 276;
var GHOST_OVP_POSITION_Y = 204;
var GHOST_OVP_DIRECTION = 1;
var GHOST_OVP_COLOR = "#61c2d0";
var GHOST_OVP_MOVING_TIMER = -1;
var GHOST_OVP_MOVING = false;
var GHOST_OVP_BODY_STATE = 2;
var GHOST_OVP_STATE = 0;
var GHOST_OVP_EAT_TIMER = null;
var GHOST_OVP_AFFRAID_TIMER = null;
var GHOST_OVP_AFFRAID_STATE = 0;
var GHOST_OVP_TUNNEL = false;

var GHOST_GRUNE_CANVAS_CONTEXT = null;
var GHOST_GRUNE_POSITION_X = 314;
var GHOST_GRUNE_POSITION_Y = 258;
var GHOST_GRUNE_DIRECTION = 4;
var GHOST_GRUNE_COLOR = "#67af27";
var GHOST_GRUNE_MOVING_TIMER = -1;
var GHOST_GRUNE_MOVING = false;
var GHOST_GRUNE_BODY_STATE = 3;
var GHOST_GRUNE_STATE = 0;
var GHOST_GRUNE_EAT_TIMER = null;
var GHOST_GRUNE_AFFRAID_TIMER = null;
var GHOST_GRUNE_AFFRAID_STATE = 0;
var GHOST_GRUNE_TUNNEL = false;

var GHOST_NEOS_CANVAS_CONTEXT = null;
var GHOST_NEOS_POSITION_X = 276;
var GHOST_NEOS_POSITION_Y = 258;
var GHOST_NEOS_DIRECTION = 5;
var GHOST_NEOS_COLOR = "#eb4188";
var GHOST_NEOS_MOVING_TIMER = -1;
var GHOST_NEOS_MOVING = false;
var GHOST_NEOS_BODY_STATE = 4;
var GHOST_NEOS_STATE = 0;
var GHOST_NEOS_EAT_TIMER = null;
var GHOST_NEOS_AFFRAID_TIMER = null;
var GHOST_NEOS_AFFRAID_STATE = 0;
var GHOST_NEOS_TUNNEL = false;

var GHOST_AFFRAID_COLOR = "#2d3eff21";
var GHOST_AFFRAID_FINISH_COLOR = "#fff";
var GHOST_POSITION_STEP = 2;
var GHOST_MOVING_SPEED = 30;
var GHOST_TUNNEL_MOVING_SPEED = 35;
var GHOST_AFFRAID_MOVING_SPEED = 40;
var GHOST_EAT_MOVING_SPEED = 6;
var GHOST_AFFRAID_TIME = 8500;
var GHOST_EAT_TIME = 5500;
var GHOST_BODY_STATE_MAX = 6;
function initGhosts() {
	initGhost('spo');
	initGhost('fpo');
	initGhost('ovp');
	initGhost('grune');
	initGhost('neos');
}
function initGhost(ghost) {
	console.log(ghost);
	var canvas = document.getElementById('canvas-ghost-' + ghost);
	canvas.setAttribute('width', '550');
	canvas.setAttribute('height', '550');
	if (canvas.getContext) {
		eval('GHOST_' + ghost.toUpperCase() + '_CANVAS_CONTEXT = canvas.getContext("2d")');
	}
}
function resetGhosts() {
	stopGhosts();

	GHOST_SPO_POSITION_X = 276;
	GHOST_SPO_POSITION_Y = 204;
	GHOST_SPO_DIRECTION = 1;
	GHOST_SPO_MOVING_TIMER = -1;
	GHOST_SPO_MOVING = false;
	GHOST_SPO_BODY_STATE = 0;
	GHOST_SPO_STATE = 0;
	GHOST_SPO_EAT_TIMER = null;
	GHOST_SPO_AFFRAID_TIMER = null;
	GHOST_SPO_AFFRAID_STATE = 0;

	GHOST_FPO_POSITION_X = 276;
	GHOST_FPO_POSITION_Y = 258;
	GHOST_FPO_DIRECTION = 2;
	GHOST_FPO_MOVING_TIMER = -1;
	GHOST_FPO_MOVING = false;
	GHOST_FPO_BODY_STATE = 1;
	GHOST_FPO_STATE = 0;
	GHOST_FPO_EAT_TIMER = null;
	GHOST_FPO_AFFRAID_TIMER = null;
	GHOST_FPO_AFFRAID_STATE = 0;

	GHOST_OVP_POSITION_X = 238;
	GHOST_OVP_POSITION_Y = 258;
	GHOST_OVP_DIRECTION = 3;
	GHOST_OVP_MOVING_TIMER = -1;
	GHOST_OVP_MOVING = false;
	GHOST_OVP_BODY_STATE = 2;
	GHOST_OVP_STATE = 0;
	GHOST_OVP_EAT_TIMER = null;
	GHOST_OVP_AFFRAID_TIMER = null;
	GHOST_OVP_AFFRAID_STATE = 0;

	GHOST_GRUNE_POSITION_X = 314;
	GHOST_GRUNE_POSITION_Y = 258;
	GHOST_GRUNE_DIRECTION = 4;
	GHOST_GRUNE_MOVING_TIMER = -1;
	GHOST_GRUNE_MOVING = false;
	GHOST_GRUNE_BODY_STATE = 3;
	GHOST_GRUNE_STATE = 0;
	GHOST_GRUNE_EAT_TIMER = null;
	GHOST_GRUNE_AFFRAID_TIMER = null;
	GHOST_GRUNE_AFFRAID_STATE = 0;
	GHOST_GRUNE_POSITION_X = 314;

	GHOST_NEOS_POSITION_X = 276;
	GHOST_NEOS_POSITION_Y = 258;
	GHOST_NEOS_DIRECTION = 5;
	GHOST_NEOS_MOVING_TIMER = -1;
	GHOST_NEOS_MOVING = false;
	GHOST_NEOS_BODY_STATE = 4;
	GHOST_NEOS_STATE = 0;
	GHOST_NEOS_EAT_TIMER = null;
	GHOST_NEOS_AFFRAID_TIMER = null;
	GHOST_NEOS_AFFRAID_STATE = 0;
}
function getGhostCanevasContext(ghost) {
	return eval('GHOST_' + ghost.toUpperCase() + '_CANVAS_CONTEXT');
}

function drawGhosts() {
	drawGhost("spo");
	drawGhost('fpo');
	drawGhost('ovp');
	drawGhost("grune");
	drawGhost("neos");
}
function drawGhost(ghost) {

	var ctx = getGhostCanevasContext(ghost);

	if (eval('GHOST_' + ghost.toUpperCase() + '_STATE === 0')) {
		eval('ctx.fillStyle = GHOST_' + ghost.toUpperCase() + '_COLOR');
	} else {
		if (eval('GHOST_' + ghost.toUpperCase() + '_AFFRAID_STATE === 1')) {
			eval('ctx.fillStyle = GHOST_AFFRAID_FINISH_COLOR');
		} else {
			eval('ctx.fillStyle = GHOST_' + ghost.toUpperCase() + '_COLOR');
		}
	}
	eval('drawHelperGhost(ctx, GHOST_' + ghost.toUpperCase() + '_POSITION_X, GHOST_' + ghost.toUpperCase() + '_POSITION_Y, GHOST_' + ghost.toUpperCase() + '_DIRECTION, GHOST_' + ghost.toUpperCase() + '_BODY_STATE, GHOST_' + ghost.toUpperCase() + '_STATE, GHOST_' + ghost.toUpperCase() + '_AFFRAID_STATE)');

	ctx.closePath();


}

function affraidGhosts() {

	playWazaSound();

	SCORE_GHOST_COMBO = 200;

	affraidGhost("spo");
	affraidGhost("fpo");
	affraidGhost("ovp");
	affraidGhost("grune");
	affraidGhost("neos");
}
function affraidGhost(ghost) {
	if ( eval('GHOST_' + ghost.toUpperCase() + '_AFFRAID_TIMER !== null') ) {
		eval('GHOST_' + ghost.toUpperCase() + '_AFFRAID_TIMER.cancel()');
		eval('GHOST_' + ghost.toUpperCase() + '_AFFRAID_TIMER = null');
	}
	eval('GHOST_' + ghost.toUpperCase() + '_AFFRAID_STATE = 0');
	if (eval('GHOST_' + ghost.toUpperCase() + '_STATE === 0') || eval('GHOST_' + ghost.toUpperCase() + '_STATE === 1')) {
		stopGhost(ghost);
		eval('GHOST_' + ghost.toUpperCase() + '_STATE = 1');
		moveGhost(ghost);
		eval('GHOST_' + ghost.toUpperCase() + '_AFFRAID_TIMER = new Timer("cancelAffraidGhost(\'' + ghost + '\')", GHOST_AFFRAID_TIME)');
	}
}
function cancelAffraidGhost(ghost) {
	if (eval('GHOST_' + ghost.toUpperCase() + '_STATE === 1')) {
		eval('GHOST_' + ghost.toUpperCase() + '_AFFRAID_TIMER.cancel()');
		eval('GHOST_' + ghost.toUpperCase() + '_AFFRAID_TIMER = null');
		stopGhost(ghost);
		eval('GHOST_' + ghost.toUpperCase() + '_STATE = 0');
		moveGhost(ghost);
		testStateGhosts();
	}
}
function testStateGhosts() {

	if ( GHOST_SPO_STATE === 1 ||
		 GHOST_FPO_STATE === 1 ||
		 GHOST_OVP_STATE === 1 ||
		 GHOST_GRUNE_STATE === 1 ||
		 GHOST_NEOS_STATE === 1
	) {
		playWazaSound();
	} else if ( GHOST_SPO_STATE === -1 ||
		 GHOST_FPO_STATE === -1 ||
		 GHOST_OVP_STATE === -1 ||
		 GHOST_GRUNE_STATE === -1 ||
		 GHOST_NEOS_STATE === -1
	) {
		playGhostEatenSound();
	} else {
		playSirenSound();
	}
}

function startEatGhost(ghost) {

	if ( !LOCK ) {
		playEatGhostSound();

		LOCK = true;

		if ( eval('GHOST_' + ghost.toUpperCase() + '_AFFRAID_TIMER !== null') ) {
			eval('GHOST_' + ghost.toUpperCase() + '_AFFRAID_TIMER.cancel()');
			eval('GHOST_' + ghost.toUpperCase() + '_AFFRAID_TIMER = null');
		}

		score(SCORE_GHOST_COMBO, ghost);

		pauseGhosts();
		pausePacman();
		setTimeout('eatGhost(\''+ ghost + '\')', 600);
	}
}
eatenghost =""
function HtmlEncode(s){
	    return s
	         .replace(/&/g, "&amp;")
	         .replace(/</g, "&lt;")
	         .replace(/>/g, "&gt;")
	         .replace(/"/g, "&quot;")
	         .replace(/'/g, "&#039;");
}
function eatGhostPopup(ghost){
	$('#ghost-popup-twit').empty();
	pauseGame();


	$("#ghost-popup").css('display', 'flex');
	$(".ghost-popup-container").css('border-color', eval('GHOST_' + ghost.toUpperCase() + '_COLOR'));
	$("#ghost-name").html(ghost);
	$("#ghost-text").html(texts[ghost.toUpperCase()].twitter);
	$("#ghost-name").css("color",eval('GHOST_' + ghost.toUpperCase() + '_COLOR'));
	var newMail = "mailto:"+texts[ghost.toUpperCase()].email_adress
								+"?subject="+texts[ghost.toUpperCase()].email_betreff
								+"&body="+texts[ghost.toUpperCase()].email_text;
	$("#ghost-email").attr("href", newMail);
	eatenghost = ghost;
	if(typeof twttr.widgets !="undefined"){
		twttr.widgets.createShareButton(
			'/',
			document.getElementById('ghost-popup-twit'),
			{
				text: texts[ghost.toUpperCase()].twitter_handler +" " +texts[ghost.toUpperCase()].twitter
			}
		);
	}
	var that = this;
	that.ghost = ghost
		$("#continue").click(function(){
			$("#ghost-popup").css('display', 'none');
			resumeGame();

		})
	// setTimeout('eatGhost(\''+ ghost + '\')', 600);

}
// eatGhostPopupClose = function(){
// 	setTimeout('eatGhost(\''+ eatenghost + '\')', 600);
// }
function eatGhost(ghost) {

	playGhostEatenSound();

	if (eval('GHOST_' + ghost.toUpperCase() + '_STATE === 1')) {
		$("#board span.combo").remove();
		eval('GHOST_' + ghost.toUpperCase() + '_STATE = -1');
		eval('GHOST_' + ghost.toUpperCase() + '_EAT_TIMER = new Timer("cancelEatGhost(\'' + ghost + '\')", GHOST_EAT_TIME)');
		eval('GHOST_' + ghost.toUpperCase() + '_EAT_TIMER.pause()');
	}
	resumeGhosts();
	resumePacman();
	LOCK = false;
	eatGhostPopup(ghost);

}
function cancelEatGhost(ghost) {
	if (eval('GHOST_' + ghost.toUpperCase() + '_STATE === -1')) {
		eval('GHOST_' + ghost.toUpperCase() + '_EAT_TIMER = null');
		stopGhost(ghost);
		eval('GHOST_' + ghost.toUpperCase() + '_STATE = 0');
		moveGhost(ghost);
		testStateGhosts();
	}
}

function moveGhosts() {
	moveGhost("spo");
	moveGhost('fpo');
	moveGhost('ovp');
	moveGhost("grune");
	moveGhost("neos");
}
function moveGhost(ghost) {

	if (eval('GHOST_' + ghost.toUpperCase() + '_MOVING === false')) {
		eval('GHOST_' + ghost.toUpperCase() + '_MOVING = true;');

		var speed = -1;
		if (eval('GHOST_' + ghost.toUpperCase() + '_STATE === 1')) {
			speed =  GHOST_AFFRAID_MOVING_SPEED;
		} else if (eval('GHOST_' + ghost.toUpperCase() + '_STATE === 0')) {
			if (eval('GHOST_' + ghost.toUpperCase() + '_TUNNEL === false')) {
				speed =  GHOST_MOVING_SPEED;
			} else {
				speed =  GHOST_TUNNEL_MOVING_SPEED;
			}
		} else {
			speed =  GHOST_EAT_MOVING_SPEED;
		}
		eval('GHOST_' + ghost.toUpperCase() + '_MOVING_TIMER = setInterval("moveGhost(\'' + ghost + '\')", ' + speed + ');');
	} else {

		changeDirection(ghost);

		if ( eval('GHOST_' + ghost.toUpperCase() + '_AFFRAID_TIMER !== null')) {
			var remain = eval('GHOST_' + ghost.toUpperCase() + '_AFFRAID_TIMER.remain();');
			if ((remain >= 2500 && remain < 3000) || (remain >= 1500 && remain <= 2000) || (remain >= 500 && remain <= 1000) || (remain < 0)) {
				eval('GHOST_' + ghost.toUpperCase() + '_AFFRAID_STATE = 1;')
			} else if ((remain > 2000 && remain < 2500) || (remain > 1000 && remain < 1500) || (remain >= 0 && remain < 500)) {
				eval('GHOST_' + ghost.toUpperCase() + '_AFFRAID_STATE = 0;')
			}
		}

		if (canMoveGhost(ghost)) {
			eraseGhost(ghost);

			if (eval('GHOST_' + ghost.toUpperCase() + '_BODY_STATE < GHOST_BODY_STATE_MAX')) {
				eval('GHOST_' + ghost.toUpperCase() + '_BODY_STATE ++;');
			} else {
				eval('GHOST_' + ghost.toUpperCase() + '_BODY_STATE = 0;');
			}

			if ( eval('GHOST_' + ghost.toUpperCase() + '_DIRECTION === 1') ) {
				eval('GHOST_' + ghost.toUpperCase() + '_POSITION_X += GHOST_POSITION_STEP;');
			} else if ( eval('GHOST_' + ghost.toUpperCase() + '_DIRECTION === 2') ) {
				eval('GHOST_' + ghost.toUpperCase() + '_POSITION_Y += GHOST_POSITION_STEP;');
			} else if ( eval('GHOST_' + ghost.toUpperCase() + '_DIRECTION === 3') ) {
				eval('GHOST_' + ghost.toUpperCase() + '_POSITION_X -= GHOST_POSITION_STEP;');
			} else if ( eval('GHOST_' + ghost.toUpperCase() + '_DIRECTION === 4') ) {
				eval('GHOST_' + ghost.toUpperCase() + '_POSITION_Y -= GHOST_POSITION_STEP;');
			}

			if ( eval('GHOST_' + ghost.toUpperCase() + '_POSITION_X === 2') && eval('GHOST_' + ghost.toUpperCase() + '_POSITION_Y === 258') ) {
				eval('GHOST_' + ghost.toUpperCase() + '_POSITION_X = 548;');
				eval('GHOST_' + ghost.toUpperCase() + '_POSITION_Y = 258;');
			} else if ( eval('GHOST_' + ghost.toUpperCase() + '_POSITION_X === 548') && eval('GHOST_' + ghost.toUpperCase() + '_POSITION_Y === 258') ) {
				eval('GHOST_' + ghost.toUpperCase() + '_POSITION_X = 2;');
				eval('GHOST_' + ghost.toUpperCase() + '_POSITION_Y = 258;');
			}

			drawGhost(ghost);

			if (eval('GHOST_' + ghost.toUpperCase() + '_BODY_STATE === 3') && eval('GHOST_' + ghost.toUpperCase() + '_STATE != -1')) {
				if ( !PACMAN_MOVING ) {
					testGhostPacman(ghost);
				}
				testGhostTunnel(ghost);
			}
		} else {
			eval('GHOST_' + ghost.toUpperCase() + '_DIRECTION = oneDirection();');
		}
	}
}

function testGhostTunnel(ghost) {
	if ( eval('GHOST_' + ghost.toUpperCase() + '_STATE === 0') ) {
		if (isInTunnel(ghost) && eval('GHOST_' + ghost.toUpperCase() + '_TUNNEL === false')) {
			stopGhost(ghost);
			eval('GHOST_' + ghost.toUpperCase() + '_TUNNEL = true');
			moveGhost(ghost);
		} else if (!isInTunnel(ghost) && eval('GHOST_' + ghost.toUpperCase() + '_TUNNEL === true')) {
			stopGhost(ghost);
			eval('GHOST_' + ghost.toUpperCase() + '_TUNNEL = false');
			moveGhost(ghost);
		}
	}
}
function isInTunnel(ghost) {
	if ( ( eval('GHOST_' + ghost.toUpperCase() + '_POSITION_X >= 2') && eval('GHOST_' + ghost.toUpperCase() + '_POSITION_X <= 106') ) && eval('GHOST_' + ghost.toUpperCase() + '_POSITION_Y === 258') ) {
		return true;
	} else if ( ( eval('GHOST_' + ghost.toUpperCase() + '_POSITION_X >= 462') && eval('GHOST_' + ghost.toUpperCase() + '_POSITION_X <= 548') ) && eval('GHOST_' + ghost.toUpperCase() + '_POSITION_Y === 258') ) {
		return true;
	}
}


function changeDirection(ghost) {
	eval('var direction = GHOST_' + ghost.toUpperCase() + '_DIRECTION');
	eval('var state = GHOST_' + ghost.toUpperCase() + '_STATE');
	eval('var ghostX = GHOST_' + ghost.toUpperCase() + '_POSITION_X');
	eval('var ghostY = GHOST_' + ghost.toUpperCase() + '_POSITION_Y');

	var tryDirection = oneDirection();

	if (state === 0 || state === 1) {
		if (ghostX != 276 && ghostY != 258) {
			var pacmanX = PACMAN_POSITION_X;
			var pacmanY = PACMAN_POSITION_Y;
			var axe = oneAxe();
			if (ghost === "spo") {

				var nothing = whatsYourProblem();
				if (nothing < 6) {
					tryDirection = getRightDirection(axe, ghostX, ghostY, pacmanX, pacmanY);
					if ( !(canMoveGhost(ghost, tryDirection) && (direction != tryDirection -2 && direction != tryDirection + 2)) ) {
						axe ++;
						if (axe > 2) axe = 1;
						tryDirection = getRightDirection(axe, ghostX, ghostY, pacmanX, pacmanY);
					}
				}

			} else if (ghost === "fpo") {

				var nothing = whatsYourProblem();
				if (nothing < 3) {

					tryDirection = getRightDirection(axe, ghostX, ghostY, pacmanX, pacmanY);
					if ( !(canMoveGhost(ghost, tryDirection) && (direction != tryDirection -2 && direction != tryDirection + 2)) ) {
						axe ++;
						if (axe > 2) axe = 1;
						tryDirection = getRightDirection(axe, ghostX, ghostY, pacmanX, pacmanY);
					}
					tryDirection = reverseDirection(tryDirection);
				}

			} else if (ghost === "ovp") {
				var good = anyGoodIdea();
				if (good < 3) {
					tryDirection = getRightDirection(axe, ghostX, ghostY, pacmanX, pacmanY);
					if ( !(canMoveGhost(ghost, tryDirection) && (direction != tryDirection -2 && direction != tryDirection + 2)) ) {
						axe ++;
						if (axe > 2) axe = 1;
						tryDirection = getRightDirection(axe, ghostX, ghostY, pacmanX, pacmanY);
					}
				}
			} else if (ghost === "neos") {
				var good = anyGoodIdea();
				if (good < 3) {
					tryDirection = getRightDirection(axe, ghostX, ghostY, pacmanX, pacmanY);
					if ( !(canMoveGhost(ghost, tryDirection) && (direction != tryDirection -2 && direction != tryDirection + 2)) ) {
						axe ++;
						if (axe > 2) axe = 1;
						tryDirection = getRightDirection(axe, ghostX, ghostY, pacmanX, pacmanY);
					}
				}
			}
		}
		if (state === 1) {
			tryDirection = reverseDirection(tryDirection);
		}
	} else {
		var axe = oneAxe();
		tryDirection = getRightDirectionForHome(axe, ghostX, ghostY);
		if (canMoveGhost(ghost, tryDirection) && (direction != tryDirection -2 && direction != tryDirection + 2)) {

		} else {
			axe ++;
			if (axe > 2) axe = 1;
			tryDirection = getRightDirectionForHome(axe, ghostX, ghostY);
		}
	}

	if (canMoveGhost(ghost, tryDirection) && (direction != tryDirection -2 && direction != tryDirection + 2)) {
		eval('GHOST_' + ghost.toUpperCase() + '_DIRECTION = tryDirection');
	}
}

function getRightDirectionForHome(axe, ghostX, ghostY) {
	var homeX = 276;
	var homeY = 204;

	if (ghostY === 204 && ghostX === 276) {
		return 2;
	} else if (ghostX === 276 && ghostY === 258) {
		return oneDirectionX();
	} else {
		if (axe === 1) {
			if (ghostX > homeX) {
			 return 3;
			} else {
				return 1;
			}
		} else {
			if (ghostY > homeY) {
			 return 4;
			} else {
				return 2;
			}
		}
	}
}
function getRightDirection(axe, ghostX, ghostY, pacmanX, pacmanY) {
	if (axe === 1) {
		if (ghostX > pacmanX) {
		 return 3;
		} else {
			return 1;
		}
	} else {
		if (ghostY > pacmanY) {
		 return 4;
		} else {
			return 2;
		}
	}
}
function reverseDirection(direction) {
	if (direction > 2) return direction - 2;
	else return direction + 2;
}

function eraseGhost(ghost) {

	var ctx = getGhostCanevasContext(ghost);

	eval('ctx.clearRect(GHOST_' + ghost.toUpperCase() + '_POSITION_X - 17, GHOST_' + ghost.toUpperCase() + '_POSITION_Y - 17, 34, 34)');
}
function eraseGhosts() {

	eraseGhost('spo');
	eraseGhost('fpo');
	eraseGhost('ovp');
	eraseGhost('grune');
	eraseGhost('neos');
}

function canMoveGhost(ghost, direction) {
	if (!direction) {
		eval('var direction = GHOST_' + ghost.toUpperCase() + '_DIRECTION');
	}
	eval('var positionX = GHOST_' + ghost.toUpperCase() + '_POSITION_X');
	eval('var positionY = GHOST_' + ghost.toUpperCase() + '_POSITION_Y');
	eval('var state = GHOST_' + ghost.toUpperCase() + '_STATE');

	if (positionX === 276 && positionY === 204 && direction === 2 && state === 0) return false;

	if ( direction === 1 ) {
		positionX += GHOST_POSITION_STEP;
	} else if ( direction === 2 ) {
		positionY += GHOST_POSITION_STEP;
	} else if ( direction === 3 ) {
		positionX -= GHOST_POSITION_STEP;
	} else if ( direction === 4 ) {
		positionY -= GHOST_POSITION_STEP;
	}

	for (var i = 0, imax = PATHS.length; i < imax; i ++) {

		var p = PATHS[i];

		var startX = p.split("-")[0].split(",")[0];
		var startY = p.split("-")[0].split(",")[1];
		var endX = p.split("-")[1].split(",")[0];
		var endY = p.split("-")[1].split(",")[1];

		if (positionX >= startX && positionX <= endX && positionY >= startY && positionY <= endY) {
			return true;
		}
	}

	return false;
}

function oneDirection() {
	return Math.floor( Math.random() * ( 4 - 1 + 1 ) + 1 );
}
function oneDirectionX() {
	var direction = oneDirection();
	if (direction === 4 || direction === 2) direction -= 1;
	return direction;
}
function oneDirectionY() {
	var direction = oneDirection();
	if (direction === 3 || direction === 1) direction -= 1;
	return direction;
}

function stopGhost(ghost) {

	if (eval('GHOST_' + ghost.toUpperCase() + '_STATE === 1')) {
		eval('if(GHOST_' + ghost.toUpperCase() + '_AFFRAID_TIMER !== null) GHOST_' + ghost.toUpperCase() + '_AFFRAID_TIMER.cancel()');
		eval('GHOST_' + ghost.toUpperCase() + '_AFFRAID_TIMER = null');
		eval('GHOST_' + ghost.toUpperCase() + '_STATE = 0');
	} else if (eval('GHOST_' + ghost.toUpperCase() + '_STATE === -1')) {
		eval('if(GHOST_' + ghost.toUpperCase() + '_EAT_TIMER !== null) GHOST_' + ghost.toUpperCase() + '_EAT_TIMER.cancel()');
		eval('GHOST_' + ghost.toUpperCase() + '_EAT_TIMER = null');
		eval('GHOST_' + ghost.toUpperCase() + '_STATE = 0');
	}

	if ( eval('GHOST_' + ghost.toUpperCase() + '_MOVING_TIMER != -1') ) {
		eval('clearInterval(GHOST_' + ghost.toUpperCase() + '_MOVING_TIMER)');
		eval('GHOST_' + ghost.toUpperCase() + '_MOVING_TIMER = -1');
		eval('GHOST_' + ghost.toUpperCase() + '_MOVING = false');
	}
}
function stopGhosts() {
	stopGhost('spo');
	stopGhost('fpo');
	stopGhost('ovp');
	stopGhost('grune');
	stopGhost('neos');
}

function pauseGhost(ghost) {
	if (eval('GHOST_' + ghost.toUpperCase() + '_STATE === 1')) {
		eval('if(GHOST_' + ghost.toUpperCase() + '_AFFRAID_TIMER !== null) GHOST_' + ghost.toUpperCase() + '_AFFRAID_TIMER.pause()');
	} else if (eval('GHOST_' + ghost.toUpperCase() + '_STATE === -1')) {
		eval('if(GHOST_' + ghost.toUpperCase() + '_EAT_TIMER !== null) GHOST_' + ghost.toUpperCase() + '_EAT_TIMER.pause()');
	}

	if ( eval('GHOST_' + ghost.toUpperCase() + '_MOVING_TIMER != -1') ) {
		eval('clearInterval(GHOST_' + ghost.toUpperCase() + '_MOVING_TIMER)');
		eval('GHOST_' + ghost.toUpperCase() + '_MOVING_TIMER = -1');
		eval('GHOST_' + ghost.toUpperCase() + '_MOVING = false');
	}
}
function pauseGhosts() {
	pauseGhost('spo');
	pauseGhost('fpo');
	pauseGhost('ovp');
	pauseGhost('grune');
	pauseGhost('neos');
}

function resumeGhost(ghost) {
	if (eval('GHOST_' + ghost.toUpperCase() + '_STATE === 1')) {
		eval('if(GHOST_' + ghost.toUpperCase() + '_AFFRAID_TIMER !== null) GHOST_' + ghost.toUpperCase() + '_AFFRAID_TIMER.resume()');
	} else if (eval('GHOST_' + ghost.toUpperCase() + '_STATE === -1')) {
		eval('if(GHOST_' + ghost.toUpperCase() + '_EAT_TIMER !== null) GHOST_' + ghost.toUpperCase() + '_EAT_TIMER.resume()');
	}
	moveGhost(ghost);
}
function resumeGhosts() {
	resumeGhost('spo');
	resumeGhost('fpo');
	resumeGhost('ovp');
	resumeGhost('grune');
	resumeGhost('neos');
}

function drawHelperGhost(ctx, x, y, d, b, s, a) {

	if (s != -1) {
		ctx.beginPath();
		ctx.moveTo((x - 15), (y + 16));
		ctx.lineTo((x - 15), (y + 16) - 18);
		ctx.bezierCurveTo((x - 15), (y + 16) - 26, (x - 15) + 6, (y + 16) - 32, (x - 15) + 14, (y + 16) - 32);
		ctx.bezierCurveTo((x - 15) + 22, (y + 16) - 32, (x - 15) + 28, (y + 16) - 26, (x - 15) + 28, (y + 16) - 18);
		ctx.lineTo((x - 15) + 28, (y + 16));
		if (b < 4) {
			ctx.lineTo((x - 15) + 23.333, (y + 16) - 5.333);
			ctx.lineTo((x - 15) + 18.666, (y + 16));
			ctx.lineTo((x - 15) + 14, (y + 16) - 5.333);
			ctx.lineTo((x - 15) + 9.333, (y + 16));
			ctx.lineTo((x - 15) + 4.666, (y + 16) - 5.333);
		} else {
			ctx.lineTo((x - 15) + 24.333, (y + 16) - 5.333);
			ctx.lineTo((x - 15) + 20.666, (y + 16));
			ctx.lineTo((x - 15) + 17.333, (y + 16) - 5.333);
			ctx.lineTo((x - 15) + 12.666, (y + 16));
			ctx.lineTo((x - 15) + 9, (y + 16) - 5.333);
			ctx.lineTo((x - 15) + 5.333, (y + 16));
			ctx.lineTo((x - 15) + 2.666, (y + 16) - 5.333);
		}
		ctx.lineTo((x - 15), (y + 16) );
		ctx.fill();
	}

	var eyesX = 0;
	var eyesY = 0;

	if (d === 4) {
		eyesY = -5;
	} else if (d === 1) {
		eyesX = +2;
	} else if (d === 2) {
		eyesY = 0;
		eyesY = +5;
	} else if (d === 3) {
		eyesX = -3;
	}
	//eyes normal
	if (s === 0 || s === -1) {
		ctx.fillStyle = "white";
		ctx.beginPath();
		ctx.moveTo((x - 15) + 8 + eyesX, (y + 16) - 24 + eyesY);
		ctx.bezierCurveTo((x - 15) + 5 + eyesX, (y + 16) - 24 + eyesY, (x - 15) + 4 + eyesX, (y + 16) - 21 + eyesY, (x - 15) + 4 + eyesX, (y + 16) - 19 + eyesY);
		ctx.bezierCurveTo((x - 15) + 4 + eyesX, (y + 16) - 17 + eyesY, (x - 15) + 5 + eyesX, (y + 16) - 14 + eyesY, (x - 15) + 8 + eyesX, (y + 16) - 14 + eyesY);
		ctx.bezierCurveTo((x - 15) + 11 + eyesX, (y + 16) - 14 + eyesY, (x - 15) + 12 + eyesX, (y + 16) - 17 + eyesY, (x - 15) + 12 + eyesX, (y + 16) - 19 + eyesY);
		ctx.bezierCurveTo((x - 15) + 12 + eyesX, (y + 16) - 21 + eyesY, (x - 15) + 11 + eyesX, (y + 16) - 24 + eyesY, (x - 15) + 8 + eyesX, (y + 16) - 24 + eyesY);

		ctx.moveTo((x - 15) + 20 + eyesX, (y + 16) - 24 + eyesY);
		ctx.bezierCurveTo((x - 15) + 17 + eyesX, (y + 16) - 24 + eyesY, (x - 15) + 16 + eyesX, (y + 16) - 21 + eyesY, (x - 15) + 16 + eyesX, (y + 16) - 19 + eyesY);
		ctx.bezierCurveTo((x - 15) + 16 + eyesX, (y + 16) - 17 + eyesY, (x - 15) + 17 + eyesX, (y + 16) - 14 + eyesY, (x - 15) + 20 + eyesX, (y + 16) - 14 + eyesY);
		ctx.bezierCurveTo((x - 15) + 23 + eyesX, (y + 16) - 14 + eyesY, (x - 15) + 24 + eyesX, (y + 16) - 17 + eyesY, (x - 15) + 24 + eyesX, (y + 16) - 19 + eyesY);
		ctx.bezierCurveTo((x - 15) + 24 + eyesX, (y + 16) - 21 + eyesY, (x - 15) + 23 + eyesX, (y + 16) - 24 + eyesY, (x - 15) + 20 + eyesX, (y + 16) - 24 + eyesY);
		ctx.fill();

		if (d === 4) {
			eyesY = -9;
			eyesX = 2;
		} else if (d === 1) {
			eyesX = +6;
		} else if (d === 2) {
			eyesY = +8;
			eyesX = 2;
		} else if (d === 3) {

		}

		ctx.fillStyle = "#0000fa";
		ctx.beginPath();
		ctx.arc((x - 15) + 18 + eyesX, (y + 16) - 18 + eyesY, 2, 0, Math.PI * 2, true);
		ctx.fill();

		ctx.beginPath();
		ctx.arc((x - 15) + 6 + eyesX, (y + 16) - 18 + eyesY, 2, 0, Math.PI * 2, true);
		ctx.fill();
	} else {
		//eyes afraid
		if (a === 1) {
			ctx.fillStyle = "#ee2933";
		} else {
			ctx.fillStyle = "#FFF";
		}
		ctx.beginPath();
		ctx.arc((x - 15) + 18, (y + 13) - 17, 2, 0, Math.PI * 2, true);
		ctx.fill();

		ctx.beginPath();
		ctx.arc((x - 15) + 10, (y + 13) - 17, 2, 0, Math.PI * 2, true);
		ctx.fill();

		if (a === 1) {
			ctx.strokeStyle = "#ee2933";
		} else {
			ctx.strokeStyle = "#FFF";
		}
		ctx.beginPath();
		ctx.lineTo((x - 14.333) + 24, (y + 6));

		ctx.lineTo((x - 14.333) + 21, (y + 6) - 3);
		ctx.lineTo((x - 14.333) + 17, (y + 6));

		ctx.lineTo((x - 14.333) + 14, (y + 6) - 3);
		ctx.lineTo((x - 14.333) + 10, (y + 6));

		ctx.lineTo((x - 14.333) + 7, (y + 6) - 3);
		ctx.lineTo((x - 14.333) + 3, (y + 6));
		ctx.stroke();
	}
}
