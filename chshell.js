js.branch_limit = 0;

load("sbbsdefs.js");

load("frame.js");  // for displaying frames
load("str_cmds.js"); // for working with strings
load("chshlayout.js");  // EDIT THIS FILE FOR LAYOUT CONFIGURATION
//load("chsh-chat-funcs.js");  // trying to move chat functions out of main run into problems
load("chsh-ctl-funcs.js");  // has most of the menu logic
load("chsh-maint-funcs.js");  // has things like screen redraws
load("chsh-msg-funcs.js");  // has the function that controls the bottom right frames
//load("rss-ticker.js");  // same problem with chat-funcs... moved to bottom of main
//load("chsh-msg-tree.js");
load("json-chat.js");  // needed for chat
load("json-client.js"); // see above
load("coldfuncs.js"); // i forget why i need this
load("event-timer.js");
load("rss-atom.js");


oldPt = console.ctrlkey_passthru;


// this code could be moved down if needed if main() is moved down as well
var rssFeeds = new Array();
rssFeeds[0] = "http://www.nba.com/rss/nba_rss.xml";
rssFeeds[1] = "http://feeds.feedburner.com/DrudgeReportFeed";
rssFeeds[2] = "http://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml";
rssFeeds[3] = "http://rss.cnn.com/rss/cnn_topstories.rss";
rssFeeds[4] = "http://mlb.mlb.com/partnerxml/gen/news/rss/mlb.xml";
rssFeeds[5] = "http://feeds.reuters.com/reuters/technologyNews";
rssFeeds[6] = "http://feeds.reuters.com/reuters/businessNews";
rssFeeds[7] = "http://www.grudgemirror.com/feed/"
rssFeeds[8] = "http://web.mit.edu/newsoffice/topic/humanities.feed";
rssFeeds[9] = "http://www.npr.org/rss/rss.php?id=1039";
rssFeeds[10] = "http://http://www.usmagazine.com/celebrity_news/rss";
rssFeeds[11] = "http://rss.nytimes.com/services/xml/rss/nyt/Sports.xml";

var userFeedString = new String;
var feedArrayIndex = new Number;
feedArrayIndex = 0;


var tickerTimer = new Timer();
var timerCycle = new Timer();
var bannerTimer = new Timer();
var bannerSwitch = bannerTimer.addEvent(25000,true,loadBanner);

var tickerTimerFeedTime = 15;  // interval in seconds
var rssRefreshTimer = new Timer();
tickerTimerFeedTime = tickerTimerFeedTime * 1000;
var tickerEvent = tickerTimer.addEvent(tickerTimerFeedTime,true,tickerLoop);
var refreshEvent = rssRefreshTimer.addEvent(600000,true,changeRSSFeed);
var f = new Feed("http://grudgemirror.com/feed/");	
var rssItemIndex = 0;
var rssChannelIndex = 0;
var tickerLoopIndex = 0;
var rssArticleTitle = new Array();

var menuCtrl = 0;  // this variable is set to either 1 or 0 by the program depending on whether you are in chat or MENU MODE

var stop = new String;  //placeholder for command string to manage the global loop in main
stop = "go";  //set string to a value other than null probably unneccessary


//  ############## CHAT LOOP ####################  this is  my loop to keep chat going

function chatLoop() {
	while(stop != "stop")   //start chat loop
	{
		chatMain();
		rssTicker();
		chat.cycle();
		if(menuCtrl == 1)
				{
				menuControl();
				}
	}	
}


var msgstring = new String;
//var chat_options = load("modopts.js","jsonchat");
var chat_client = new JSONClient("127.0.1.1",10088);
var chat = new JSONChat(user.number,chat_client,"127.0.1.1",10088);
var channels = [];
var channels_map = [];
var channel_index = 0;
var cycleChat = timerCycle.addEvent(1000,true,chat.cycle);
		

	
// ######### FUNCTION TO FIX ERRORS AND REBOOT LOOP AFTER EXECUTING MENU OPTION #####
function resumeMain() {
	initChat();
	try{
	refreshScreen();
		}
		catch(err1) {
			if(err1 =='Empty response from server.'){
					//alertFrame.clear();
						//alertFrame.putmsg("rss feed is unable to connect switching feeds");
						//alertFrame.cycle();
						feedArrayIndex++;
						changeRSSFeed();
						console.putmsg("CATCHING ERROR?");
						}
						}
		while(1)
			{
			try{
				chatLoop();
				}
			catch(err){
					if(err =='socket disconnected') {
				handleSocketError();	
				}
					if(err =='Unable to connect') {
						alertFrame.clear();
						alertFrame.putmsg("rss feed is unable to connect switching feeds");
						alertFrame.cycle();
						feedArrayIndex++;
						changeRSSFeed();
					}
				
				}
			}
}	


function handleSocketError() {
			if(chat_client.socket.is_connected != true){
				chatOutput.putmsg("socket disconnected attempting to reconnect", BG_MAGENTA|BLACK);
				infoFrameB.cycle();
				console.pause();
				  
					chatOutput.putmsg("Socket is not connected attempting to connect", BG_BLACK|YELLOW);
					infoFrameB.cycle();
					chat_client.connect();
						if(chat_client.socket.is_connected == true){
						chatOutput.putmsg("socket connected attempting to initialize chat", BG_BLACK|GREEN);
						chatOutput.cycle();
						} else {
						chatOutput.putmsg("socket unable to connect", BG_BLACK|RED);
						chatOutput.cycle();
						return;
						}
						 
				chat.connect(user.number,chat_client);
				chatOutput.putmsg("chat initialized", BG_BLACK|GREEN);
				chatOutput.cycle();
				//chat.join("#main");
				//channels.length = 0;
				//channels_map.length = 0;
				//channel_index = 0;
				refreshScreen();
				initChat();
			}
}
	
				
		

// main function does pretty much jack shit

function main()
{	
	initDraw();
	resumeMain();	
}

bbs.exec_xtrn("LASTCALL");
bbs.exec_xtrn("ONELNRZ");
bbs.exec_xtrn("FLBULLET");
console.ctrlkey_passthru="+PKUT";

main();


//  ####### MAIN CHAT FUNCTIONS I WOULD LIKE TO MOVE THIS TO ANOTHER FILE BUT I'm RUNNING INTO ERRORS ########
// this is the main chat loop which is largely unaltered from the original fschat with 2 changes to adapt for frame positioning

function initChat() {

	chatInput.clear();
	chatInput.cycle();
	chat.join("#main");
}

function chatMain() {					
	for(var c in chat.channels) { // check for channel messages and update local channel cache
	
		chat.cycle(); // this was here in the original fs chat

		var chan = chat.channels[c];				
		verifyLocalCache(chan); // verify this channels presence in the local cache */				
			/* display any new messages */
		while(chan.messages.length > 0){
			chatOutput.putmsg(printMessage(chan,chan.messages.shift()));
			chatOutput.cycle();
			}
				
	updateLocalCache();	// synchronize local cache with chat client 			 				 				 	
	chatInput.gotoxy(1,1);  
	getInput();  // This function is where the bulk of the action takes place that needs to be altered I think
}
}
	
function verifyLocalCache(chan) {
	if(channels_map[chan.name] == undefined) {
			
		chatOutput.cleartoeol();
		chatOutput.putmsg("joining channel: " + chan.name + "\r\n", chanJoinBG|chanJoinFG);
		chatOutput.cleartoeol();
			
		channels_map[chan.name] = channels.length;
		channel_index = channels.length;
		channels.push(chan.name);
	}
}

function updateLocalCache() {
	/* verify local channel cache */
	for(var c in channels_map) {
		if(!chat.channels[c.toUpperCase()]) {
			chatOutput.cleartoeol();
			chatOutput.putmsg("parting channel: " + c);
			
			channels.splice(channels_map[c],1);
			delete channels_map[c];
			if(!channels[channel_index])
				channel_index = channels.length-1;
			}	
		}}

function chatInputClear(){  // this is just a simple thing to clear the frame when something happens that would be logical
	chatInput.clear();
	chatInput.cycle();
}
function printMessage(chan,msg) {
		// I deleted part of the original fschat code here that was broken and commented out

 // I'm not sure what this if statement is for I don't know if I've encountered it yet while running the program
 // I put it in a frame where it would seem out of place just so I can see if I notice an oddball message string
 // pertaining to the user nick.
 		
	if(!msg.nick)
	{
			chatOutput.cleartoeol();
			chatOutput.putmsg(msg.str);
			chatOutput.cleartoeol();
			dynamicFrame.cycle();
			return;
	}
		

		msgstring =  "[" + chan.name + "]" + msg.nick.name + ":" + msg.str;  // this is the original code to construct a msgstring variable
//conditional formatting - is the message sent from you or someone else?		
			
		if(msg.nick.name == user.alias)
		{
		chatOutput.putmsg(chan.name, chatOutputChnMeBG|chatOutputChnMeFG);
		chatOutput.putmsg(msg.nick.name, chatOutputNickMeBG|chatOutputNickMeFG);  		
		chatOutput.putmsg(":" + msg.str,chatOutputMsgMeBG|chatOutputMsgMeFG);
		
		}
		else
		{
		chatOutput.putmsg(chan.name, chatOutputChnYouBG|chatOutputChnYouFG);
		chatOutput.putmsg(msg.nick.name, chatOutputNickYouBG|chatOutputNickYouFG);  		
		chatOutput.putmsg(":" + msg.str,chatOutputMsgYouBG| chatOutputMsgYouFG);
		}
	}


// ############ THE LEGENDARY CHAT 100 lines of code GET INPUT FUNCTION ###############
// THIS FUNCTION DOES A LOT OF THINGS INCLUDING PROCESS CHAT INPUT
// AND ALLOWING YOU TO GET TO THE MENU CONTROL FUNCTION

var msgString2 = new String;  // this is just a concatenated msgstring that includes inkey var k
var g = new String;  // this is just another container for getkey, inkey or getstr methods in case I need it to create a loop
	
function getInput() {

	var k = console.inkey();  // This gets the user input
	chatInput.gotoxy(1,1);
	chatInput.putmsg(k);
	chatInput.cycle();		
	if(k) {
		switch(k) {
		/* quit chat */
		case '\x1b':
		case KEY_UP:
		chatOutput.scroll(0,-1);
		chatOutput.cycle();
		break;
		case KEY_DOWN:
		chatOutput.scroll(0,+1);
		chatOutput.cycle();
		break;
		case KEY_RIGHT:
		msgSwitch = "nextSub";
		switchMsgAreas();
		break;
		case KEY_LEFT:
		msgSwitch = "prevSub";
		switchMsgAreas();
		break;
		case ctrl('N'):
			caseDesc = "Change RSS Feed IS THIS CODE WORKING?";
			changeRSSFeed();
			break;
			case ctrl('S'):
			refreshScreen();
			break;
			case ctrl('R'):
			readLink();
			refreshScreen();
			break;
			case ctrl('A'):
			visitLink();
			refreshScreen();
			break;
			//case ctrl('T'):
			//refreshScreen();
			//break;
			
			
			/*case ctrl('M'):
			selectMessage();
			refreshScreen();
			break;
			*/
		/* do nothing for CRLF on a blank line */
		case '\r':
		chatOutput.end();
		break;
		case '\n':
		chatOutput.end();
		case '?':
		userHelp();
		refreshScreen();
		break;
		/* switch to the next channel in our channel list */
		case '~':
			if(channels.length > 1) {
				channel_index++;
				if(channel_index >= channels.length)
					channel_index = 0;
				// chatOutput.attributes = chat_settings.NOTICE_COLOR;
				chatOutput.putmsg("now chatting in: " + channels[channel_index]);
				chatOutput.cycle();
			}
			break;
			case '\t':
			menuCtrl= 1;
			menuControl();
			return;	
		default:
			/* send a message on return or switch to menu on tab  */
			msgString2 = k;
				while(k != '\r' && k != '\t'  && k != KEY_UP && k != KEY_DOWN && k != KEY_RIGHT && k != KEY_LEFT){
					chat.cycle();
					g = console.inkey(500);
					chatInput.putmsg(g,chatInputBG|chatInputFG);  		
					msgString2 = msgString2 + g;
					chat.cycle();
					chatInput.cycle(); 
					if(g == '\r' || g == '\n' || g == '\t' || g == KEY_UP || g == KEY_DOWN || g == KEY_RIGHT || g == KEY_LEFT){
						if(g == '\t') {
						chatInputClear();
						menuCtrl = 1;
						menuControl();
						return;
						}
						if(g == KEY_UP){
						
						chatOutput.scroll(0,-1);
						chatInputClear();
						break;
						}
						if(g == KEY_DOWN){
				
						chatOutput.scroll(0,+1);
						chatInputClear();
						break;
						}
						if(g == KEY_RIGHT) {
						msgSwitch = "nextSub";
						switchMsgAreas();
						chatInputClear();
						break;
						}
						if(g == KEY_LEFT) {
						chatInputClear();
						msgSwitch = "prevSub";
						switchMsgAreas();
						break;
						}
					else {
					chat.cycle();
					break;
					}
					chat.cycle();
				}
			} 	
		
			if(channels.length > 0) {		
			msgString2 = msgString2 + '\n';
			chat.submit(channels[channel_index],msgString2);  // changed code
			chatInputClear();
		}
		/* if we have not joined any channels, we cant send any messages */
		else {
			chatOutput.cleartoeol();
			chatOutput.putmsg("you must join a channel first");
			chatOutput.cleartoeol();
		}
		break;
		}
	}
	
}


	
	
// #################### RSS TICKER CODE ###################

function rssTicker(){
	while(tickerTimer.events.length > 0) {			
			// iterate events list and run any events that are scheduled
			
			tickerTimer.cycle();
			bannerTimer.cycle();
			mswait(200);
			break;
			}
	}


	
	function rssHeadline() {
	alertFrame.clear();
	alertFrame.putmsg(f.channels[rssChannelIndex].title + " ", channelTitleBG|channelTitleFG);  
		var chanUpdateTimeTrim = f.channels[rssChannelIndex].updated.substring(0, f.channels[rssChannelIndex].updated.indexOf(" +0000"));
		alertFrame.putmsg("\1rLast Updated " + chanUpdateTimeTrim, channelUpdateTimeBG|channelUpdateTimeFG);
		alertFrame.cycle();
		tickerLoopIndex++;
	}
	
	function rssArticle() {
		alertFrame.clear();
			alertFrame.putmsg(f.channels[rssChannelIndex].items[rssItemIndex].title.substring(0,79), BG_MAGENTA|itemUpdateFG);
			//alertFrame.putmsg(f.channels[rssChannelIndex].items[rssItemIndex].author + "");
			var itemUpdateTimeTrim = f.channels[rssChannelIndex].items[rssItemIndex].date.updated.substring(0,f.channels[rssChannelIndex].items[rssItemIndex].date.updated.indexOf(" +0000"));
			alertFrame.putmsg(itemUpdateTimeTrim + "", itemUpdateTimeBG|itemUpdateTimeFG);
			//alertFrame.putmsg(f.channels[rssChannelIndex].items[rssItemIndex].body + "");	
			alertFrame.cycle();
			rssArticleTitle[rssItemIndex] = "\1r" + itemUpdateTimeTrim + "\1y=-="  + f.channels[rssChannelIndex].items[rssItemIndex].title
			tickerLoopIndex++;
			rssItemIndex++;
			
	}
	

	
function tickerLoop(){
		var noOfArticles = f.channels[rssChannelIndex].items.length;
		if (tickerLoopIndex == 0)
		{
		
		rssHeadline();
		return;
		}
		while(tickerLoopIndex >= 1 && rssItemIndex < noOfArticles - 1)
		{
		if(rssItemIndex == noOfArticles - 1)
		{
			rssItemIndex = 0;
			alertFrame.clear();
			changeRSSFeed();	
			return;
		}
		rssArticle();	
		return;
		}
		if(tickerLoopIndex >= noOfArticles)
			{
			//alertFrame.putmsg(rssArticleTitle[rssItemIndex]);
			//rssItemIndex++;
			//tickerLoopIndex++;
			//if(rssItemIndex == noOfArticles) {
				rssItemIndex = 0;
				changeRSSFeed();
				/*alertFrame.clear();
				rssHeadline();
				alertFrame.cycle();
					
				tickerLoopIndex++;				
				}*/
				//tickerLoopIndex++;
				return;
				//}
		}
		tickerLoopIndex++;
		return;
		}



//var userFeedString = "http://www.grudgemirror.com/feed/"


	
function changeRSSFeed(){
	userFeedString = rssFeeds[feedArrayIndex];
	var userFeed = new Feed(userFeedString);
	feedArrayIndex++;
	f = userFeed;
	rssArticleTitle.splice(0,rssArticleTitle.length);
	tickerLoopIndex = 0;	
	if(feedArrayIndex >= rssFeeds.length) {
		feedArrayIndex = 0;  
		chatOutput.putmsg("end of RSS Feeds reached returning to beginning");
	tickerLoop();
	} 
	}

function readLink() {
var htmlStrip = /(<([^>]+)>)/ig;
var jsStrip = /<script\b[^<]*(?:!<\/script>)<[^<]*<\/script>/gi;
body = f.channels[rssChannelIndex].items[rssItemIndex - 1].body;
body = body.replace(htmlStrip, "");
console.clear();
console.putmsg(body);
console.pause();
refreshScreen();
}

function visitLink() {
var url = new String;
url = f.channels[rssChannelIndex].items[rssItemIndex].link;
var htmlStrip = /(<([^>]+)>)/ig;
var jsStrip = /<script\b[^<]*(?:!<\/script>)<[^<]*<\/script>/gi;
var rssLinkRequest = new HTTPRequest;
var response = rssLinkRequest.Get(url);
response = response.replace(jsStrip, "");
response = response.replace(htmlStrip, "");
console.clear();
console.putmsg(response);
console.pause();
refreshScreen();
}

function randomANSI(){
console.clear();
var random_list = directory(system.text_dir + "coolansi/random*.*")
if(random_list.length){
console.printfile("../text/coolansi/" + file_getname(random_list[random(random_list.length)]).slice(0,-4) + ".ans");
mswait(500);
}
}

// this function is garbage and ununused but id like to improve scrollback
function chatScroll() {
	chatInputFeedback.clear();
	chatInputFeedback.center("Scrollback : Line " + chatOutput.y + " out of " + chatOutput.height, BG_BLACK|YELLOW);
	chatInputFeedback.cycle();
	var scrollSwitch = 1;
	while(scrollSwitch == 1){
	cs = console.inkey();
	if(cs){
	switch(cs){
		case KEY_UP :
		chatOutput.scroll(0,-1);
		chatInputFeedback.clear();
		chatInputFeedback.center("Scrollback : Line " + chatOutput.y + " out of " + chatOutput.data_height, BG_BLACK|YELLOW);
		chatInputFeedback.cycle();
		case KEY_DOWN :
		chatOutput.scroll(0,+1);
		chatInputFeedback.clear();
		chatInputFeedback.center("Scrollback : Line " + chatOutput.y + " out of " + chatOutput.data_height, BG_BLACK|YELLOW);
		chatInputFeedback.cycle();
		case KEY_LEFT :
		chatOutput.home();
		chatInputFeedback.clear();
		chatInputFeedback.center("Scrollback : Line " + chatOutput.y + " out of " + chatOutput.data_height, BG_BLACK|YELLOW);
		chatInputFeedback.cycle();
		case KEY_RIGHT :
		chatOutput.end();
		chatInputFeedback.clear();
		chatInputFeedback.center("Scrollback : Line " + chatOutput.y + " out of " + chatOutput.data_height, BG_BLACK|YELLOW);
		chatInputFeedback.cycle();
		default :
		chatInputFeedback.clear();
		chatInputFeedback.center("Type to Chat", BG_BLACK|RED);
		chatInputFeedback.cycle();
		chatOutput.end();
		scrollSwitch = 0;
		return;
	}
}
}
}

