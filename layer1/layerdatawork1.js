function SemdName() {
	var Name = document.getElementById("NameForm");
	Name.elements[0].value;
	if(NameInput.elements[0].value == "Holy") {
		document.getElementById("greeting").style.display = "none";
	}
	else {
		document.getElementById("denied").style.display = "block";
	}
}
