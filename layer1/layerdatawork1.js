function SemdName() {
	var Name = document.getElementById("NameForm");
	if(NameInput.elements[0].value == "Holy") {
		document.getElementById("greeting").style.display = "none";
	}
	else {
		document.getElementById("denied").style.display = "block";
	}
}
