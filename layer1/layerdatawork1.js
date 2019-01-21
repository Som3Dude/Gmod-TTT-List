function SendName() {
	var Name = document.getElementById("NameForm");
	Name.elements[0].value;
	if( (Name.elements[0].value.toLowerCase() == "holy") || (Name.elements[0].value.toLowerCase() == "fenister") || (Name.elements[0].value.toLowerCase() == "manu") ) {
		document.getElementById("greeting").style.display = "none";
		document.getElementById("main_screen").style.display = "block";
		document.getElementById("Welcome_Message").innerHTML = "Welcome "+Name.elements[0].value;
	}
	else {
		document.getElementById("denied").style.display = "block";
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
