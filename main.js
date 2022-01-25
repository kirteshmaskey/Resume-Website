function dropDownMenu(){
    var dm = document.getElementById('dropDownMenu');
    if(dm.className == "nav-list"){
        dm.className += " responsive";
    }
    else{
        dm.className = "nav-list"
    }
}