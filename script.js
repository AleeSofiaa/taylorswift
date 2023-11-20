document.addEventListener("DOMContentLoaded", function() {
    var modoNocturnoBtn = document.getElementById("modoNocturnoBtn");
    var body = document.body;

    modoNocturnoBtn.addEventListener("click", function() {
        
        body.classList.toggle("modo-nocturno");

        
        body.classList.toggle("modo-claro");
    });
});