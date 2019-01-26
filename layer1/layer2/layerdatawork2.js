function start() {
	var progress = 0;
	setInterval( loadopen, 250 );
	function loadopen() {
		var inner = document.getElementById("loadcircle12");
		var outer = document.getElementById("loadcircle11");
		var message = document.getElementById("loadingmessage");
		if(progress < 328) {
			inner.style.width = progress + "px";
			inner.style.height = progress + "px";
			progress = progress + 1;
		}
		else {
			inner.style.width = progress + "px";
			inner.style.height = progress + "px";
			progress = progress - 1;
		}
		if(progress == 20) {
			message.innerHTML = "Loading.";
		}
		if(progress == 150) {
			message.innerHTML = "Loading..";
		}
		if(progress == 300) {
			message.innerHTML = "Loading...";
		}
	}
}
