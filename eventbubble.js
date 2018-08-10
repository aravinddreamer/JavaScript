var bubbleOuter=document.querySelector('#bubbleOuter');
var bubbleInner=document.querySelector('#bubbleInner');
var bubbleButton=document.querySelector('#bubbleButt');

	bubbleOuter.addEventListener('click', function(){
	alert('I\'m outer division of bubble.');
	});

	bubbleInner.addEventListener('click', function(){
	alert('I\'m inner division of bubble.');
	});
	bubbleButton.addEventListener('click', function(){
	alert('I\'m button of bubble.');
	});

var capturingOuter=document.querySelector('#capturingOuter');
var capturingInner=document.querySelector('#capturingInner');
var capturingButton=document.querySelector('#capturingButt');

	capturingOuter.addEventListener('click', function(){
	alert('I\'m a outer division of capturing.');
	},true);

	capturingInner.addEventListener('click', function(){
	alert('I\'m a inner division of capturing.');
	},true);
	capturingButton.addEventListener('click', function(){
	alert('I\'m a button of capturing.');
	},true);

var stopOuter=document.querySelector('#stopOuter');
var stopInner=document.querySelector('#stopInner');
var stopButton=document.querySelector('#stopButt');

	stopOuter.addEventListener('click', function(){
	alert('I\'m a outer division of target.');
	});

	stopInner.addEventListener('click', function(){
	alert('I\'m a inner division of target.');
	});
	stopButton.addEventListener('click', function(){
	alert('I\'m a button of target.');
	});