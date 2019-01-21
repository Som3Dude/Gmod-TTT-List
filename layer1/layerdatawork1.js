function SendName() {
	var Name = document.getElementById("NameForm");
	Name.elements[0].value;
	if(Name.elements[0].value == "Holy") {
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
	var hours = d.getHours();
	var minutes = d.getMinutes();
	var seconds = d.getSeconds();
	var AMPM = "";
	if (hours == 0) {
		ap = " AM"; hours = 12;}
	else if (hours < 12) {
		ap = " AM";}
	else if (hours == 12) {
		ap = " PM";}
	else if (hours > 12) {
		ap = " PM"; hours -= 12;}

	document.getElementById("clock").innerHTML = "The current time is<br>"+hours+":"+minutes+":"+seconds;
}
