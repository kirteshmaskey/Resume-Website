function dropDownMenu(){
    var dm = document.getElementById('dropDownMenu');
    if(dm.className == "nav-list"){
        dm.className += " responsive";
        document.getElementById('info-content').style.paddingTop = "45vh";
      }
      else{
        dm.className = "nav-list"
        document.getElementById('info-content').style.paddingTop = "20%";
    }
}


/*
var txt = 'Lorem ipsum dummy text blabla.';
var speed = 50;
  if (i < txt.length) {
    document.getElementById("info-content").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }*/
