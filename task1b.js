function validate(){
var A = document.getElementById('inputValue1').value;
A = A.trim()
if((A!="")){
if(isNaN(A)==false){
		getresult(A);
	}
else{
document.getElementById('result').innerHTML = "<br>Input Should be Number.</br>"
}
}
else{
	document.getElementById('result').innerHTML = "<br>Input Cannot be Empty.</br>"
}
} 


function findSteps(A){
	for(var i = 1;i < A;i ++ ){
		var sum=((i * (i + 1))/2);
		if(A <= sum){
			return [i,(sum*2-2)];
		}
	}
}


function getresult(A){
		var txt=""
		A = Number(A);
		var safe = A;
		A = (A % 2 == 0 ? A : A-1)
		var totalDigits=A/2+1;										//+1 for Zero
		var totalSteps=findSteps(totalDigits);

		for(var i = 1;i <= totalSteps[0]; i ++ ){
			var startingValue=totalSteps[1];
			startingValue -= (i-1)*2;
			for(var j = 1; j <= (totalSteps[0]-i);j ++){
				txt = txt + '&nbsp' + '&nbsp' + '&nbsp' ;
			}
			for(var j = 1;j <= i;j ++){
				if(startingValue <= safe){
					txt = txt + startingValue + '&nbsp' + '&nbsp' + '&nbsp' ;
					startingValue += 2;
				}
				else{
					txt = txt + 'X' + '&nbsp' + '&nbsp' + '&nbsp' ;
				}
			}
			for(var j = 1; j <= (totalSteps[0]-i);j ++){
				txt = txt + '&nbsp' + '&nbsp' + '&nbsp' ;
			}
			totalSteps[1] -= (i*2);
			txt = txt + '<br>';
		}
		console.log(txt);
		document.getElementById('result').innerHTML = '<br>' + txt;
	}