function dropDownMenu(){
    var dm = document.getElementById('dropDownMenu');
    if(dm.className == "nav-list"){
        dm.className += " responsive";
    }
    else{
        dm.className = "nav-list"
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
