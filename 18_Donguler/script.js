/* 
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

for (let i = 0; i <= 10; i++) {
    console.log("merhaba");
}

let toplam = 0;
for (let i = 0; i <= 10; i++) {
    toplam += i;
}
console.log(toplam); 



let sayilar = [1, 4, 5, 8, 4, 3, 6, 7];
let toplam = 0;

for (let i = 0; i < sayilar.length; i++) {
    toplam += sayilar[i];
}

for (let i in sayilar) {
    toplam += sayilar[i];
}

for (let sayi of sayilar) {
    toplam += sayi;
}

console.log(toplam);

*/

let user = {
    "name": "Ahmet Koçyiğit",
    "username": "AhmetKocyt",
    "password": "12345",
    "email": "info@ahmet.com"
};

for (let key in user) {
    console.log(key);
    console.log(user[key]);
}