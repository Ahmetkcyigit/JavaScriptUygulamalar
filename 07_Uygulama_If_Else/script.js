// Bir Sayının 10-50 arasında olup olmadığını kontrol ediniz.

let sayi1 = 10;

if (sayi1 >= 10 && sayi1 <= 50) {
    console.log("10 ile 50 arasında");
} else {
    console.log("10'dan küçük veya 50'den büyük.");
}

// Bir sayının pozitif tek sayı olup olmadığını kontrol ediniz.

let sayi2 = 21;

if (sayi2 % 2 == 1 && sayi2 >= 0) {
    console.log("Pozitif tek sayı.")
} else {
    console.log("Sayı pozitif değil ya da tek sayı değil.");
}

// x, y, z sayılarının büyüklük karşılaştırmasını yapınız. 

let x = 19, y = 211, z = 15;

if (x > y && x > z) {
    console.log("x en büyüktür.");
} else if (y > x && y > z) {
    console.log("y en büyüktür.");
} else if (z > y && z > x) {
    console.log("z en büyüktür.");
} else {
    console.log("sayılar eşit.");
}

// 2 vize (%40) ve  1 final (%60) notuna göre hesaplanan ortalama için;

let vize1 = 10, vize2 = 10, final = 70;
let ortalama = ((vize1 * 0.2) + (vize2 * 0.2) + (final * 0.6))


// Eğer ortalama 50 ve üstündeyse geçti değilse kaldı yazsın.

console.log("Ortalamanız: " + ortalama)
if (ortalama >= 50) {
    console.log("Geçtiniz.");
} else {
    console.log("Kaldınız.");
}

// Geçmek için ortalama 50 bile olsa final notu en az 50 olmalıdır.

console.log("Ortalamanız: " + ortalama)
if (ortalama >= 50 && final >= 50) {
    console.log("Geçtiniz.");
} else {
    console.log("Kaldınız.");
}

// Finalden 70 alındığında ortalama 50' nin altında bile olsa dersten geçilsin.

console.log("Ortalamanız: " + ortalama)
if (ortalama >= 50 || final >= 70) {
    console.log("Geçtiniz.");
} else {
    console.log("Kaldınız.");
} 