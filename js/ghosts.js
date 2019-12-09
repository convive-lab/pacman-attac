var GHOST_1_CANVAS_CONTEXT = null;
var GHOST_1_POSITION_X = 238;
var GHOST_1_POSITION_Y = 258;
var GHOST_1_DIRECTION = 3;
var GHOST_1_COLOR = "#ed1b24";
var GHOST_1_MOVING_TIMER = -1;
var GHOST_1_MOVING = false;
var GHOST_1_BODY_STATE = 0;
var GHOST_1_STATE = 0;
var GHOST_1_EAT_TIMER = null;
var GHOST_1_AFFRAID_TIMER = null;
var GHOST_1_AFFRAID_STATE = 0;
var GHOST_1_TUNNEL = false;

var GHOST_2_CANVAS_CONTEXT = null;
var GHOST_2_POSITION_X = 276;
var GHOST_2_POSITION_Y = 258;
var GHOST_2_DIRECTION = 2;
var GHOST_2_COLOR = "#005ca7";
var GHOST_2_MOVING_TIMER = -1;
var GHOST_2_MOVING = false;
var GHOST_2_BODY_STATE = 1;
var GHOST_2_STATE = 0;
var GHOST_2_EAT_TIMER = null;
var GHOST_2_AFFRAID_TIMER = null;
var GHOST_2_AFFRAID_STATE = 0;
var GHOST_2_TUNNEL = false;

var GHOST_3_CANVAS_CONTEXT = null;
var GHOST_3_POSITION_X = 276;
var GHOST_3_POSITION_Y = 204;
var GHOST_3_DIRECTION = 1;
var GHOST_3_COLOR = "#61c2d0";
var GHOST_3_MOVING_TIMER = -1;
var GHOST_3_MOVING = false;
var GHOST_3_BODY_STATE = 2;
var GHOST_3_STATE = 0;
var GHOST_3_EAT_TIMER = null;
var GHOST_3_AFFRAID_TIMER = null;
var GHOST_3_AFFRAID_STATE = 0;
var GHOST_3_TUNNEL = false;

var GHOST_4_CANVAS_CONTEXT = null;
var GHOST_4_POSITION_X = 314;
var GHOST_4_POSITION_Y = 258;
var GHOST_4_DIRECTION = 4;
var GHOST_4_COLOR = "#67af27";
var GHOST_4_MOVING_TIMER = -1;
var GHOST_4_MOVING = false;
var GHOST_4_BODY_STATE = 3;
var GHOST_4_STATE = 0;
var GHOST_4_EAT_TIMER = null;
var GHOST_4_AFFRAID_TIMER = null;
var GHOST_4_AFFRAID_STATE = 0;
var GHOST_4_TUNNEL = false;

var GHOST_0_CANVAS_CONTEXT = null;
var GHOST_0_POSITION_X = 276;
var GHOST_0_POSITION_Y = 258;
var GHOST_0_DIRECTION = 5;
var GHOST_0_COLOR = "#eb4188";
var GHOST_0_MOVING_TIMER = -1;
var GHOST_0_MOVING = false;
var GHOST_0_BODY_STATE = 4;
var GHOST_0_STATE = 0;
var GHOST_0_EAT_TIMER = null;
var GHOST_0_AFFRAID_TIMER = null;
var GHOST_0_AFFRAID_STATE = 0;
var GHOST_0_TUNNEL = false;

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
	initGhost('0');
	initGhost('1');
	initGhost('2');
	initGhost('3');
	initGhost('4');
}
function initGhost(ghost) {
	var canvas = document.getElementById('canvas-ghost-' + ghost);
	canvas.setAttribute('width', '550');
	canvas.setAttribute('height', '550');
	if (canvas.getContext) {
		eval('GHOST_' + ghost.toUpperCase() + '_CANVAS_CONTEXT = canvas.getContext("2d")');
	}
}
function resetGhosts() {
	stopGhosts();

	GHOST_1_POSITION_X = 276;
	GHOST_1_POSITION_Y = 204;
	GHOST_1_DIRECTION = 1;
	GHOST_1_MOVING_TIMER = -1;
	GHOST_1_MOVING = false;
	GHOST_1_BODY_STATE = 0;
	GHOST_1_STATE = 0;
	GHOST_1_EAT_TIMER = null;
	GHOST_1_AFFRAID_TIMER = null;
	GHOST_1_AFFRAID_STATE = 0;

	GHOST_2_POSITION_X = 276;
	GHOST_2_POSITION_Y = 258;
	GHOST_2_DIRECTION = 2;
	GHOST_2_MOVING_TIMER = -1;
	GHOST_2_MOVING = false;
	GHOST_2_BODY_STATE = 1;
	GHOST_2_STATE = 0;
	GHOST_2_EAT_TIMER = null;
	GHOST_2_AFFRAID_TIMER = null;
	GHOST_2_AFFRAID_STATE = 0;

	GHOST_3_POSITION_X = 238;
	GHOST_3_POSITION_Y = 258;
	GHOST_3_DIRECTION = 3;
	GHOST_3_MOVING_TIMER = -1;
	GHOST_3_MOVING = false;
	GHOST_3_BODY_STATE = 2;
	GHOST_3_STATE = 0;
	GHOST_3_EAT_TIMER = null;
	GHOST_3_AFFRAID_TIMER = null;
	GHOST_3_AFFRAID_STATE = 0;

	GHOST_4_POSITION_X = 314;
	GHOST_4_POSITION_Y = 258;
	GHOST_4_DIRECTION = 4;
	GHOST_4_MOVING_TIMER = -1;
	GHOST_4_MOVING = false;
	GHOST_4_BODY_STATE = 3;
	GHOST_4_STATE = 0;
	GHOST_4_EAT_TIMER = null;
	GHOST_4_AFFRAID_TIMER = null;
	GHOST_4_AFFRAID_STATE = 0;
	GHOST_4_POSITION_X = 314;

	GHOST_0_POSITION_X = 276;
	GHOST_0_POSITION_Y = 258;
	GHOST_0_DIRECTION = 5;
	GHOST_0_MOVING_TIMER = -1;
	GHOST_0_MOVING = false;
	GHOST_0_BODY_STATE = 4;
	GHOST_0_STATE = 0;
	GHOST_0_EAT_TIMER = null;
	GHOST_0_AFFRAID_TIMER = null;
	GHOST_0_AFFRAID_STATE = 0;
}
function getGhostCanevasContext(ghost) {
	return eval('GHOST_' + ghost.toUpperCase() + '_CANVAS_CONTEXT');
}

function drawGhosts() {
	drawGhost("0");
	drawGhost('1');
	drawGhost('3');
	drawGhost("4");
	drawGhost("2");
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

	affraidGhost("0");
	affraidGhost("1");
	affraidGhost("3");
	affraidGhost("4");
	affraidGhost("2");
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

	if ( GHOST_1_STATE === 1 ||
		 GHOST_2_STATE === 1 ||
		 GHOST_3_STATE === 1 ||
		 GHOST_4_STATE === 1 ||
		 GHOST_0_STATE === 1
	) {
		playWazaSound();
	} else if ( GHOST_1_STATE === -1 ||
		 GHOST_2_STATE === -1 ||
		 GHOST_3_STATE === -1 ||
		 GHOST_4_STATE === -1 ||
		 GHOST_0_STATE === -1
	) {
		playGhostEatenSound();
	} else {
		drawBoard(-1);
		$("body").removeClass();
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
	if(value!="")$("#ghost-von").html("Von: "+ value);
	else $("#ghost-von").html("Von: Unbekannt");
	$("#ghost-name").html("An: "+ texts.ghosts[Number(ghost)].name_short);
	$("#ghost-text").html(texts.themen[themenFeld].twitter);
	$("#ghost-text").removeClass();
	$("#ghost-text").addClass("thema_"+themenFeld);
	if(email) $("#ghost-email").hide();
	else {
		$("#ghost-email").show();
	}
	if(twitter) $("#ghost-popup-twit").hide();
	else {
		$("#ghost-popup-twit").show();
	}

	$("#ghost-name").css("color",eval('GHOST_' + ghost.toUpperCase() + '_COLOR'));
	var newMail = "mailto:"+texts.ghosts[Number(ghost)].email_adress
								+"?subject="+texts.themen[themenFeld].email_betreff
								+"&body="+texts.ghosts[Number(ghost)].email_introduction+texts.themen[themenFeld].email_text;
	$("#ghost-email").attr("href", newMail);
	var newTweet = "https://twitter.com/intent/tweet?hashtags=WeWantYou&text="+texts.themen[themenFeld].twitter+" "+texts.ghosts[Number(ghost)].twitter_handler +"&tw_p=tweetbutton&url=https://anders-handeln.at/pledge-2019"
	$("#ghost-tweet").attr("href", newTweet);

	function gaevent() {
		score(1000);
		gtag('event', ghost, {
		'event_category': "send mail",
		'event_label': ghost,
		});
	}
	function gatweet() {
		score(1000);
		gtag('event', ghost, {
		'event_category': "send twitter",
		'event_label': ghost,
		});
	}
	if(email)$("#ghost-email").show();
	else $("#ghost-email").hide();
	if(twitter)$("#ghost-tweet").show();
	else $("#ghost-tweet").hide();
	if(!twitter && !email){
		$("#ghost-email").show();
		$("#ghost-tweet").show();
	}
	var el = document.getElementById('ghost-email');
	el.onclick = gaevent;
	var el = document.getElementById('ghost-tweet');
	el.onclick = gatweet;
	eatenghost = ghost;
	// if(typeof twttr.widgets !="undefined"){
	// 	twttr.widgets.createShareButton(
	// 		'/',
	// 		document.getElementById('ghost-popup-twit'),
	// 		{
	// 			text: texts[ghost.toUpperCase()].twitter_handler +" " +texts.themen[themenFeld].twitter,
	// 			hashtags:"WeWantYou",
	// 			url:"anders-handeln.at/pledge-2019"
	//
	// 		}
	// 	);
	// 	twttr.events.bind('click', function(event) {
	// 		gtag('event', ghost, {
	// 		'event_category': "send twitter",
	// 		'event_label': ghost,
	// 		});
	// 	});
	// }
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
	moveGhost("0");
	moveGhost('1');
	moveGhost('3');
	moveGhost("4");
	moveGhost("2");
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
			if (ghost === "0") {

				var nothing = whatsYourProblem();
				if (nothing < 6) {
					tryDirection = getRightDirection(axe, ghostX, ghostY, pacmanX, pacmanY);
					if ( !(canMoveGhost(ghost, tryDirection) && (direction != tryDirection -2 && direction != tryDirection + 2)) ) {
						axe ++;
						if (axe > 2) axe = 1;
						tryDirection = getRightDirection(axe, ghostX, ghostY, pacmanX, pacmanY);
					}
				}

			} else if (ghost === "1") {

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

			} else if (ghost === "3") {
				var good = anyGoodIdea();
				if (good < 3) {
					tryDirection = getRightDirection(axe, ghostX, ghostY, pacmanX, pacmanY);
					if ( !(canMoveGhost(ghost, tryDirection) && (direction != tryDirection -2 && direction != tryDirection + 2)) ) {
						axe ++;
						if (axe > 2) axe = 1;
						tryDirection = getRightDirection(axe, ghostX, ghostY, pacmanX, pacmanY);
					}
				}
			} else if (ghost === "2") {
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

	eraseGhost('0');
	eraseGhost('1');
	eraseGhost('3');
	eraseGhost('4');
	eraseGhost('2');
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
	stopGhost('0');
	stopGhost('1');
	stopGhost('3');
	stopGhost('4');
	stopGhost('2');
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
	pauseGhost('0');
	pauseGhost('1');
	pauseGhost('3');
	pauseGhost('4');
	pauseGhost('2');
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
	resumeGhost('0');
	resumeGhost('1');
	resumeGhost('3');
	resumeGhost('4');
	resumeGhost('2');
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
