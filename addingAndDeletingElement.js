function functionCreateElement() {
	var button=document.createElement('INPUT');
	button.setAttribute('type','button');
	button.setAttribute('value','I\'m the new button');
	button.setAttribute('onclick','functionCreateElement()');
    document.body.appendChild(button);	
}
function functionDeleteElement() {
	var list=document.getElementById('list');
	if(list.hasChildNodes()){
	//list.parentNode.removeChild(list);
	list.removeChild(list.childNodes[0]);
	}
	else
		console.error("No child nodes to Delete.")
}
var element=1;
function functionAppendElement(){
	var list=document.getElementById('list');
	var child=document.createElement("LI")
	child.appendChild(document.createTextNode("Appended 	Element "+element));
	list.appendChild(child);
	element += 1 ;
}
var reElement=1;
var repelement=0;
function functionReplaceElement(){
	var list=document.getElementById('list');
	var child=document.createElement("LI")
	child.appendChild(document.createTextNode("Replaced Element " + reElement));
	try{
		try{
			list.replaceChild(child,list.childNodes[repelement]);
		}
		catch(error){
			repelement=0;
			list.replaceChild(child,list.childNodes[repelement]);		
		}
	}
	catch(error){
		console.error("No Element to replace");
	}
	repelement += 1;
	reElement += 1 ;
}