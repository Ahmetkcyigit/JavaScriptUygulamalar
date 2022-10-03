let url = "https://www.sadikturan.com";
let kursAdi = "Komple Web Geliştirme Kursu";
let sonuc;

// Url kaç karakterlidir?
sonuc = url.length;

console.log(sonuc);

// kursAdi kaç kelimeden oluşmaktadır?
sonuc = kursAdi.split(" ").length;

console.log(sonuc);

// url https ile mi başlıyor?
sonuc = url.startsWith("https");

console.log(sonuc);

//kursAdi içerisinde Eğitimi kelimesi var mı? 
if (kursAdi.indexOf("Eğitimi") > -1) {
    console.log("Evet var");
} else {
    console.log("Hayır yok");
}

// url ve kursAdi değişkenlerini kullanarak iki stringi birleştirin.
kursAdi = kursAdi.toLowerCase();
kursAdi = kursAdi.replaceAll(" ", "-"); //Boşluk karakteri yerine tire koyduk.
kursAdi = kursAdi.replaceAll("ş", "s").replace("ı", "i");

sonuc = `${url}/${kursAdi}`;
console.log(sonuc);