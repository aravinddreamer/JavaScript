function validate(){
	var A = document.getElementById('inputValue1').value;
	var B = document.getElementById('inputValue2').value;
	A = A.trim()
	B = B.trim()
	A = A.split(',');
	B = B.split(',');
	var isNumber=function(element){
		return isNaN(element) === false;
	}
	if((A!="")&&(B!="")){
	if((A.every(isNumber))&&(A.every(isNumber))){
		console.log(A.length,B.length);
			getresult(A,B);
		}
	else{
		document.getElementById('result').innerHTML = "<br>All Elements Should be Number.</br>"
	}
	}
	else{
		document.getElementById('result').innerHTML = "<br>Input Cannot be Empty.</br>"
	}
} 

function getresult(A,B){
	var C = []
	var i = 0
	while ((i < A.length) || (i < B.length)){
		if((i < A.length) && (i < B.length)){
			var val1 = Number(A[i]);
			var val2 = Number(B[i]);
			if ((val1 % val2  ===  0) || (val2 % val1  ===  0)){
				if(val1 != val2){
				var min = (val1 > val2 ? val2 : val1);
				C.push(min);

				}
			}
			else{

				C.push(val1,val2);
			}
		}

		else if (i < A.length){

			C.push(Number(A[i]));
		}

		else {

			C.push(Number(B[i]));
		}

		i += 1;
	}
	document.getElementById('result').innerHTML = "Result : "+C;
	}