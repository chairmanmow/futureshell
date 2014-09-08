Description of Files and What they do, and What needs to be done with them :<br>
<br>
• chshell.js - Contains the guts of the programs main logic, control flow, chat,menu switching, rss feeds,<br>
   Do not edit chshell.js unless you are working on an issue or want to connect to a group chat server (recommended, email me) or want to edit where the RSS feeds point. it has nothing to be edited beyond that.  known issues included you can not receive chat while you are entering text (i want to fix this).
<br><br>
• chsh-ctl-func.js - Contains some menu logic that you may want to edit starting at line 31.  Tree is the js library used for menu functions, and you can see your exec/load/tree.js file for more info on how it works.  you don't want to change any of the code after line 147 for the menu.  the rest is other logic that controls what's going on with the menu system.
<br><br>
• jsonchathack.js - is basically json chat with a few altered strings for my liking and adding a beep function when someone joins (basically for me so i notice if someone logs on while i'm idling for now).  also, i'm keeping my fingers crossed this doesn't screw something else up.  
<br><br>
•chshlayout.js - contains a lot of color options, as well as frame sizing information if you can decipher it.  edit this file as long as you feel comfortable with what you're doing.
<br><br>
• chsh-maint-funcs.js - don't edit this file, it's got a bunch of crap in it, unless you're working on a bug.  it could be here, or maybe this a good place to store a hack.
<br><br>
• chsh-menu-funcs.js - this is an ugly file that could definitely have some better constructor functions, ala <br>
var myExternalProgram = new XTRN("XTRNCODE","This External program is my favorite, I'm sure you'll enjoy it"). <br>
the above function does not exist... basically this is just a hodge podge of functions that get executed when you select things from the tree, the tree menu calls a function and those are stored here.  if you want to add new stuff to the tree : <br><br>

1. edit the chsh-ctl-funcs.js and add an item to the tree ... look at the code for how this is done with tree.addItem throughout that file.  the last argument is the name of the function so if you were creating a function called newStuff, just use that as the last argument.
<br>
2. edit the chsh-menu-funcs.js to make a function that is call newStuff...  it should probably refresh and clear the screen like the other ones if you need it to.  look at the other functions for examples.  but as stated above, there are better ways to do it than i've done in that file.   
<br>
 


BBS lovers If you've been to futureland and wondered how the shell worked, here's your chance to take a peek.  IT IS NOT MEANT TO BE SUPPORTED.  WHILE YOU ARE FREE TO TRY RUNNING IT AND ASKING FOR ADVICE, it is just to show you how it works for your education, and to demonstrate what can be accomplished when you dive head first.  

The formatting is representative of the fact that I was hacking through this code a lot, and hadn't picked up on conventions.  There are comments that probably don't make any sense to anyone, including me.  It works, and I know how it works, but it doesn't need so many lines.  Nonetheless, it stands as an accomplishment compared to others.

I may cobble away at this to make it more usuable or I probably will just completely re-write it.  I don't know if I'll give away the revised finished product to everyone if it gets lazy and leechy with my time.  There probably doesn't need to be so much code, and I've learned a lot of new things that I wouldn't have dare tried earlier that I can implement easily now.  If I do both, I'll give away the cobbled version for sure, which already exists, right here, so if you're into chiseling be my guest.

If you install this on your BBS it won't break it, but you should know how to activate another shell should you get caught in a loop you can't get out of.  You were warned.  If you don't know how to install a shell in the first place, you definitely should not start here.

Here's some things you can learn : 


• how to create a tree menu (if you had to do a basic customization this would be the first place to start)<br>
• how to use frames (this would be where you can customize colors)<br>
• how to grab rss feeds and parse them and use a timer to keep them fresh (you can add your own feeds to an array)<br>
• how to make json-chat and connect to a server<br>
• how to do conditional formatting (if me show this else show that)<br>
• how to display a random ansi (loading a random file from a directory)<br>
• how to use message base objects and interact with them (that's how the bottom right frame works);<br>
• how to use other people's code and make it do what you expect it to<br>

oh, and how to write sloppy code!  

also, portions of the functionality were reverse engineered and in some respects outright copied from examples in the CVS, but it is mainly my creation, inspired by boards mostly in the center of awareness bbs collective (google it), i'm not a member but i respect their contributions as well as the other synchronet developers with which enabled me to build something like this.

