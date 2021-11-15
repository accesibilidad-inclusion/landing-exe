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
    sel.option("Librería Siglo");
    sel.option("Casa del libro");
    // sel.option("OpenSea");
    sel.changed(buy);
}

function buy(){
    switch(sel.value()){
        case "Amazon Kindle Store":
            window.open("https://www.amazon.es/s?k=expertos+por+experiencia");
            break;
        case "Apple Book Store":
            window.open("https://apps.apple.com/es/app/apple-books/id364709193");
            break;
        case "Google Books":
            window.open("https://books.google.cl/");
            break;
        case "Librería Siglo":
            window.open("https://libreriasiglo.com/buscar?s=Expertos+por+experiencia");
            break;
        case "Casa del libro":
            window.open("https://www.casadellibro.com/?q=expertos+por+experiencia");
            break;
    }
}