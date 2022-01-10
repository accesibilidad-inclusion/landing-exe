/*

buy selector

*/

let sel;

function setup(){
    sel = createSelect();
    sel.parent("store-selector");
    sel.class('select-css');
    sel.option("Selecciona una tienda");
    sel.option("Google Books");
    sel.option("JSTOR");
    sel.option("Scribid");
    // sel.option("OpenSea");
    sel.changed(buy);
}

function buy(){
    switch(sel.value()){
        case "Google Books":
            window.open("https://books.google.es/books?hl=es&lr=&id=1ahVEAAAQBAJ&oi=fnd&pg=PT5&ots=FWkAuFHnpW&sig=GLQ-xouSPmpTl9jsI2Br7HAbKPA#v=onepage&q&f=false");
            break;
        case "JSTOR":
            window.open("https://www.jstor.org/stable/j.ctv261rc3b?turn_away=true");
            break;
        case "Scribid":
            window.open(" https://es.scribd.com/book/548390478/Expertos-por-Experiencia-El-proceso-de-investigacion-inclusiva-un-desafio-para-los-nuevos-tiempos");
            break;
    }
}