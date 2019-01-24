var Userclass = "Entry Denied";
function SendInfo() {
	var Name = document.getElementById("NameForm");
	var Pass = document.getElementById("PassForm");
	Name.elements[0].value;
	Pass.elements[0].value;
	if( (Name.elements[0].value.toLowerCase() == "holy" && Pass.elements[0].value == "Admin") || (Name.elements[0].value.toLowerCase() == "fenister" && Pass.elements[0].value == "00111000 01010000 01101100 01111001") || (Name.elements[0].value.toLowerCase() == "manu" && Pass.elements[0].value == "01010010 01100001 01100111 01100101") ) {
		document.getElementById("greeting").style.display = "none";
		document.getElementById("main_screen").style.display = "block";
		document.getElementById("Welcome_Message").innerHTML = "Welcome "+Name.elements[0].value;
		if (Name.elements[0].value.toLowerCase() == "holy") {
			Userclass = "Administrator";
		}
		else if ( (Name.elements[0].value.toLowerCase() == "fenister") || (Name.elements[0].value.toLowerCase() == "manu") ) {
			Userclass = "User";
		}
		
		if (Userclass == "Administrator") {
			document.getElementById("Newpass").style.display = "none";
			document.getElementById("Info").innerHTML = "Hello "+Name.elements[0].value+"<br>you are logged in as "+Userclass+"<br><br><u>Current Tasks:</u><br>-Give out Userpasswords. -Finished<br>-Finish Layer1<br>-Open Layer2, we need to go deeper.";
			document.getElementById("layer2").style.display = "block";
		}
		else if (Userclass == "User") {
			document.getElementById("Info").innerHTML = "Hello "+Name.elements[0].value+"<br>you are logged in as "+Userclass+" and will recieve your real Login-Code soon.<br>&nbsp;";
			if (Name.elements[0].value.toLowerCase() == "manu") {
				document.getElementById("Newpass").style.display = "none";
				document.getElementById("layer2").style.display = "block";
			}
			else if (Name.elements[0].value.toLowerCase() == "fenister") {
				document.getElementById("Newpass").style.display = "none";
				document.getElementById("layer2").style.display = "block";
			}
		}
	}
	
	else {
		document.getElementById("denied").style.display = "block";
		alert("Error: Username and Password are not Confirmed.");
	}
}
setInterval( updateClock, 1000 );
function updateClock() {
	var rawtime = new Date();
	var hours = rawtime.getHours();
	var minutes = rawtime.getMinutes();
	var seconds = rawtime.getSeconds();
	var AMPM = "";
	if (hours == 0) {
		AMPM = "AM";
		hours = 12;
	}
	else if (hours < 12) {
		AMPM = "AM";
	}
	else if (hours == 12) {
		AMPM = "PM";
	}
	else if (hours > 12) {
		AMPM = "PM";
		hours -= 12;
	}
	
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	if (seconds < 10) {
		seconds = "0" + seconds;
	}

	document.getElementById("clock").innerHTML = "The current time is:<br>"+hours+":"+minutes+":"+seconds+AMPM;
}
