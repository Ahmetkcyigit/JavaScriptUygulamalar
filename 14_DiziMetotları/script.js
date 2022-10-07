let ogrenciler = ["çınar", "yiğit", "ada"];

sonuc = ogrenciler.length;

// array to string 
sonuc = ogrenciler.toString(); // çınar,yiğit,ada
sonuc = ogrenciler.join(" "); // çınar yiğit ada
sonuc = ogrenciler.join("-"); // çınar-yiğit-ada

//eleman silme
sonuc = ogrenciler.pop(); // son eleman silinir ve silinen eleman geri döndürülür. "ada"
sonuc = ogrenciler.shift(); // ilk eleman silinir ve silinen eleman geri döndürülür. "çınar"

// eleman ekleme
sonuc = ogrenciler.push("sena"); // dizinin sonuna eleman eklenir.
sonuc = ogrenciler.unshift("sena"); // listenin başına eleman ekler.

let markalar1 = ["mazda", "toyota"];
let markalar2 = ["opel", "renault"];
let markalar3 = ["bmw"];

sonuc = markalar1.concat(markalar2); // ikisini birleştirir.

sonuc = markalar1.splice(0, 0, "audi", "pejo"); // ekleme yaptık
sonuc = markalar1.splice(0, 1); // silme yaptık 0. indexden başla 1 tane sil

console.log(sonuc);
console.log(markalar1);