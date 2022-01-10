/*

buy selector

*/

let sel;

function setup(){
    sel = createSelect();
    sel.parent("store-selector");
    sel.class('select-css');
    sel.option("Selecciona una tienda");
    sel.option("Amazon Kindle Store");
    sel.option("Apple Book Store");
    sel.option("Google Books");
    sel.option("JSTOR");
    sel.option("Scribid");
    // sel.option("OpenSea");
    sel.changed(buy);
}

function buy(){
    switch(sel.value()){
        case "Amazon Kindle Store":
            window.open("https://www.amazon.es/Expertos-por-Experiencia-investigaci%C3%B3n-inclusiva-ebook/dp/B09NWGB9P2/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=K8Q87JAWFXXM&keywords=expertos+por+experiencia&qid=1641816358&sprefix=expertos+por+experienci%2Caps%2C307&sr=8-1");
            break;
        case "Apple Book Store":
            window.open("https://books.apple.com/us/book/expertos-por-experiencia/id1601247900?itsct=books_box_link&itscg=30200&ls=1");
            break;
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