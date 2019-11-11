document.querySelector("DOMContentLoaded", start);

document.addEventListener("DOMContentLoaded", start);


function start() {
    burgerMenu();
}

function burgerMenu() {
    console.log("sidenVises");
    document.querySelector("#menuknap").addEventListener("click", toggleMenu);
}

//Funktion til Bugermenu
function toggleMenu() {
    console.log("toggleMenu");
    document.querySelector(".burgermenu").classList.toggle("hidden");

    let erSkjult = document.querySelector(".burgermenu").classList.contains("hidden");

    if (erSkjult == true) {
        document.querySelector("#menuknap").textContent = "☰";
    } else {
        document.querySelector("#menuknap").textContent = "X";
    }
}
