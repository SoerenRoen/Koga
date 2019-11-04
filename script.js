document.querySelector("DOMContentLoaded", start);

const url = "https://madsgerner.dk/kea_s2/tema9/koga/wordpress/wp-json/wp/v2/cykler?per_page=50";
let cykler = [];

const skabelon = document.querySelector("template");
const liste = document.querySelector(".liste");

document.addEventListener("DOMContentLoaded", start);

function start() {
    hentJson();
}

async function hentJson() {
    const response = await fetch(url);
    cykler = await response.json();
    vis();
}
/*
        <template>
        <img src....
        </template>

        const template
        cykel.billeder.forEach(b =>{
        const klon = ----
        klon.src = b.guid;
        klon.alt =
        detalje. appendChild(klon);
        })
*/

function vis() {


    cykler.forEach(cykel => {
        console.log(cykler);
        const klon = skabelon.cloneNode(true).content;

        //                Billederne ligger i et array, og vi benytter os da af [0], for at vise det første billede i arrayet
        klon.querySelector(".img").src = cykel.billeder[0].guid;
        klon.querySelector(".img").alt = cykel.title.rendered + " billede";
        klon.querySelector(".title").textContent = cykel.title.rendered;
        liste.appendChild(klon);
    });

    //    cykel.billeder.forEach(b => {});
}
