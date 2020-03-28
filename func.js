window.onload = startUp;

function startUp() {
  document.getElementById("MapInnerList").addEventListener('click', openLink);
  document.getElementById("WeaponInnerList").addEventListener('click', openLink);
  document.getElementById("OtherInnerList").addEventListener('click', openLink);
  updateCalculator();
  
  fillMaps();
  fillWeapons();
  fillOther();
}

var mapList = [
  `Casino|169342118`,
  `Mystery Shack|1112643697`,
  `Aztec Shrine|1616801468`,
  `Zelda Outset Island|761923626`,
  `Zelda Kakariko|118937144`,
  `Ratskitchen|446623394`,
  `MC Haven|389346280`,
  `MC Skyislands|106498411`,
  `MC B5|159321088`,
  `MC Snowden|844793292`,
  `MC Craftroom|652423997`,
  `Island 2013|183797802`,
  `Scar Island|185635263`,
  `MTT Resort|719634946`,
  `Waterworld Remaster|1293781407`,
  `Pool Party|1388481216`,
  `Neptunia|1270473227`,
  `Bikini Bottom|1475589106`,
  `Stargate|177663377`,
  `Tardis|750640234`,
  `Skybreak|1419089916`,
  `Oilrig|1631864277`,
  `Spooky BBQ|767284725`
];
var weaponList = [
  `Pianogun|1839618396`,
  `Golden Revolver|974806391`,
  `Cloaking Device|1802717950`,
  `Holster Push|1969872846`,
  `Homing Pigeon V2|1894982220`,
  `Friendship Beam V2|1909269337`,
  `Flashbang|1972213885`,
  `Melon Mine V2|1629914760`,
  `Juggernaut Suit|1640512667`,
  `Glider|1841223226`,
  `Defibrillator V2|1892938575`,
  `Thomas (Trump) V2|1943354723`,
  `Throwable Crowbar|1961869471`,
  `Dance Wand|1913651111`,
  `Microwave|514778608`,
  `SATM|671603913`,
  `G3SG1-Sniper|253736787`,
  `Gauss Rifle|646754302`,
  `Dead Ringer|810154456`,
  `Jihad Bomb|294444033`,
  `Homerun Bat|648957314`,
  `Chicken|922334896`,
  `Second Chance|672173225`,
  `Dupstep-Gun|646690198`,
  `Randomat|662342819`,
  `Cannibalism|709130154`,
  `Boom Body|922459145`,
  `Jetpack|284418937`,
  `MP40|676372924`,
  `Galil|337050940`,
  `Kriss Vector|371363909`,
  `PP19 Bizon|371364003`,
  `AUG H-Bar|337055385`,
  `Kriss Vector|371363909`,
  `Famas|337050692`,
  `Shotgun Pack|307345118`
];
var otherList = [
  `TTT-Core|1357204556`,
  `ULib|557962238`,
  `ULX|557962280`,
  `MapVote V2|1839994538`,
  `Round Info|1367128301`,
  `Advanced Spectator|1795338332`,
  `Team Outlines|1137493106`,
  `Better UI Animations|1369546619`,
  `Buy Notifications|1117144118`,
  `Legs|112806637`,
  `Meno Utilities|1895681986`,
  `MapIcon Fix|785456066`
];

var ListItem = function (name, id) {
  this.main = `<div class="ListItem" id="`+id+`">`+name+`</div>`;
};

function fillMaps() {
  var list = document.getElementById(`MapInnerList`);
  mapList.forEach(function (item) {
    item = item.split('|');
    var newItem = new ListItem(item[0], item[1]);
    list.innerHTML = newItem.main + list.innerHTML;
  });
}
function fillWeapons() {
  var list = document.getElementById(`WeaponInnerList`);
  weaponList.forEach(function (item) {
    item = item.split('|');
    var newItem = new ListItem(item[0], item[1]);
    list.innerHTML = newItem.main + list.innerHTML;
  });
}
function fillOther() {
  var list = document.getElementById(`OtherInnerList`);
  otherList.forEach(function (item) {
    item = item.split('|');
    var newItem = new ListItem(item[0], item[1]);
    list.innerHTML = newItem.main + list.innerHTML;
  });
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
    if(ammountPlayers < 3) {
      ammountInnocent = 0;
      ammountTraitor = 0;
      ammountDetective = 0;
      playerNumField.style.color = "#660000";
    } else {
      if(ammountPlayers >= 5){ammountDetective = 1;}else{ammountDetective = 0;}
      ammountTraitor = Math.trunc(ammountPlayers * 0.4);
      if(ammountPlayers == 7){ammountTraitor = 3;}
      if(ammountTraitor >= 5){ammountTraitor = 4;}
      
      ammountInnocent = (ammountPlayers - ammountTraitor) - ammountDetective;
      
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