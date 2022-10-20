// Kendisine gönderilen kelimeyi belirtilen kez ekranda yazan fonksiyon 

function kelimeYazdir(kelime, adet) {
    for (let i = 0; i < adet; i++) {
        console.log(kelime);
    }
}
// kelimeYazdir("merhaba", 3);


// Dikdörtgenin alan ve çevresini hesaplayan fonksiyonu yazınız

function alanCevreHesapla(kisa, uzun) {
    let alan = kisa * uzun;
    let cevre = (kisa + uzun) * 2;

    return `alan: ${alan} çevre: ${cevre}`;
}

let sonuc = alanCevreHesapla(7, 10);
sonuc = alanCevreHesapla(7, 12);
// console.log(sonuc);


// Yazı tura uygulamasını fonksiyon kullanarak yapınız.
function yaziTuraAt() {
    let random = Math.random(); // 0-1 arasında
    if (random < 0.5) {
        console.log("yazı");
    } else {
        console.log("tura");
    }
}
// yaziTuraAt();


// Kendisine gönderilen bir sayının tam bölenlerini dizi şeklinde döndüren fonksiyonu yazınız.

function tamBolenler(sayi) {
    let sayilar = [];

    for (let i = 2; i < sayi; i++) {
        if (sayi % i == 0) {
            sayilar.push(i);
        }
    }
    return sayilar;
}
// console.log(tamBolenler(10));
// console.log(tamBolenler(15));


// Değişken sayıda parametre alan toplam isminde bir fonksiyon tanımlayınız.

function toplam() {
    let sonuc = 0;

    for (let i = 0; i < arguments.length; i++) {
        sonuc += arguments[i];
    }

    return sonuc;
}

console.log(toplam(2, 5));
console.log(toplam(2, 5, 7));
console.log(toplam(2, 5, 7, 6));

