function displayAllElements(){
	var all=document.all;
	document.getElementById('documentAll').innerHTML=all;
	var anchor=document.anchor;
	document.getElementById('documentAnchor').innerHTML=anchor;
	var opena=document.open();
	document.getElementById('documentOpen').innerHTML=open;
	document.cookie="UserName='ARAVIND';expiry:10000";
	var cookie=document.cookie;
	document.getElementById('documentCookie').innerHTML=cookie;
	var location=document.location;
	location += document.location.href;
	location += document.location.host;
	location += document.location.path;
	location ++ document.location.protocol;
	document.getElementById("documentLocation").innerHTML=location;
	var body=document.body;
	document.getElementById('documentbody').innerHTML=body;
	var head=document.head;
	document.getElementById('documentHead').innerHTML=head;
	var style=document.styleSheets;
	document.getElementById('documentStyle').innerHTML=style;
	var script=document.scripts;
	document.getElementById('documentScript').innerHTML=script;
	var last=document.lastModified;
	document.getElementById('documentLastModified').innerHTML=last;
	var ready=document.readyState;
	document.getElementById('documentReady').innerHTML=ready;
	
}