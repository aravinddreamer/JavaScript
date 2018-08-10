function changeContents(){

		//getting element by class name
		var intro=document.getElementsByClassName('intro');
		intro[0].innerHTML="INTRODUCTION";

		//getting element by Id

		intro=document.getElementById('content');
		intro.innerHTML="Content changed Using get getElementById"


		//getting element using Query Selector
		intro=document.querySelector(".empty").style.background='LIGHTgreen';

		//getting element by TagName
		intro=document.getElementsByTagName("P")[3];
		intro.innerHTML="Content changed Using getElementByTag Name and color by query selector."
		intro.style.color='brown';
}