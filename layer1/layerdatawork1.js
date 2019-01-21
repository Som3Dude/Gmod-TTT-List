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
