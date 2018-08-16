function increaseindex(){
	var val=document.getElementById('myBox').style.zIndex;
	val = Number(val);
	if(val < 4)
		val +=  1;
	val = String(val);
	document.getElementById('myBox').style.zIndex = val;
}

function decreaseindex(){
	var val=document.getElementById('myBox').style.zIndex;
	val = Number(val);
	if(val != 0)
		val -= 1; 
	val = String(val);
	document.getElementById('myBox').style.zIndex = val;
}
function setauto(){
	document.getElementById('myBox').style.zIndex = "auto";
	document.getElementById('myBox').style.zIndex = "0";
}
function setinitial(){
	document.getElementById('myBox').style.zIndex = "initial";
	document.getElementById('myBox').style.zIndex = "0";
}