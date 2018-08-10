		var newline='<br><br>'
		///document.cookie=cookieName=cookievalue;expires=date;

		//setting a cookie
		function setCookie(cookieName, cookieValue, expiry) {
				cookieName=cookieName.toUpperCase();
			    var date = new Date();
			    date.setTime(date.getTime() + (expiry * 24 * 60 * 60 * 1000));
			    var expiry = "expires="+date.toUTCString();
			    document.cookie = cookieName + "=" + cookieValue + ";" + expiry + ";";
			    return true;
		}

		//getting a value from the cookie
		function getCookie(cookieName){
			cookieName=cookieName.toUpperCase();
			var allCookies=document.cookie.split(';');
			var txt=""
			for(var i=0;i<allCookies.length;i++){
				while (allCookies[i].charAt(0)==' ') {
					allCookies[i] = allCookies[i].substring(1,allCookies[i].length);
				}
				if(allCookies[i].startsWith(cookieName)){
				txt = txt+allCookies[i]+'<br>';
				}
			}
			return txt;
		}

		//to get all the cookies
		function getAllCookie(){
			var txt="<tr>"	
			var allCookies=document.cookie.split(';');
			for(var i=0;i<allCookies.length;i++){
				while (allCookies[i].charAt(0)==' ') {
					allCookies[i] = allCookies[i].substring(1,allCookies[i].length);
				}
				var cook=allCookies[i].split('=');
				txt=txt+"<td>"+cook[0]+'</td><td>'+cook[1]+'</td></tr>'
			}
			return txt;
		}

		//deleting a cookie
		function clearCookie(cookieName){
			cookieName=cookieName.toUpperCase();
			cookieName=cookieName+'='
			var allCookies=document.cookie.split(';');
			for(var i=0;i<allCookies.length;i++){
				while (allCookies[i].charAt(0)==' ') {
					allCookies[i] = allCookies[i].substring(1,allCookies[i].length);
				}	
				if(allCookies[i].startsWith(cookieName)){
				document.cookie = cookieName+ ';expires=Thu, 01 Jan 1970 00:00:01 toUTCString;';
				return true;
				break;
				}
			}
			return false;
		}