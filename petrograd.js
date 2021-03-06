window.addEventListener("load", sidenVises);

function sidenVises() {

    console.log("siden vises");


    $.getJSON("http://petlatkea.dk/2017/dui/api/productlist?callback=?", visProduktListe);
    visProdukt();
}

function visProduktListe(listen) {
    console.table(listen);
    listen.forEach(visProdukt);

}


function visProdukt(produkt) {
    console.log(produkt);
    // klon produkt_template
    var klon = document.querySelector("#produkt_template").content.cloneNode(true);
    //indsæt data i klon
    klon.querySelector(".data_navn").innerHTML = produkt.navn;
    klon.querySelector(".data_pris").innerHTML = produkt.pris;

    klon.querySelector(".data_billede").src = "/pics/small/" + produkt.billede + "-sm.jpg";

    //append klon til .prodkut_liste
    document.querySelector(".produktliste").appendChild(klon);
}
