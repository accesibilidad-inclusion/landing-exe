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
            window.open("https://www.amazon.es/dp/B09NWGB9P2", "_self");
            break;
        case "Apple Book Store":
            window.open("https://books.apple.com/us/book/expertos-por-experiencia/id1601247900?itsct=books_box_link&itscg=30200&ls=1", "_self");
            break;
        case "Google Books":
            window.open("https://books.google.es/books?id=1ahVEAAAQBAJ&lpg=PT5&lr&hl=es&pg=PT5#v=onepage&q&f=false", "_self");
            break;
        case "JSTOR":
            window.open("https://www.jstor.org/stable/j.ctv261rc3b?turn_away=true", "_self");
            break;
        case "Scribid":
            window.open("https://es.scribd.com/book/548390478/Expertos-por-Experiencia-El-proceso-de-investigacion-inclusiva-un-desafio-para-los-nuevos-tiempos", "_self");
            break;
    }
}