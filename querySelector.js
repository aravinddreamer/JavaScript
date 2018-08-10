function myQuerySelector(){
	if(document.querySelector(".selector .content").style.color == "red"){
		document.querySelector(".selector .content").style.color = "#abcdef"
	}
	else{
		document.querySelector(".selector .content").style.color = "red"
	}
}
function myQuerySelectorAll(){
	var all=document.querySelectorAll(".selectorAll .queryAll");
	console.log(all[0],all[1],all[2],all.length)
	all[0].innerHTML="Content changed using Query selector All.";
	all[1].style.backgroundColor="powderblue";
	all[2].innerHTML="Query selector All selects all the element."
}