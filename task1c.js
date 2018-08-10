function validate(){
		var A = document.getElementById('inputList').value;
		A = A.trim()
		A = A.split(',');							//spliting the input string and converting to array
		var isNumber=function(element){
			return isNaN(element) === false;
		}
		if((A!="")){
		if(A.every(isNumber)){
			var B  =  A 	
			getresult(A,B);
			}
		else{
			document.getElementById('result').innerHTML = "<br>All Elements Should be Numbers.</br>"
		}
		}
		else{
			document.getElementById('result').innerHTML = "<br>Input Cannot be Empty.</br>"
		}
	} 
function getresult(A,B){											//Assigining array A to B
		A = A.map(itr => Number(itr))							//converting all elements into Number type
		B = B.map(itr => Number(itr))							//converting all elements into Number type

		B.sort(function(a,b){ return a  - b});					//soting array B

		for(var i = 0;i < B.length; i ++){						//removing duplicates
			if(B[i] == B[i + 1])
				B.splice(i,1)
		}

		var middleElement  =  [];
		if(B.length%2  ==  1){									//finding mid value
			middleElement.push(B[Math.floor(B.length/2)]);
		}
		else{
			middleElement.push(B[B.length/2-1]);
			middleElement.push(B[B.length/2]);
		}


		Array.prototype.getAllIndex = function(key){			//prototype for getting all index of given key value
			var array = [];
			for(var i = 0;i<this.length;i++){
				if(key == this[i]){
					array.push(i)
				}
			}
			return array;
		}

		var txt = ""
		for(var i = 0;i<middleElement.length;i++){
			txt =  txt + "<br>Value : " + middleElement[i] + "   Index : "
			txt  =  txt + A.getAllIndex(middleElement[i])
		}
		document.getElementById('result').innerHTML = txt;
	}