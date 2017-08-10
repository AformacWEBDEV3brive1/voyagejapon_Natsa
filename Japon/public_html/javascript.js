function mail() {
    var length = parseInt(document.getElementById("insert").childNodes.length);

    console.log(length);
    if (length < 7) {

        var champ = document.createElement("input");
        champ.name = "email1";
        champ.type = "text";
        champ.id = "input";
        var bloc = document.createElement("p");
        var insert = document.getElementById("insert");
        bloc.appendChild(champ);
        insert.insertBefore(bloc, insert.lastChild);


    } else{
    }
}








