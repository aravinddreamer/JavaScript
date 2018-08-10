function myFunction(){
	var val=10;
	function displayValue(){
		var val=15;
		function display(){
		document.getElementById('innerdisplay').innerHTML="<h2>Inner value : " + val + "</h2>";
	}
	display();
	}
	displayValue();
	document.getElementById('outerdisplay').innerHTML="<h2>Outer value : " + val+ "</h2>";
}

function scopeVariable(){
	var val = 10;
	var txt = ""
	function displayValue(){
		var val = 15;
		val += 5;
		txt = txt + "<h2>Inner value : " + val+ "</h2>";
		}
	val+=15;
	displayValue();
	displayValue();
	document.getElementById('inndisplay').innerHTML="<h2>Inner value : " + txt + "</h2>";
	document.getElementById('outdisplay').innerHTML="<h2>Outer value : " + val + "</h2>";
}