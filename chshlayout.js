load("sbbsdefs.js");
load("frame.js");


//let's call this the colorblind version
// IF YOU WANT TO CUSTOMIZE THE LOOK OF YOUR SHELL THIS IS THE PLACE

// first you can change the colors for most elements, and afterwards is some more complicated stuff that effects frame location that 
// is really only to be messed with if you understand it.  some of the stuff is a little backwards in there.  

// ########################### COLOR VARIABLES AND DECLARATIONS v . 2 #######################################

//RSS ticker colors
var channelTitleBG = BG_BLACK;
var channelUpdateTimeBG = BG_RED;
var itemUpdateTimeBG = BG_BLACK;
var itemUpdateBG = BG_BLACK;

var channelTitleFG = MAGENTA;
var channelUpdateTimeFG = CYAN;
var itemUpdateFG = BLACK;
var itemUpdateTimeFG = BLACK;

//BG COLORS
chatOutputBG = BG_BLACK;
chatInputBG = BG_BLUE;
msgBoardBG = BG_BLACK;
msgBoardDateBG = BG_BLACK
msgBoardNameBG = BG_BLACK;
msgBoardNameMeBG = BG_BLACK;
msgBoardTopicBG = BG_BLACK;
msgBoardTitleBG = BG_BLACK;
dynamicFrameBG = BG_CYAN;
alertFrameBG = BG_BLACK;  //this is where the banners load
menuFrameBG = BG_LIGHTGRAY;
menuBarFrameBG = BG_BLACK;
chatOutputChnMeBG = BG_BLACK;
chatOutputChnYouBG = BG_BLACK;
chatOutputNickMeBG = BG_BLACK;
chatOutputNickYouBG = BG_BLACK;
chatOutputMsgMeBG = BG_BLACK;
chatOutputMsgYouBG = BG_BLACK;
chanJoinBG = BG_CYAN;
infoFrameABG = BG_BLACK;  //this is a menu indicator
infoFrameBBG = BG_GREEN;  //  this is the Group
infoFrameCBG = BG_GREEN;  //this is one of the ones at the bottom
popUpFrameBG = BG_RED;

// Foreground colors

chatOutputFG = GREEN;
chatInputFG = WHITE;
msgBoardFG = YELLOW;
msgBoardDateFG = LIGHTCYAN;
msgBoardNameFG = LIGHTRED;
msgBoardNameMeFG = YELLOW;
msgBoardTopicFG = LIGHTGRAY;
msgBoardTitleFG = LIGHTGREEN;
dynamicFrameFG = YELLOW;
alertFrameFG = BLACK;
menuFrameFG = BLACK;
menuBarFrameFG = LIGHTGREEN;
chatOutputChnMeFG = CYAN;
chatOutputChnYouFG = LIGHTCYAN;
chatOutputNickMeFG = YELLOW;
chatOutputNickYouFG = LIGHTRED;
chatOutputMsgMeFG = LIGHTGRAY;
chatOutputMsgYouFG = WHITE;
chanJoinFG = RED;
infoFrameAFG = LIGHTRED;
infoFrameBFG = BLACK;
infoFrameCFG = BLACK;
popUpFrameFG = WHITE;

//  MSG BOARD STRING CONDITIONAL FORMAT COLORS
var msgBoaoardToMeDateFG = LIGHTCYAN;
var msgBoaoardToMeDateBG = BG_BLACK;
var msgBoardnameToMeSenderNameFG = GREEN;
var msgBoardnameToMeSenderNameBG = BG_BLACK;
var msgBoardToMeTopicFG = WHITE;
var msgBoardToMeTopicBG = BG_BLACK;


//this draws the in the top right frame a menu and is mostly a stub for now as it's easy
function drawMenu()
{

	//menuFrame.load(menuFileLocation);
	//menuFrame.cycle();
	
}

function loadBanner() {
dynamicFrame.clear();
var random_list = directory(system.text_dir + "banner/banner*.*")
if(random_list.length){
dynamicFrame.load("../text/banner/" + file_getname(random_list[random(random_list.length)]).slice(0,-4) + ".txt");
//dynamicFrame.load("/sbbs/text/banner/banner1.txt");
dynamicFrame.scroll(0,-1);
dynamicFrame.cycle();
}
}
// neccessary to set up frames

if(!js.global.frame instanceof Frame)
	js.global.frame = new Frame();

// FRAME DECLARATIONS - declared here are all the frames and their settings
var xScreenColumns = console.screen_columns;
var yScreenRows = console.screen_rows;



var alertFrame = new Frame(
	x=		1,
	y=		1,
	width=	80,
	height=	1,
	attr= dynamicFrameBG|dynamicFrameFG
);
var chatOutputHeight = yScreenRows-11;

var chatOutput = new Frame(
	x=		1,
	y=		2,
	width=	40,
	height=	chatOutputHeight,
	attr= chatOutputBG|chatOutputFG
);

chatOutput.word_wrap = true;

var chatInputYpos = yScreenRows-9;

var chatInput = new Frame(
	x=		1,
	y=		chatInputYpos,
	width=	40,
	height=	4,
	attr= chatInputBG|chatInputFG
);
//chatInput.word_wrap = true;

var chatInputFeedback = new Frame(
	x=		1,
	y=		chatInputYpos + 4,
	width=	40,
	height=	1,
	attr= BG_BLACK|RED
);

	// ###### THIS DECLARATION LOOKS DECEIVING
var alertFrameYpos = yScreenRows-4;  // the nomenclature of the variables is screwy here because i changed the name of the frames but this should draw properly for dynamicFrame

var dynamicFrame = new Frame(
	x=		1,
	y=		alertFrameYpos,
	width=	40,
	height=	5,
	attr= alertFrameBG|alertFrameFG
);

var menuBarFrame = new Frame(
	x=		41,
	y=		yScreenRows-1,
	width=	40,
	height=	1,
	attr= menuBarFrameBG|menuBarFrameFG
);
var menuFrame = new Frame(
	x=		41,
	y=		3,
	width=	40,
	height=	13,
	attr= menuFrameBG|menuFrameFG
);
var infoFrameA = new Frame(
x=		41,
	y=		2,
	width=	40,
	height=	1,
	attr= infoFrameABG|infoFrameAFG
	)

	var infoFrameB = new Frame(
x=		41,
	y=		16,
	width=	40,
	height=	1,
	attr= infoFrameBBG|infoFrameBFG
	)
	

	
var subBoardFrameTitle = new Frame(
	x=		41,
	y=		17,
	width=	40,
	height=	1,
	attr= msgBoardTitleBG|msgBoardTitleFG
);


var subBoardFrameHeight = yScreenRows-19;

var subBoardFrame = new Frame(
	x=		41,
	y=		18,
	width=	40,
	height=	subBoardFrameHeight,
	attr= msgBoardBG|msgBoardFG
);
//var subBoardTreeFrame = new Frame(41,18,1,subBoardFrameHeight);

	var infoFrameC = new Frame(
	x=		41,
	y=		yScreenRows,
	width=	40,
	height=	1,
	attr= infoFrameCBG|infoFrameCFG
	);	


