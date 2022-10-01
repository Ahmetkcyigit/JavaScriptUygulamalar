let ad = "Ahmet";
let soyad = "Koçyiğit";
let yas = 8;
let sehir = "Ankara";
let mesaj = "Benim adım " + ad + ' ve soyadım ' + soyad + '. ' + sehir + "'de yaşıyorum. " + 'Emekliliğe ' + (65 - yas) + ' yılım kaldı. ';

//backtick 
mesaj = `Benim adım ${ad} ve soyadım ${soyad}. ${sehir}'de yaşıyorum. Emekliliğe ${(62 - yas)}  yılım kaldı.`;

// ternary operators
let emeklilik = (65 - yas > 0) ? "Emekliliğe " + (65 - yas) + " yıl kaldı. " : "Zaten emekli oldunuz";
mesaj = `Benim adım ${ad} ve soyadım ${soyad}. ${sehir}'de yaşıyorum. ${emeklilik}`;

console.log(mesaj);