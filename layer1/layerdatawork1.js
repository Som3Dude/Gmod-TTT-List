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
setInterval( updateClock, 200 );
function updateClock() {
	var rawtime = new Date();
	document.getElementById("clock").innerHTML = "The current time is<br>"+d.getHours() + d.getMinutes() + d.getSeconds();
}
