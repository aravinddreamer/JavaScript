function contentStyle() {
	document.getElementById("content").classList.add('contentStyleWhite');
}
function toggleStyle(){
	document.getElementById("content").classList.toggle('contentStyleBlack');
}
function removeStyle(){
	document.getElementById("content").classList.remove('contentStyleWhite');
}

function replaceStyle(){
	document.getElementById("content").classList.replace('contentStyleBlack','contentStyleWhite');
}