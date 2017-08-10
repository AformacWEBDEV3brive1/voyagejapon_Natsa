var repeat = 0;
if (repeat < 4) {
    mail();
} else
    ;
function mail() {
    repeat = repeat + 1;
    var champ = document.createElement("input");
    champ.name = "email1";
    champ.type = "text";
    var bloc = document.createElement("p");
    var insert = document.getElementById("insert");
    bloc.appendChild(champ);
    insert.insertBefore(bloc, insert.lastChild);
}







