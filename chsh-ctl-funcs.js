// THIS CONTAINS FUNCTIONS PERTAINING MOSTLY TO THE MENU CONTROL AND HOW IT
// WORKS WHEN IT'S ON AND WHEN IT TURNS OFF.
load("chsh-menu-func.js");


var menuOnInfo = "\1h\1yMenu is ACTIVE.";
var menuOnChat = "\1h\1bPress\1c TAB\1b to reactive Chat";

function switchOutMenu(){
		//loadBanner();
	dynamicFrame.cycle();
	infoFrameA.clear();
	
	infoFrameA.cycle();
				//menuBarFrame.cleartoeol();
				//menuBarFrame.center("CHAT MODE ON. MENU DISABLED\r", menuBarFrameBG|menuBarFrameFG);
				//menuBarFrame.cycle();
				alertFrameInit();
				menuCtrl = 0;
				chatInputFeedback.clear();
				chatInputFeedback.center(menuOffChat);
				chatInputFeedback.cycle();
				//tree.close();
				chatInput.gotoxy(1,3);
				alertFrame.cycle();
}
var caseDesc = new String;

load("tree.js");

var tree=new Tree(menuFrame,"My Menu");
tree.colors = {
		fg:BLACK,
		// non-current item/empty space background 
		bg:BG_LIGHTGRAY,
		// current item foreground
		lfg:WHITE,
		// current item background
		lbg:BG_BLACK,
		// current tree heading foreground
		cfg:MAGENTA,
		// current tree heading background
		cbg:BG_CYAN,
		// disabled item foreground
		dfg:DARKGRAY,
		// hotkey foreground
		kfg:MAGENTA,
		// tree branch foreground
		tfg:BLUE,
		// tree heading foreground
		hfg:BLACK,
		// tree heading background
		hbg:BG_LIGHTGRAY,
		// tree expansion foreground
		xfg:LIGHTCYAN
	}
tree.addItem("TAB switches menu and Chat",switchOutMenu);
tree.addItem("interface help|?",shellHelp);
tree.addItem("random piece of |art",randomArt);
tree.addItem("e-|mail and messages", netMailSection);


var forumTree = tree.addTree("|forums");
	forumTree.addItem("message|lister",digdistML);
	forumTree.addItem("|post msg in this forum",forumPost);
	forumTree.addItem("|jump to another forum",jumpForum);
	forumTree.addItem("|browse new messages",browseNewMsgs);
	forumTree.addItem("scan for msgs 2 |you",msgsForYou);
	
	forumTree.addItem("|search for text",findTextInForum);
	forumTree.addItem("|threaded message viewer",ecReader);
	forumTree.addItem("t|radtional bbs message reader",traditionalForum);
	forumTree.addItem("|new message scan",newMsgScan);

var gameTree = tree.addTree("|games",switchOutMenu);

	var classicDoorTree = gameTree.addTree("|old school classics")
		classicDoorTree.addItem("|trade wars 2002",tradeWars);
		classicDoorTree.addItem("|legend of the red dragon",lordBLink);
		classicDoorTree.addItem("|2 l.o.r.d. II",lord2BLink);
				classicDoorTree.addItem("|pimp wars",pimpBLink);
		classicDoorTree.addItem("|planet t.e.o.s.",teosBLink);
		classicDoorTree.addItem("|operation overkill ii",overkillBLink);
classicDoorTree.addItem("lunati|x",lunatix);
classicDoorTree.addItem("|bbs crash",bbsCrash);
			classicDoorTree.addItem("|oregon trail(in Games Section", xtrnMenuSec);

	

	var coaTree = gameTree.addTree("|new school games");
		coaTree.addItem("Doubles aka |2048",doublesGame)
		coaTree.addItem("|star stocks",starStocks);
		coaTree.addItem("|dice wars",diceWars);
		coaTree.addItem("star |trek",starTrek);
		coaTree.addItem("|uberblox",uberBloxDoor);
		coaTree.addItem("|fat fish",fatFish);
		coaTree.addItem("|chickenDelivery",chickenDelivery);
		coaTree.addItem("|bubble boggle",bubbleBoggle);
		coaTree.addItem("synchrone|tris",synchronetris);
		coaTree.addItem("|word em",wordEm);
		coaTree.addItem("thirsty|ville",thirstyVille);
		coaTree.addItem("ma|ze race",mazeRace);
	
		
		
	gameTree.addItem("|more external programs(unorganized)",xtrnMenuSec)
var portalTree =  tree.addTree("|portals");
var bbsTree = portalTree.addTree("|bbs's");
bbsTree.addItem("p|hunc \1wsister bbs", phunc);
bbsTree.addItem("|fatcats", fatcats);
bbsTree.addItem("b|roken bubble", brokenBubble);
bbsTree.addItem("electronic |chicken", eChicken);
bbsTree.addItem("|pharcyde", pharcyde);
bbsTree.addItem("|digital distortion", digitalDistortion);
var otherPortalTree = portalTree.addTree("|more portals")
otherPortalTree.addItem("uni|x environment 'nyx.net'",unixEnv);

	


var chatTree = tree.addTree("Internet Relay |Chat");
	chatTree.addItem("bbs scene IRC|1",bbsScene);
	chatTree.addItem("free node IRC|2",freeNode);
	chatTree.addItem("efnet IRC|3",efNet);
	chatTree.addItem("undernet IRC|4",undernet);
	chatTree.addItem("german IRC|5",germanIRC);
	chatTree.addItem("quakeNet IRC|6",quakeNet);
	chatTree.addItem("rizon IRC|7",rizon);
	chatTree.addItem("uStream IRC|8",uStream);
	
var userTree = tree.addTree("|user lists and matchmaking");
	userTree.addItem("|list of users",userLister);
	userTree.addItem("|match maker",synchroMM);

var bbsFunctionTree = tree.addTree("|bbs functions");
	bbsFunctionTree.addItem("|default user settings",defaultUser);
	bbsFunctionTree.addItem("|information & statistics on bbs",bbsInfoStat);
	bbsFunctionTree.addItem("|node activity log",listNodeActivity);
	bbsFunctionTree.addItem("bbs |auto message",autoMsg);
	bbsFunctionTree.addItem("interbbs |ANSI machine",ansiWall);
if(user.compare_ars("SYSOP or EXEMPT Q or I or N") || (bbs.sys_status&SS_TMPSYSOP)) {  //Sysop menu
bbsFunctionTree.addItem("s|ysop menu", sysopMenu);
}
tree.addItem("|logoff",logoffTheBBS);
tree.addItem("|page sysop",bbs.page_sysop);

tree.open();

function menuControl()
{
  // for Command Confirm to describe the item etc before exiting the loop
	//dynamicFrame.putmsg(bbs.get_telgram());
	//loadBanner();
	tree.open();
	dynamicFrame.cycle();
	//menuBarFrame.clear();
	//menuBarFrame.center("MENU MODE IS ON-TAB to EXIT\r", menuBarFrameBG|menuBarFrameFG);// THIS NEEDS FIXING WITH REGARDS TO MAYBE LOADING IN ANSI AS OPPOSE TO THE GHETOO PUT MESSAGES
	infoFrameA.clear();
	infoFrameA.center(menuOnInfo, BG_BLACK);
	chatInputFeedback.clear();
	chatInputFeedback.center(menuOnChat);
	chatInputFeedback.cycle();
	infoFrameA.cycle();
	//drawMenu();  // this looks extraneous
	var menuTimer = new Timer();
	var switchEvent = menuTimer.addEvent(2000,1,chat.cycle);
	//menuBarFrame.cycle();
	tickerTimer.cycle();
	bannerTimer.cycle();
		while(menuCtrl == 1)
				{
			menuTimer.cycle();
			chat.cycle();
			chatOutput.cycle();
			var k2 = console.inkey();
			// this variable is called k2 because it represents a similar function to k in chatMain()
			if(k2 == "\t") {
			switchOutMenu();
			}
			tree.getcmd(k2);
			tree.cycle();	
			if(k2 == KEY_RIGHT || k2 == KEY_LEFT || k2 == ctrl('S'))
			{
				if(k2 == KEY_RIGHT) {
						msgSwitch = "nextSub";
						switchMsgAreas();
						chatInputClear();
						//break;
						}
						if(k2 == KEY_LEFT) {
						chatInputClear();
						msgSwitch = "prevSub";
						switchMsgAreas();
						//break;
						}
				if(k2 == ctrl('S')) {
				refreshScreen();		
				}
				//if(k2 == ctrl('K') || k2 == ctrl('P') || k2 == ctrl('T')|| k2 == ctrl('U')) {
				//break;		
				//}
}
}
}
		
// ###################### COMMAND CONFIRMATION ##########
// expand to local variable with case description (caseDesc) to confirm menus and clear screen
var confirmationRelay = 0;

function commandConfirm() 
{
	k2 = "{"; // setting the command variable to an unused value in case the program tries to run twice
	infoFrameA.clear();
	//console.clear();
	//randomANSI();
	//console.gotoxy(1,1);
	
	var popUpFrame = new Frame(
			x=		console.screen_columns/4,
			y=		parseInt(console.screen_rows/6),
			width=	console.screen_columns/2,
			height=	parseInt(console.screen_rows/2),
			attr= popUpFrameBG|popUpFrameFG,
			parent=	js.global.frame
	);
	
	popUpFrame.open();
	popUpFrame.center(caseDesc);
	popUpFrame.draw();
	cursorPosX = parseInt(console.screen_rows/4) * 3 + 5;
	cursorPosY = parseInt(console.screen_rows/6) * 4;
	console.gotoxy(cursorPosX,cursorPosY);
	console.pause();
	//popUpFrame.attr(BG_LIGHTGRAY|BLACK);
	//popUpFrame.invalidate();
	//popUpFrame.open();
	//popUpFrame.clear();
	//popUpFrame.draw();
	//ms_wait(250);
	//noise(popUpFrame,100,["!","@","#","$","%","&","?","*"],[YELLOW,GREEN,LIGHTMAGENTA,LIGHTCYAN,LIGHTRED,LIGHTGREEN,LIGHTBLUE,RED]);
	//ms_wait(2500);
	console.clear();
console.printfile("../text/fl_load.ans");
	console.clear();
//console.pause();
	
	}
	//menuCtrl = 0;
	
	/*
	var confirm = console.yesno("Press Enter/Yes to proceed or No to exit");
	if(confirm == false)
	{
	continue resumeMainLabel;
	}	
	*/



//  ############################### E-mail Section ################################

function email()
{
	var key;
	var i;
	while(1) {
		if(!(user.settings & USER_EXPERT))
			bbs.menu("e-mail");

		// async

		console.print("\r\nyhE-mail: n");
		key=get_next_keys("?SRFNUKQ\r");
		bbs.log_key(key);
		switch(key) {
			case '?':
				if(user.settings & USER_EXPERT)
					bbs.menu("e-mail");
				break;

			case 'S':
				console.print("_\r\nbhE-mail (User name or number): w");
				str=get_next_str("",40,K_UPRLWR,false);
				if(str==null || str=="")
					break;
				if(str=="Sysop")
					str="1";
				if(str.search(/\@/)!=-1)
					bbs.netmail(str);
				else {
					i=bbs.finduser(str);
					if(i>0)
						bbs.email(i,WM_EMAIL);
				}
				break;

			case 'U':
				console.print("_\r\nbhE-mail (User name or number): w");
				str=get_next_str("",40,K_UPRLWR,false);
				if(str==null || str=="")
					break;
				if(str=="Sysop")
					str="1";
				if(str.search(/\@/)!=-1)
					bbs.netmail(str,WM_FILE);
				else {
					i=bbs.finduser(str);
					if(i>0)
						bbs.email(i,WM_EMAIL|WM_FILE);
				}
				break;

			case 'R':
				bbs.read_mail(MAIL_YOUR);
				break;

			case 'F':
				bbs.email(1,WM_EMAIL,bbs.text(ReFeedback));
				break;

			case 'N':
				if(console.noyes("\r\nAttach a file"))
					i=WM_FILE;
				else
					i=0;
				console.putmsg(bbs.text(EnterNetMailAddress),P_SAVEATR);
				str=get_next_str("",60,K_LINE,false);
				if(str!=null && str !="")
					bbs.netmail(str,i);
				break;

			case 'K':
				bbs.read_mail(MAIL_SENT);
				break;

			case 'Q':
			default:
				return;
		}
	}
	return
}

//############################ Main Info Section	###############################

function main_info()
{
	var key;

	while(1) {
		if(!(user.settings & USER_EXPERT))
			bbs.menu("maininfo");

		// async

		console.print("\r\nyhInfo: n");
		key=get_next_keys("?QISVY\r");
		bbs.log_key(key);
		switch(key) {
			case '?':
				if(user.settings & USER_EXPERT)
				bbs.menu("maininfo");
				break;

			case 'I':
				bbs.sys_info();
				break;

			case 'S':
				bbs.sub_info();
				break;

			case 'Y':
				bbs.user_info();
				break;

			case 'V':
				bbs.ver();
				break;

			case 'Q':
			default:
				return;
		}
	}
}

//########################### Main Config Section  ##############################

function main_cfg()
{
	var key;
	var sub;

	while(1) {
		if(!(user.settings & USER_EXPERT))
			bbs.menu("maincfg");
		
		// async
		console.print("\r\nyhConfig: n");
		key=get_next_keys("?QNPIS\r");
		bbs.log_key(key);

		switch(key) {
			case '?':
				if(user.settings & USER_EXPERT)
					bbs.menu("maincfg");
				break;

			case 'N':
				bbs.cfg_msg_scan(SCAN_CFG_NEW);
				break;

			case 'S':
				bbs.cfg_msg_scan(SCAN_CFG_TOYOU);
				break;

			case 'P':
				bbs.cfg_msg_ptrs();
				break;

			case 'I':
				bbs.reinit_msg_ptrs();
				break;

			default:
				return;
		}
	}
}	
