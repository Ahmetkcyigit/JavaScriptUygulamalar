// dict, json

let user = {
    "name": "Ahmet",
    "last": "Kocyigit",
    "age": 23,
    "city": {
        "sehir": "Ankara",
        "ilce": "Mamak"
    },
    "hobiler": ["sinema", "spor"]
}

let user2 = {
    "name": "Ecehan",
    "last": "Saruhan",
    "age": 23,
    "city": {
        "sehir": "Ankara",
        "ilce": "Mamak"
    },
    "hobiler": ["sinema", "spor"]
}

let sonuc;

sonuc = user.name;
sonuc = user.last;
sonuc = user.age;
sonuc = user.city.sehir;
sonuc = user.city.ilce;
sonuc = user.hobiler[0];
sonuc = user.hobiler[1];

let users = [
    user,
    user2
];

sonuc = users[1].name;

let urunler = [
    {
        "urun_adi": "samsung s22",
        "urun_fiyat": 13000
    },
    {
        "urun_adi": "samsung s23",
        "urun_fiyat": 15000
    }
];

sonuc = urunler[1].urun_fiyat;

console.log(sonuc);