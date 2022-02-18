function dropDownMenu(){
    var dm = document.getElementById('dropDownMenu');
    if(dm.className == "nav-list"){
        dm.className += " responsive";
        document.getElementById('info-content').style.paddingTop = "45vh";
        document.getElementById('About-me').style.paddingTop = "45vh";
        document.getElementById('Resume').style.paddingTop = "45vh";
        document.getElementById('Certificate').style.paddingTop = "45vh";
        document.getElementById('Contact-me').style.paddingTop = "45vh";
      }
      else{
        dm.className = "nav-list"
        document.getElementById('info-content').style.paddingTop = "20%";
        document.getElementById('About-me').style.paddingTop = "20%";
        document.getElementById('Resume').style.paddingTop = "20%";
        document.getElementById('Certificate').style.paddingTop = "20%";
        document.getElementById('Contact-me').style.paddingTop = "20%";
    }
}
