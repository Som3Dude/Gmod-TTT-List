function PlayerOne() {
  document.getElementById("traitors").innerHTML = "Traitors: Error";
  document.getElementById("detectives").innerHTML = "Detectives: Error";
  document.getElementById("innocents").innerHTML = "Innocents: Error";
}
function PlayerTwo() {
  document.getElementById("traitors").innerHTML = "Traitors: 1";
  document.getElementById("detectives").innerHTML = "Detectives: Error";
  document.getElementById("innocents").innerHTML = "Innocents: 1";
}
function PlayerThree() {
  document.getElementById("traitors").innerHTML = "Traitors: 1";
  document.getElementById("detectives").innerHTML = "Detectives: Error";
  document.getElementById("innocents").innerHTML = "Innocents: 2";
}
function PlayerFour() {
  document.getElementById("traitors").innerHTML = "Traitors: 1";
  document.getElementById("detectives").innerHTML = "Detectives: Error";
  document.getElementById("innocents").innerHTML = "Innocents: 3";
}
function PlayerFive() {
  document.getElementById("traitors").innerHTML = "Traitors: 2";
  document.getElementById("detectives").innerHTML = "Detectives: 1";
  document.getElementById("innocents").innerHTML = "Innocents: 2";
}
function PlayerSix() {
  document.getElementById("traitors").innerHTML = "Traitors: 2";
  document.getElementById("detectives").innerHTML = "Detectives: 1";
  document.getElementById("innocents").innerHTML = "Innocents: 3";
}
function PlayerSeven() {
  document.getElementById("traitors").innerHTML = "Traitors: 2";
  document.getElementById("detectives").innerHTML = "Detectives: 1";
  document.getElementById("innocents").innerHTML = "Innocents: 4";
}
function PlayerEight() {
  document.getElementById("traitors").innerHTML = "Traitors: 3";
  document.getElementById("detectives").innerHTML = "Detectives: 1";
  document.getElementById("innocents").innerHTML = "Innocents: 4";
}

function BootUp() {
  document.getElementById("Logo").style.display = "none";
  document.getElementById("Weapons").style.display = "none";
  document.getElementById("Maps").style.display = "none";
  document.getElementById("Other").style.display = "none";
  document.getElementById("Calculator").style.display = "none";
  document.getElementById("secret").style.display = "none";
  document.getElementById("nonmain").style.display = "block";
  var bar = document.getElementById("Bar1Inner");
  var counter = setInterval(BootUpBar, 16);
  var progress = 1;
  function BootUpBar() {
		if (progress >= 340) {
			clearInterval(counter);
			document.getElementById("Bar1Outer").style.display = "none";
			document.getElementById("Screen").style.display = "block";
			window.open("./layer1.html","_self")
		}
		else {
			progress++;
			bar.style.width = progress + 'px';
		}
	}
}
