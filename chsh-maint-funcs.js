// this file has a lot of functions for maintaining the frames
// refreshScreen and fixFrame are called often
// the other functions are mainly for first draws and initialization
load ("frame.js");

var menuOffChat = "\1h\1yType to chat or TAB to active Menu";
var menuOffInfo = "\1h\1bChatting. Press \1cTAB\1b for \1wMENU.";

function refreshScreen() {
	//randomANSI();
	//console.clear();
	//bbs.node_action=NODE_MAIN;
	console.clear();
	fixFrame();
	msgList(); 
	alertFrameInit();


		if (menuCtrl == 0) {
			chatInputFeedback.clear();
			chatInputFeedback.center(menuOffChat);
			infoFrameA.clear();
			infoFrameA.center(menuOffInfo);
			chatInputFeedback.cycle();
			}
	
	//console.gotoxy(1,1);
	initDraw();
	loadBanner();
	chatInput.cycle();
}

function fixFrame(){
	//subBoardTreeFrame.invalidate();
	subBoardFrame.invalidate();
	menuFrame.invalidate();
	menuBarFrame.invalidate();
	dynamicFrame.invalidate();
	chatInput.invalidate();
	chatOutput.invalidate();
	alertFrame.invalidate();
	subBoardFrameTitle.invalidate();
	infoFrameA.invalidate();
	infoFrameB.invalidate();
	infoFrameC.invalidate();
	chatInputFeedback.invalidate();
	subBoardFrameTitle.cycle();
}

function fixFrame2(){
	//subBoardTreeFrame.invalidate();
	subBoardFrame.invalidate();
	menuFrame.invalidate();
	menuBarFrame.invalidate();
	dynamicFrame.invalidate();
	chatInput.invalidate();
	chatOutput.invalidate();
	alertFrame.invalidate();
	subBoardFrameTitle.invalidate();
	infoFrameA.invalidate();
	infoFrameB.invalidate();
	infoFrameC.invalidate();
	chatInputFeedback.invalidate();

}
function closeFrame(){
	//subBoardTreeFrame.invalidate();
	subBoardFrame.close();
	menuFrame.close();
	menuBarFrame.close();
	dynamicFrame.close();
	chatInput.close();
	chatOutput.close();
	alertFrame.close();
	subBoardFrameTitle.close();
	infoFrameA.close();
	infoFrameB.close();
	infoFrameC.close();
	chatInputFeedback.close();
	subBoardFrameTitle.cycle();
}

function alertFrameInit() {
	infoFrameA.clear();
	//menuBarFrame.clear();
	chatInputFeedback.clear();
	menuBarFrame.center("<-L R-> arrow keys switch forum");
	infoFrameA.center(menuOffInfo);
	chatInputFeedback.center(menuOffChat);
	// Most of these Warning Frame msg's can be moved to a function
	infoFrameA.cycle();
}
function reDraw() { //this function is so ugly and just design to fix a bug without hopefully creating another one
	infoFrameA.draw();  
	infoFrameB.draw();
	infoFrameC.draw();
	subBoardFrame.draw();  // draw all the frames 
	menuFrame.draw();
	dynamicFrame.draw();
	chatOutput.draw();
	chatInput.draw();
	alertFrame.draw();
	//subBoardTreeFrame.draw();
	subBoardFrameTitle.draw();
	menuBarFrame.draw();
	chatInputFeedback.draw();
}	
// just some shit code to initialize the program outside of main() mostly related to frame dta

function firstDraw(){
menuBarFrame.cleartoeol();
menuBarFrame.center("USE ARROWS TO CHANGE FORUMS", menuBarFrameBG|menuBarFrameFG);
infoFrameA.clear();
infoFrameA.center("Press TAB to select menu", BG_BLACK|YELLOW);
infoFrameA.cycle();

}

function initDraw (){
	subBoardFrame.open();
	menuFrame.open();
	menuFrame.open();
	//subBoardTreeFrame.open();
	dynamicFrame.open();
	chatInput.open();
	chatOutput.open();
	alertFrame.open();
	menuBarFrame.open();
	subBoardFrameTitle.open();
	chatInputFeedback.open();
	infoFrameA.open();
	infoFrameB.open();
	infoFrameC.open();
	infoFrameA.draw();  
	infoFrameB.draw();
	infoFrameC.draw();
	subBoardFrame.draw();  // draw all the frames 
	menuFrame.draw();
	dynamicFrame.draw();
	chatOutput.draw();
	chatInput.draw();
	alertFrame.draw();
	subBoardFrameTitle.draw();
	menuBarFrame.draw();
	chatInputFeedback.draw();
	
//subBoardTreeFrame.draw(); 
	//drawMenu();
}

function userHelp(){
console.clear();
console.printfile("/sbbs/text/chshhelp.txt");
console.pause();
}


