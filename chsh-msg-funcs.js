// This contains the function for the frame at the bottom right that
// displays message board info...  This pretty much works for what it does.
// although some of the conditional logic is redundant
// it's not much of a hog and i'll fix it.

load("sbbsdefs.js");
load("frame.js");

var msgSwitch = new String;
var mbcode = new String;


function msgList(){
	var cursub = new String;
	mbcode = bbs.cursub_code;
	var mb = new MsgBase(mbcode);
	mb.open();
	
	for(var mbi = 1; mbi <18; mbi++)
		{
			subBoardFrame.gotoxy(1,mbi);
			subBoardFrame.cleartoeol();
		}
			subBoardFrame.gotoxy(1,1);



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
        var msgSubj = new String;  //creates a string to hold the full message subject
        msgSubj = header.subject; //puts the value of the message subject in the variable
        var fromLen = header.from.length;  // gets length of posters name
        var poster = header.from.substr(0,10);
        var subjLen = 40 - poster.length - 6;  //creates a variable to create the width of subject without spilling to a new line
        var msgSubjTrim = msgSubj.substr(0,subjLen);
			if(header.to == user.name || header.to == user.alias){
			subBoardFrame.putmsg(msgTimeTrim, msgBoaoardToMeDateBG|msgBoaoardToMeDateFG);
			}
	else
	{
    subBoardFrame.putmsg(msgTimeTrim, msgBoardDateBG|msgBoardDateFG);
	}
	if(header.from == user.name)
	{
	subBoardFrame.putmsg(poster, msgBoardNameMeBG|msgBoardNameMeFG);
	}
	else if(header.to == user.name || header.to == user.alias)
	{
	subBoardFrame.putmsg(poster, msgBoardnameToMeSenderNameBG|msgBoardnameToMeSenderNameFG);
	}
	else
	{
	subBoardFrame.putmsg(poster, msgBoardNameBG|msgBoardNameFG);
	}
	if(header.to == user.name || header.to == user.alias) {
	subBoardFrame.putmsg(msgSubjTrim, msgBoardToMeTopicBG|msgBoardToMeTopicFG);
	}
	else
	{
	subBoardFrame.putmsg(msgSubjTrim, msgBoardTopicBG|msgBoardTopicFG);
	}
	/*var concatDisplay = new String;
        concatDisplay = msgTime + poster;
        
        msgTree.addItem(concatDisplay,readMessage,headerIndex);
        */
    subBoardFrame.crlf(); 
    
}
subBoardFrameTitle.clear();
	subBoardFrameTitle.center(cursub2.substring(0,40));
	infoFrameB.clear();
	infoFrameB.center(groupDescription);
	infoFrameB.cycle();
	infoFrameC.clear();
	infoFrameC.center(curSubTotalMsgs + " Total Msgs in Sub-Forum");
	infoFrameC.cycle();
	subBoardFrameTitle.cycle();
	//subBoardTreeFrame.cycle();
mb.close();
subBoardFrame.cycle();
infoFrameB.cycle();
//refreshMsgTree();
}

function switchMsgAreas() {

if(msgSwitch == "nextSub" || msgSwitch == "prevSub") {  // handling sub canges
		var subsInGroup = msg_area.grp_list[bbs.curgrp].sub_list.length - 1;
		var cursubInteger = bbs.cursub;
		var currentGroup = bbs.curgrp;

			if(msgSwitch == "nextSub"){ // see if we are going up in subs
				if(subsInGroup == cursubInteger) {  // check to see that it's not the last sub in the array
					if(bbs.curgrp == msg_area.grp_list.length - 1){ //check to see if it's the last group in the array
						bbs.curgrp = 0;  // go back to the beginning if it is the last message in the last message board
						bbs.cursub = 0;}
							else {
						bbs.curgrp = bbs.curgrp + 1;  // advance a group if it's not the last group
						bbs.cursub = 0;
							}
					msgList();
					}
					else {
					bbs.cursub = bbs.cursub + 1;				
					msgList();
					}
				}
				if(msgSwitch == "prevSub"){ // see if we are going up or down in subs
				if(bbs.cursub == 0) {  // check to see that it's the first subboard in a group
					if(bbs.curgrp == 0) {  // check to see if it's the first group
					bbs.curgrp = msg_area.grp_list.length - 1;  // set the group to the last group
					}
					else {
					bbs.curgrp = bbs.curgrp - 1; //go down a group 
					}
					bbs.cursub = msg_area.grp_list[bbs.curgrp].sub_list.length - 1;
					msgList();
					}
					else {
					bbs.cursub = bbs.cursub - 1;
					msgList();
					}
			}
					
	}

	}
	
