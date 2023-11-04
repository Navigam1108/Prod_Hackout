var counter= 1;

function addelement() {
var completelist= document.getElementById("thelist");

completelist.innerHTML += "<li>Item " + counter + "</li>";
counter++;
}

function subelement() {
    var completelist= document.getElementById("thelist");
    
    completelist.innerHTML -= "<li>Item " + counter + "</li>";
    counter--;
}

