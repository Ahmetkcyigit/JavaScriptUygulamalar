let kursAdi = "Komple Uygulamalı Web Geliştirme Eğitimi.";

let sonuc;

sonuc = kursAdi.toLowerCase();
sonuc = kursAdi.toUpperCase();
sonuc = kursAdi.length;

sonuc = kursAdi[1];
sonuc = kursAdi.slice(0, 6); // 0. index ile 6. index arasında olan değeleri alır.
sonuc = kursAdi.slice(10); // 10. indexden sonrasını alır.
sonuc = kursAdi.slice(-10); // Geriden başlar.

sonuc = kursAdi.substring(0, 6);
sonuc = kursAdi.substring(10);

sonuc = kursAdi.replace("Eğitimi", "Kursu"); //Eğitim yazan yeri kursu olarak değiştirir.
sonuc = kursAdi.trim(); // Baştaki ve sondaki gereksiz boşlukları siler.

sonuc = kursAdi.indexOf("Komple") // Bu değer kaçıncı indexte yer alıyor.
sonuc = kursAdi.split(" "); // Kelimeleri tek tek ayırır.
sonuc = kursAdi.split(" ")[0];

console.log(sonuc);