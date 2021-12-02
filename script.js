function create(item){
    var wrapper = document.getElementById("wrapper")
    var newdiv= document.createElement("div");
    newdiv.setAttribute("class", "cell")
    wrapper.appendChild(newdiv);
    var bouton = document.createElement("input");
    bouton.setAttribute("value", item)
    bouton.setAttribute("type", "button");
    bouton.setAttribute("src",`img/image${item}.jpg`);
    bouton.setAttribute("id",item);
    bouton.setAttribute("onclick", "change(this.id)")
    newdiv.appendChild(bouton);
}

function change(clicked_id){
    var cliquer = document.getElementById(clicked_id);
    cliquer.setAttribute("type","image");
    // cliquer.setAttribute("onclick","rechange(this.id)");        //optionel pour re cacher l'image
}

// function rechange(clicked_id){                                  //optionel pour re cacher l'image
//     var cliquer2 = document.getElementById(clicked_id);
//     cliquer2.setAttribute("type","button");
//     cliquer2.setAttribute("onclick","change(this.id)");
// }

function random(array) {
    for (i=array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;  
    }
}



var nb =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
random(nb);
nb.forEach(create);