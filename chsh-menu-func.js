function logoffTheBBS(){
console.printfile("../text/logoff.msg");
bbs.hangup();
}
function bbsScene() {
	caseDesc = "IRC NETWORK";
			commandConfirm();

			bbs.exec_xtrn("BBSSCENE");
		
			refreshScreen();
			return;
			}
			function freeNode() {
	caseDesc = "IRC NETWORK";
			commandConfirm();

			bbs.exec_xtrn("FREENODE");
		
			refreshScreen();
			return;
			}
function efNet() {
	caseDesc = "IRC NETWORK";
			commandConfirm();

			bbs.exec_xtrn("EFNET");
		
			refreshScreen();
			return;
			}
function germanIRC() {
	caseDesc = "IRC NETWORK";
			commandConfirm();

			bbs.exec_xtrn("GERMANIR");
		
			refreshScreen();
			return;
			}
function quakeNet() {
	caseDesc = "IRC NETWORK";
			commandConfirm();

			bbs.exec_xtrn("QUAKENET");
		
			refreshScreen();
			return;
			}
function rizon() {
	caseDesc = "IRC NETWORK";
			commandConfirm();

			bbs.exec_xtrn("RIZON");
		
			refreshScreen();
			return;
			}
function undernet() {
	caseDesc = "IRC NETWORK";
			commandConfirm();

			bbs.exec_xtrn("UNDERNET");
		
			refreshScreen();
			return;
			}
function uStream() {
	caseDesc = "IRC NETWORK";
			commandConfirm();

			bbs.exec_xtrn("USTREAM");
		
			refreshScreen();
			return;
			}
function netMailSection() {
	caseDesc = "\1yE\1c-mail";
			commandConfirm();
			
			email();
			refreshScreen();
			
			return;
			}
			
function jumpForum() {
caseDesc = "Change message Areas";
			commandConfirm();
			load("../xtrn/ddac_105/DDMsgAreaChooser.js")
			refreshScreen();
			return;
}

function browseNewMsgs() {
			caseDesc = "\1yB\1crowse New Messages";
			commandConfirm();
			console.print("\r\nchBrowse/New Message Scan\r\n");
			bbs.scan_subs(SCAN_NEW|SCAN_BACK);
			refreshScreen();
			return;
			}
			
function newMsgScan() {
	caseDesc = "\1yN\1cew Message Scan";
			commandConfirm();
			console.print("\r\nchNew Message Scan\r\n");
			bbs.scan_subs(SCAN_NEW);
			refreshScreen();
			return;
}

function msgsForYou(){
		caseDesc = "\1yY\1cour messages";
			commandConfirm();
			console.print("\r\nchScan for Messages Posted to You\r\n");
			bbs.scan_subs(SCAN_TOYOU);
			refreshScreen();
			return;
			}
function ecReader() {
	caseDesc = "Electronic chickens threaded message viewer (sometimes buggy)";
			commandConfirm();
			//load("../xtrn/ecreader/ecReader.js")
			bbs.exec_xtrn("ECREADER")
			// console.print("\r\nchContinuous New Message Scan\r\n");
			// bbs.scan_subs(SCAN_NEW|SCAN_CONST);
			refreshScreen();
			return;
			}
function digdistML(){
caseDesc = "Digital distortions message viewer (more stable not threaded)";
			commandConfirm();
			//load("../xtrn/ddm136/DigitalDistortionMessageLister.js")
			bbs.exec_xtrn("DDML")
			// console.print("\r\nchContinuous New Message Scan\r\n");
			// bbs.scan_subs(SCAN_NEW|SCAN_CONST);
			refreshScreen();
			return;
			}
function traditionalForum() {
	caseDesc = "\1yR\1cead Forums";
			commandConfirm();
			bbs.scan_posts();
			refreshScreen();
			return;
			}
			
	
	function autoMsg() {
			caseDesc = "\1yA\1cuto BBS Message";
			commandConfirm();
			bbs.auto_msg();
			refreshScreen();
			return;
}
	function fatcats() {
			caseDesc = "Fat cats BBS uses an innovative interface and is part of the COA network";
			commandConfirm();
			bbs.exec_xtrn("FATCATS");
			refreshScreen();
			return;
}
	function brokenBubble() {
			caseDesc = "The broken bubble is also part of COA, and has some innovative features, cool demos and a message base that discusses some of the things this BBS collective has been doing";
			commandConfirm();
			bbs.exec_xtrn("BROKEBUB");
			refreshScreen();
			return;
}
	function eChicken() {
			caseDesc = "Electronic chicken has made many things for the BBS scene, and you can check out his BBS here.  A good example of a well done BBS.";
			commandConfirm();
			bbs.exec_xtrn("ECHICKEN");
			refreshScreen();
			return;
}

	function pharcyde() {
			caseDesc = "Pharcyde maintains an active message network, AgoraNet, echoed here, as well as some gaming leagues.";
			commandConfirm();
			bbs.exec_xtrn("PHARCYDE");
			refreshScreen();
			return;
}

	function digitalDistortion() {
			caseDesc = "Nightfox runs Digital Distortion, which has some customized features, which seem to be shared with the community.";
			commandConfirm();
			bbs.exec_xtrn("DIGDIST");
			refreshScreen();
			return;
}
	function phunc() {
			caseDesc = "Our buddy Knight's new BBS launched 4/2014 watch it grow";
			commandConfirm();
			bbs.exec_xtrn("PHUNCBBS");
			refreshScreen();
			return;
}
	function tradeWars() {
			caseDesc = "One of the sysops personal favorites, the classic Space Trading Games";
			commandConfirm();
			bbs.exec_xtrn("TWBBSLK");
			refreshScreen();
			return;
}

	function randomArt() {
			caseDesc = "Enjoy some futuristic graffiti";
			commandConfirm();
			randomANSI();
			console.putmsg("\r\n\ *** !!! ***r\n\1h\1yEND \1cOF \1gARtWoRK \1rEND \1wOF \1mARtWoRK \1bEND  \1n\1yOF \1gARtWoRK\r\n\r\n\1h\1y                 come back and visit the gallery \1gANY \1mTIME\1r!!!!\r\n\r\n");
			console.pause();
			
			refreshScreen();
			return;
			}
	function oregonTrail() {
			caseDesc = "This is an unfinished project of an attempt to port \r\n some ancient BASIC code to javascript";
			commandConfirm();
			//js.global.frame.close();
			fixFrame2();
			console.clear();
			bbs.exec_xtrn("OREGONTR");
			refreshScreen();
			return;
}

	function lordDoor() {
			caseDesc = "Everyone loves LORD, so many spin-offs, the original starts here";
			commandConfirm();
			bbs.exec_xtrn("LORD");
			refreshScreen();
			return;
}
	function lord2Door() {
			caseDesc = "Everyone loves LORD,\r\n here's the graphical sequel";
			commandConfirm();
			bbs.exec_xtrn("LORDII");
			refreshScreen();
			return;
}

	function foodFight() {
			caseDesc = "A door game about Food Fighting Duh!  another staple";
			commandConfirm();
			bbs.exec_xtrn("FOODFITE");
			refreshScreen();
			return;
}

	function thePit() {
			caseDesc = "Become the best Gladiator in  the World \r\n It helps to have a numeric keypad";
			commandConfirm();
			bbs.exec_xtrn("THEPIT");
			refreshScreen();
			return;
}

function mechWars(){
caseDesc = "BUILD a MECH \r\n and TAKE OVER THE UNIVERSE";
			commandConfirm();
			bbs.exec_xtrn("MECHWARS");
			refreshScreen();
			return;
}

function beastsDomain(){
caseDesc = "TAKE DOWN THE BEAST";
			commandConfirm();
			bbs.exec_xtrn("TBD");
			refreshScreen();
			return;
}
function falconEye(){
caseDesc = "The falcon's EYE is quicker \r\n than the falcon's HAND";
			commandConfirm();
			bbs.exec_xtrn("FALCONEY");
			refreshScreen();
			return;
} 
function planetTeos(){
caseDesc = "Explore Space and destroy time";
			commandConfirm();
			bbs.exec_xtrn("PLANETEO");
			refreshScreen();
			return;
}
function dragonsHoard(){
caseDesc = "That dragon got too much shit \r\n take it back motherfucker!!";
			commandConfirm();
			bbs.exec_xtrn("DHOARD");
			refreshScreen();
			return;
}

function doorMud(){
caseDesc = "This is not dirt mixed with water.. \r\n MUD=Multi-User Dungeon";
			commandConfirm();
			bbs.exec_xtrn("MECHWARS");
			refreshScreen();
			return;
}
function doublesGame(){
caseDesc = "You are a DOG \r\n Give bitches bones and \r\n make puppies and shit and piss\rn\ in da house!!!";
			commandConfirm();
			bbs.exec_xtrn("DOUBLES");
			refreshScreen();
			return;
}

function dogWorld(){
caseDesc = "You are a DOG \r\n Give bitches bones and \r\n make puppies and shit and piss\rn\ in da house!!!";
			commandConfirm();
			bbs.exec_xtrn("DOGWORLD");
			refreshScreen();
			return;
}

	function starStocks() {
			caseDesc = "This is a very addictive game if you ask Larry Lagomorph!";
			commandConfirm();
			bbs.exec_xtrn("STARSTOX");
			refreshScreen();
			return;
}
	function diceWars() {
			caseDesc = "A very fun game where you roll dice for world domination!";
			commandConfirm();
			bbs.exec_xtrn("DICEWAR2");
			refreshScreen();
			return;
}

	function starTrek() {
			caseDesc = "An awesome demonstration of pushing the limit of text based sprite gaming";
			commandConfirm();
			bbs.exec_xtrn("STARTREK");
			refreshScreen();
			return;
}
	function uberBloxDoor() {
			caseDesc = "An addictive puzzle game like no other!";
			commandConfirm();
			bbs.exec_xtrn("UBERBLOX");
			refreshScreen();
			return;
}

	function chickenDelivery() {
			caseDesc = "DELIVER THE CHICKEN TO SAFETY, QUICK!";
			commandConfirm();
			bbs.exec_xtrn("CHICKEND");
			refreshScreen();
			return;
}

	function fatFish() {
			caseDesc = "This game is a pretty sweet\r\n fishing simulator, very challenging!";
			commandConfirm();
			bbs.exec_xtrn("FATFISH");
			refreshScreen();
			return;
}

	function lordBLink() {
			caseDesc = "The classic door game, registered and with multi-BBS support without sacrificing core gameplay!";
			commandConfirm();
			bbs.exec_xtrn("LORDBLNK");
			refreshScreen();
			return;
}
	function lord2BLink() {
			caseDesc = "The graphical sequel to LORD, very different and cool";
			commandConfirm();
			bbs.exec_xtrn("LRD2BLNK");
			refreshScreen();
			return;
}
	function teosBLink() {
			caseDesc = "A cross between TradeWars and LORD";
			commandConfirm();
			bbs.exec_xtrn("TEOSBLNK");
			refreshScreen();
			return;
}
	function overkillBLink() {
			caseDesc = "Operation Overkill";
			commandConfirm();
			bbs.exec_xtrn("OOK2BLNK");
			refreshScreen();
			return;
}
	function pimpBLink() {
			caseDesc = "Play a Pimp, linked across other boards for more activity.";
			commandConfirm();
			bbs.exec_xtrn("PIMPBLNK");
			refreshScreen();
			return;
}

	function bubbleBoggle() {
	
			caseDesc = "INTER BBS BOGGLE CHALLENGE";
			commandConfirm();
			bbs.exec_xtrn("BOGGLE");
			refreshScreen();
			return;
}

	function synchronetris() {
	
			caseDesc = "multi-player network \r\n improved tetris";
			commandConfirm();
			bbs.exec_xtrn("TETRIS");
			refreshScreen();
			return;
}

	function wordEm() {
	
			caseDesc = "SCRABBLE WITH OTHER BBS PLAYERS";
			commandConfirm();
			bbs.exec_xtrn("WORDEM");
			refreshScreen();
			return;
}

	function mazeRace() {
	
			caseDesc = "Maze Race";
			commandConfirm();
			bbs.exec_xtrn("MAZERACE");
			refreshScreen();
			return;
}
	function thirstyVille() {
	
			caseDesc = "QUENCH THE THIRSTY OF \r\n virtual creatures \r\n with your love juices \r\n and entrepeneurship";
			commandConfirm();
			bbs.exec_xtrn("THIRSTY");
			refreshScreen();
			return;
}
	function unixEnv() {
	
			caseDesc = "This is a portal to a unix Environment, you will have to be approved for an account by a third party (nyx.nyx.net before using this feature";
			commandConfirm();
			bbs.exec_xtrn("NYXNYX");
			refreshScreen();
			return;
}
function internetRelayChat() {
	caseDesc = "\1yC\1chat Section";
			commandConfirm();
			load("chat_sec.js");
			refreshScreen();
			return;
			}
function ansiWall() {
caseDesc = "INTER BBS ANSI GRAPHICS WALL";
			commandConfirm();
			bbs.exec_xtrn("SYNCWALL");
			refreshScreen();
			return;
}
function synchroMM() {
caseDesc = "FIND THE LOVE OF YOUR LIFE... if it's a fat loser dude hehe";
			commandConfirm();
			bbs.exec_xtrn("SMM");
			refreshScreen();
			return;
}

function userLister(){
caseDesc = "\1yU\1cserlist Display";
			commandConfirm();
			console.print("\r\nchList Users\r\n");
			console.mnemonics("\r\n~Logons Today, ~Sub-board, or ~All: ");
			switch(get_next_keys("LSA",false)) {
				case 'L':
					bbs.list_logons();
					refreshScreen();
					return;
				case 'S':
					bbs.list_users(UL_SUB);
					refreshScreen();
					return;
				case 'A':
					bbs.list_users(UL_ALL);
					refreshScreen();
					return;
			}
		}

function defaultUser() {
	caseDesc = "\1yD\1cefault User Settings";
			commandConfirm();
			bbs.user_config();
			refreshScreen();
			return;
		}
		
function bbsInfoStat() {
	caseDesc = "\1yI\1cnfo for this BBS";
			commandConfirm();
			main_info();
			refreshScreen();
			return;
}
		
function findTextInForum() {
	caseDesc = "\1yF\1cind Text in Message Groups/Forums";
			commandConfirm();
			console.print("\r\nchFind Text in Messages\r\n");
			bbs.scan_subs(SCAN_FIND);
			refreshScreen();
			return;		
		}
function xtrnMenuSec(){
caseDesc = "\1ce\1yX\1ctra SPECIAL FUN";
			commandConfirm();
			bbs.xtrn_sec();
			refreshScreen();
			return;
		}
		
		function listNodeActivity() {
			caseDesc = "\1yL\1cist Node Activity";
			commandConfirm();
			bbs.list_nodes();
			refreshScreen();
			return;
			}
function forumPost() {
caseDesc = "\1yP\1cost a Message";
			commandConfirm();
			bbs.post_msg();
			refreshScreen();
			return;
			}

function shellHelp() {
caseDesc = "user help";
			commandConfirm();
			userHelp();
			refreshScreen();
			return;
		}
			
		/*
		case 'B':
			

		case 'C':
		

		case 'D':
		

		case 'E':
		

		case 'F':
			caseDesc = "\1yF\1cind Text in Message Groups";
			commandConfirm();
			console.print("\r\nchFind Text in Messages\r\n");
			bbs.scan_subs(SCAN_FIND);
			refreshScreen();
			return;
		case '/T':
			caseDesc = "\1yF\1cind Text in Message Groups";
			commandConfirm();
			bbs.scan_subs(SCAN_FIND,true);
			refreshScreen();
			return;

		case 'T':
			caseDesc = "\1yG\1chetto Text Section";
			commandConfirm();
			bbs.text_sec();
			refreshScreen();
			return;

		case 'I':
		

		case 'Q':
			caseDesc = "\1yJ\1cump to Another Forum";
			commandConfirm();
			if(!msg_area.grp_list.length)
				refreshScreen();
			while(1) {
				var orig_grp=bbs.curgrp;
				var i=0;
				var j=0;
				if(msg_area.grp_list.length>1) {
					if(file_exists(system.text_dir+"menu/grps.*"))
						bbs.menu("grps");
					else {
						console.putmsg(bbs.text(CfgGrpLstHdr),P_SAVEATR);
						for(i=0; i<msg_area.grp_list.length; i++) {
							if(i==bbs.curgrp)
								console.print('*');
							else
								console.print(' ');
							if(i<9)
								console.print(' ');
							if(i<99)
								console.print(' ');
							console.putmsg(format(bbs.text(CfgGrpLstFmt),i+1,msg_area.grp_list[i].description),P_SAVEATR);
						}
					}
					console.mnemonics(format(bbs.text(JoinWhichGrp),bbs.curgrp+1));
					j=get_next_num(msg_area.grp_list.length,false);
					if(j<0)
						refreshScreen();
					if(!j)
						j=bbs.curgrp;
					else
						j--;
				}
				bbs.curgrp=j;
				if(file_exists(system.text_dir+"menu/subs"+(bbs.curgrp+1)))
					bbs.menu("subs"+(bbs.curgrp+1));
				else {
					commandConfirm();
					console.putmsg(format(bbs.text(SubLstHdr), msg_area.grp_list[j].description),P_SAVEATR);
					for(i=0; i<msg_area.grp_list[j].sub_list.length; i++) {
						var msgbase=new MsgBase(msg_area.grp_list[j].sub_list[i].code);
						if(msgbase==undefined)
							continue;
						if(!msgbase.open())
							continue;
						if(i==bbs.cursub)
							console.print('*');
						else
							console.print(' ');
						if(i<9)
							console.print(' ');
						if(i<99)
							console.print(' ');
						console.putmsg(format(bbs.text(SubLstFmt),i+1, msg_area.grp_list[j].sub_list[i].description,"",msgbase.total_msgs),P_SAVEATR);
						msgbase.close();
					}
				}
				console.mnemonics(format(bbs.text(JoinWhichSub),bbs.cursub+1));
				i=get_next_num(msg_area.grp_list[j].sub_list.length,false);
				if(i==-1) {
					if(msg_area.grp_list.length==1) {
						bbs.curgrp=orig_grp;
						refreshScreen();
					}
					continue;
				}
				if(!i)
					i=bbs.cursub;
				else
					i--;
				bbs.cursub=i;
				refreshScreen();
				return;
}
		case 'L':
			caseDesc = "\1yL\1cist Node Activity";
			commandConfirm();
			bbs.list_nodes();
			refreshScreen();
			return;

		case 'B':
			caseDesc = "\1yM\1canage Time Bank";
			commandConfirm();
			bbs.time_bank();
			refreshScreen();
			return;

		case 'N':
		

		case '/N':
			caseDesc = "\1yN\1cew Message Scan";
			commandConfirm();
			bbs.scan_subs(SCAN_NEW,true);
			refreshScreen();
			return;

		case 'K':
			caseDesc = "\1yBK\1cill Session \1r\1h  WARNING THIS WILL LOG YOU OFF!";
			commandConfirm();
			if(bbs.batch_dnload_total) {
				if(console.yesno(bbs.text(DownloadBatchQ))) {
					bbs.batch_download();
					bbs.logoff();
					refreshScreen();
					return;
				}
			}
			else
				bbs.logoff();
				refreshScreen();
				
			return;

		case '/O':
			commandConfirm();
			if(bbs.batch_dnload_total) {
				if(console.yesno(bbs.text(DownloadBatchQ))) {
					bbs.batch_download();
					bbs.hangup();
				}
			}
			else
				bbs.hangup();
				refreshScreen();
			return;

		case 'P':
			

		/*case 'Q':	
			caseDesc = "\1yQ\1cWK PACKET SECTION";
			commandConfirm();
			bbs.qwk_sec();
			refreshScreen();
		return;

		case 'R':
			caseDesc = "\1yR\1cead Forums";
			commandConfirm();
			bbs.scan_posts();
			refreshScreen();
			return;

		case 'Y':
			caseDesc = "\1yY\1cour messages";
			commandConfirm();
			console.print("\r\nchScan for Messages Posted to You\r\n");
			bbs.scan_subs(SCAN_TOYOU);
			refreshScreen();
			return;

		case '/S':
			caseDesc = "\1yS\1ccan for Messages To You";
			commandConfirm();
			console.print("\r\nchScan for Messages Posted to You\r\n");
			bbs.scan_subs(SCAN_TOYOU,true);
			refreshScreen();
			return;

		case 'U':
			caseDesc = "\1yU\1cserlist Display";
			commandConfirm();
			console.print("\r\nchList Users\r\n");
			console.mnemonics("\r\n~Logons Today, ~Sub-board, or ~All: ");
			switch(get_next_keys("LSA",false)) {
				case 'L':
					bbs.list_logons();
					refreshScreen();
					return;
				case 'S':
					bbs.list_users(UL_SUB);
					refreshScreen();
					return;
				case 'A':
					bbs.list_users(UL_ALL);
					refreshScreen();
					return;
			}
			// fall-through for CR, Ctrl-C, etc
			refreshScreen();
			return;

		case '/U':
			caseDesc = "\1yU\1cserlist Display (Entire)";
			commandConfirm();
			bbs.list_users(UL_ALL);
			refreshScreen();
			return;
			
		case 'G':
			

		case 'V':
			caseDesc = "\1yV\1ciew messages in Forum";
			commandConfirm();
			//load("../xtrn/ecreader/ecReader.js")
			bbs.exec_xtrn("ECREADER")
			// console.print("\r\nchContinuous New Message Scan\r\n");
			// bbs.scan_subs(SCAN_NEW|SCAN_CONST);
			refreshScreen();
			return;
			
			case '/F':
			caseDesc = "FILE TRANSFER";
			commandConfirm();
			load("../xtrn/ddac_105/DDFileAreaChooser.js")
			refreshScreen();
			return;
			
			case 'J':
			caseDesc = "Change message Areas";
			commandConfirm();
			load("../xtrn/ddac_105/DDMsgAreaChooser.js")
			refreshScreen();
			return;

		case '/Z':
			caseDesc = "\1yZ\1cooming Messing Scan";
			commandConfirm();
			bbs.scan_subs(SCAN_NEW|SCAN_CONST,true);
			refreshScreen();
			return;

		case '*':
			caseDesc = "\1yZ\1cooming Messing Scan";
			commandConfirm();
			if(!msg_area.grp_list.length)
				refreshScreen();
				return;
			if(file_exists(system.text_dir+"menu/subs"+(bbs.cursub+1)))
				bbs.menu("subs"+(bbs.cursub+1));
			else {
				var i;

				console.clear();
				console.putmsg(format(bbs.text(SubLstHdr), msg_area.grp_list[bbs.curgrp].description),P_SAVEATR);
				for(i=0; i<msg_area.grp_list[bbs.curgrp].sub_list.length; i++) {
					var msgbase=new MsgBase(msg_area.grp_list[bbs.curgrp].sub_list[i].code);
					if(msgbase==undefined)
						continue;
					if(!msgbase.open())
						continue;
					if(i==bbs.cursub)
						console.print('*');
					else
						console.print(' ');
					if(i<9)
						console.print(' ');
					if(i<99)
						console.print(' ');
					console.putmsg(format(bbs.text(SubLstFmt),i+1, msg_area.grp_list[bbs.curgrp].sub_list[i].description,"",msgbase.total_msgs),P_SAVEATR);
					msgbase.close();
				}
			}
			return;

		case '/*':
			caseDesc = "\1yZ\1cooming Messing Scan";
			commandConfirm();
			if(msg_area.grp_list.length) {
				var i=0;
				if(file_exists(system.text_dir+"menu/grps.*"))
					bbs.menu("grps");
				else {
					console.putmsg(bbs.text(GrpLstHdr),P_SAVEATR);
					for(i=0; i<msg_area.grp_list.length; i++) {
						if(i==bbs.curgrp)
							console.print('*');
						else
							console.print(' ');
						if(i<9)
							console.print(' ');
						if(i<99)
							console.print(' ');
						// We use console.putmsg to expand ^A, @, etc
						console.putmsg(format(bbs.text(GrpLstFmt),i+1,msg_area.grp_list[i].description,"",msg_area.grp_list[i].sub_list.length),P_SAVEATR);
					}
				}
			}
			refreshScreen();
			return;

		case '&':
			caseDesc = "\1yZ\1cooming Messing Scan";
			commandConfirm();
			main_cfg();
			refreshScreen();
			return;

		case '#':
			caseDesc = "\1yZ\1cooming Messing Scan";
			commandConfirm();
			console.print("\r\nchType the actual number, not the symbol.\r\n");
			refreshScreen();
			return;

		case '/#':
			caseDesc = "\1yZ\1cooming Messing Scan";
			commandConfirm();
			console.print("\r\nchType the actual number, not the symbol.\r\n");
			refreshScreen();
			return;
			
			case 'H':
			caseDesc = "user help";
			commandConfirm();
			userHelp();
			refreshScreen();
			return;
			
			case '?':
			caseDesc = "user help";
			commandConfirm();
			userHelp();
			refreshScreen();
			return;
			
			
	default:  // gives the user some instructions as far as how to proceed if they hit a wrong key
				infoFrameA.clear();
				infoFrameA.center("Not a valid selection. Try again.", BG_BLACK|LIGHTRED);
				infoFrameA.cycle();
				break;
					}
				}
				

		}
}
*/
