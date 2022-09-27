// yas >= 18
// mezuniyet == "lise" ya da mezuniyet == "üniversite"

let mezuniyet = "universite";
let yas = 20;

if (yas >= 18 && (mezuniyet == "lise" || mezuniyet == "universite")) { // Bir şart sağlandığı için alabilir || dan dolayı
    console.log("ehliyet alabilir");
} else {
    console.log("şartlar tutmuyor.")
}

//  and
//  true , true => true
//  true , false => false

// or
// true , true => true
// true , false => true
// false , false => false