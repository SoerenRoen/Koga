document.querySelector("DOMContentLoaded", start);
document.addEventListener("DOMContentLoaded", start);

const url = "https://madsgerner.dk/kea_s2/tema9/koga/wordpress/wp-json/wp/v2/cykler?per_page=50";
let cykler = [];

const skabelon = document.querySelector("template");
const liste = document.querySelector(".liste");



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
