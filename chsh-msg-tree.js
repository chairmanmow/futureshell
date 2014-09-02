load("sbbsdefs.js");
load("frame.js");
load("tree.js");



//if(!js.global.frame instanceof Frame)
	//js.global.frame = new Frame();

//var xScreenColumns = console.screen_columns;
//var yScreenRows = console.screen_rows;

//var subBoardTreeFrame = new Frame(1,1,1,yScreenRows);
	
//mbcode = bbs.cursub_code;
//var mb = new MsgBase(mbcode);
	
var msgTree = new Tree(subBoardTreeFrame,"bulletin test");

msgTree.colors = {
		fg:BLACK,
		// non-current item/empty space background 
		bg:BG_CYAN,
		// current item foreground
		lfg:WHITE,
		// current item background
		lbg:BG_BLUE,
		// current tree heading foreground
		cfg:WHITE,
		// current tree heading background
		cbg:BG_CYAN,
		// disabled item foreground
		dfg:DARKGRAY,
		// hotkey foreground
		kfg:YELLOW,
		// tree branch foreground
		tfg:BLACK,
		// tree heading foreground
		hfg:WHITE,
		// tree heading background
		hbg:BG_BLUE,
		// tree expansion foreground
		xfg:RED
	}
var body = new String;

	function readMessage(msgNum) {
	body = mb.get_msg_body(msgNum);
	var popUpFrame = new Frame(
			x=		console.screen_columns/4,
			y=		parseInt(console.screen_rows/6),
			width=	console.screen_columns/2,
			height=	parseInt(console.screen_rows/2),
			attr= dynamicFrameBG|dynamicFrameFG,
			parent=	js.global.frame
	);
	
	popUpFrame.open();
	popUpFrame.putmsg(body);
	popUpFrame.draw();
	cursorPosX = parseInt(console.screen_rows/4) * 3 + 5;
	cursorPosY = parseInt(console.screen_rows/6) * 4;
	console.gotoxy(cursorPosX,cursorPosY);
	console.pause();
	console.clear();
	//killPopup();
	refreshScreen();
	}
	
//msgTree.addItem("e|xit", exitMsgList);

function refreshMsgTree(){
subBoardTreeFrame.clear();
mb.open();
	
	for(var m = mb.last_msg; m >= mb.first_msg; m--) 
{
	
	var cursub2 = msg_area.grp_list[bbs.curgrp].sub_list[bbs.cursub].name;
	var curSubTotalMsgs = mb.total_msgs;
	var groupDescription = msg_area.grp_list[bbs.curgrp].description.substring(0,40);
	
    var header = mb.get_msg_header(m);
    if(header === null || header.attr&MSG_DELETE)
        continue;
        var msgTime = system.timestr(header.when_written_time);
        var msgTimeTrim = msgTime.substr(4,6);
        msgTimeTrim = msgTimeTrim.replace(" ","");
        msgTime = msgTimeTrim;
        var msgSubj = new String;  //creates a string to hold the full message subject
        msgSubj = header.subject; //puts the value of the message subject in the variable
        var fromLen = header.from.length;  // gets length of posters name
        var poster = header.from.substr(0,10);
        var subjLen = 40 - poster.length - 5;  //creates a variable to create the width of subject without spilling to a new line
        var msgSubjTrim = msgSubj.substr(0,subjLen);
        var headerIndex = header.number;
        var concatDisplay = new String;
        if(header.from == user.name)        {
        concatDisplay = msgTime + poster;
        }
       	else if(header.to == user.name || header.to == user.alias){
       	concatDisplay = "@|U|-" + msgTime + "|:" + poster + "|:" + msgSubj;
        }
        else {
        	concatDisplay = "-|--" + msgTime + "|:" + poster + "|:" + msgSubj;
        	msgTree.addItem(concatDisplay,readMessage,headerIndex);
        	}
        msgTree.addItem(concatDisplay,readMessage,headerIndex);
}
mb.close();
subBoardTreeFrame.cycle();
//subBoardTreeFrame.draw(); 
}        



 

function exitMsgList(){
runSwitch = 0;
}


function selectMessage(){    
while(runSwitch == 1) {
	var k3 = console.inkey();
	msgTree.getcmd(k3);
	msgTree.cycle();
	if(k3 == '\t') {
		exitMsgList();
		}	
	}
}





