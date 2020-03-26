window.onload = startUp;

function startUp() {
  document.getElementById("MapInnerList").addEventListener('click', openLink);
  document.getElementById("WeaponInnerList").addEventListener('click', openLink);
  document.getElementById("OtherInnerList").addEventListener('click', openLink);
}

function openLink() {
  var elem  = event.target;
  var id    = elem.id;
  var className    = elem.className;
  if(className != "InnerList") {
    window.open(`steam://openurl/https://steamcommunity.com/sharedfiles/filedetails/?id=`+id);
  }
}