window.onload = startUp;

function startUp() {
  document.getElementById("MapInnerList").addEventListener('click', openLink);
  document.getElementById("WeaponInnerList").addEventListener('click', openLink);
  document.getElementById("OtherInnerList").addEventListener('click', openLink);
  updateCalculator();
}

function openLink() {
  var elem  = event.target;
  var id    = elem.id;
  var className    = elem.className;
  if(className != "InnerList") {
    window.open(`steam://openurl/https://steamcommunity.com/sharedfiles/filedetails/?id=`+id);
  }
}

function updateCalculator() {
  var playerNumField = document.getElementById(`PlayerNum`);
  var innoNumField = document.getElementById(`InnoNum`);
  var traitorNumField = document.getElementById(`TraitorNum`);
  var detectiveNumField = document.getElementById(`DetecNum`);
  
  var ammountPlayers = playerNumField.value;
  var ammountInnocent = 2;
  var ammountTraitor = 1;
  var ammountDetective = 0;
  if(!isNaN(ammountPlayers)) {
    if(ammountPlayers < 2) {
      ammountInnocent = 0;
      ammountTraitor = 0;
      ammountDetective = 0;
      playerNumField.style.color = "#660000";
    } else {
      if(ammountPlayers >= 5){ammountDetective = 1;}else{ammountDetective = 0;}
      if(ammountPlayers%2 != 1) {
        
      } else {
        
      }
      playerNumField.style.color = "#000000";
    }
  } else {
    ammountInnocent = 0;
    ammountTraitor = 0;
    ammountDetective = 0;
    playerNumField.style.color = "#660000";
  }
  innoNumField.innerHTML = ammountInnocent;
  traitorNumField.innerHTML = ammountTraitor;
  detectiveNumField.innerHTML = ammountDetective;
}