let sonuc;

sonuc = 10; // number
sonuc = "10"; // string
sonuc = Number("10"); // Number
sonuc = parseInt("10.6"); // 10 olarak döndürür.
sonuc = parseFloat = ("10.6"); // 10.6 dödürür.
sonuc = parseInt("10a"); // a yı çevirmez
sonuc = parseInt("a10"); // a başta olduğundan çeviremez.

sonuc = isNaN("10a");

let sayi = 15.213234;
sonuc = sayi.toPrecision(5); // 5 basamaklı değer döndürür. 15.213
sonuc = sayi.toFixed(5); // ondalıklı sayıdan 5 basamak alır.

sonuc = Math.round(2.4); // 2 ye yuvarlar
sonuc = Math.round(2.6); // 3 ye yuvarlar
sonuc = Math.ceil(2.1); // 3 e yuvarlar
sonuc = Math.floor(2.9); // 2 ye yuvarlar
sonuc = Math.sqrt(25); // 5 e çevirir karekök
sonuc = Math.pow(2, 3); // 2 nin 3. kuvveti
sonuc = Math.abs(-10); // mutlak değer
sonuc = Math.random(); // rastgele sayı üretir 0 ile 1 
sonuc = Math.random() * 10; // rastgele sayı üretir 0 ile 9 
sonuc = Math.floor(Math.random() * 10) + 1; // 1 ile 10 arasında sayı üretip aşağıya yuvarlar.

console.log(typeof sonuc);
console.log(sonuc);