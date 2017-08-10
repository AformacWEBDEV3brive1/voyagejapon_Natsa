
function mail() {
    var nbr = parseInt(document.getElementById('insert').childNodes.length);
    if(nbr < 8){
    var champ = document.createElement("input");
    champ.name = "email1";
    champ.type = "text";
    var bloc = document.createElement("p");
    
    var insert = document.getElementById("insert");
    bloc.appendChild(champ);
    insert.insertBefore(bloc, insert.lastChild);
    }
    else{
        
    }
}
function popin(){
    alert("Attention , il y a des cookies sur cette page!");
}
