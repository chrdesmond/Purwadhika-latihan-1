console.log("hello world")
//coba dulu
/*
    ini multi
    comment
*/

let message
message = "hello"

console.log(message)

/*kalo let diambil yang paling bawah*/
{
    let a = 10
}

{
    let a = 11
}

{
    let a = 15
    {
        /*let a = 12*/
        console.log(a)
    }
}

var ab = 45 /*kalo var ambil yang paling bawah atau terbaru*/
var ab = 12
console.log(ab)

{
    {
        {
            console.log("==>",ab)
        }
    }
}

/*let gk bisa di redeclare, tapi bisa re assign. kalo var bisa di re declare, bisa di re assign. const gk bisa di redeclare, gk bisa di re assign*/

const PI = 3.14
/*PI = 9.0*/

console.log(PI)

/*naming */
let name = "dimas"
let Name = "dimas" /*penggunaan huruf besar dan kecil berpengaruh, jadi n besar dan n kecil beda */
//let myname
let myAddress
let $name

/* let delete dan function lain gk boleh*/
let nama = "aries dimas yudhistira"
let isMarried = true
console.log(nama,PI, ab, isMarried)
console.table([nama,PI, ab, isMarried])

let person = {
    name:"Aries Dimas",
    age:"33 Tahun"

}
console.table(person)

let hobbies = ["rocket league", "counter strike 1.6", "genshin impact"]
console.table(hobbies)

console.log(nama.split(" "))

let postalcode = 1157
let address = `Jl. Pagedangan
desa karangtengah
tangerang selatan - ${nama} 
postal code ${postalcode}`

console.log(address)


// kalo ada yang pake "is" di depan, maka hasil selalu antara true dan false
// array itu kumpulan data kayak data yang ada koma-komaan. kalo object adalah kumpulan data yang berisi properti (atribut) dan perilaku (metode), dibuat dengan tanda []. Properti itu isinya berpasangan ada key dan value, misal nama: "dimas"

console.log(Boolean(1))
console.log(Boolean(0))
console.log(Boolean(123))
console.log(Boolean(23.45))
console.log(Boolean(-234))

console.log(Boolean("a"))
console.log(Boolean("b"))
console.log(Boolean("abc"))
console.log(Boolean("name"))
console.log(Boolean(" "))
console.log(Boolean(""))

console.log(Boolean([]))

console.log(Boolean(null))
console.log(Boolean(undefined))
console.log(Boolean(NaN))

console.log(new Date ())
console.log(new Date (0))
console.log(new Date ())

console.log(new Date ().getFullYear())
console.log(new Date ().getMonth())

let x = 10
//x = -x
//console.log(x)


console.log("1" + 2) // hasilnya 12
console.log(2 + "1") // hasilnya 21
console.log(1 + 1 + "1") // hasilnya 21
console.log("1" + 1 + 1) // hasilnya 111. karena string "" lebih kuat dan mempengaruhi number di belakangnya
console.log("10" - 5) // hasilnya 5, karena pengurangan hanya bisa dilakukan pada tipe number dan string "" diubah menjadi number 
// kalo pertambahan, string "" yang di awal akan melakukan penggabungan string dengan stringsifikasi dari number 5

x += 5
x += 5
x += 5
x += 5
console.log(x)
console.log(" postfix -->",x--) //x-- berarti kurang 1 //postfix hasilnya akan muncul setelahnya, maksudnya ketika ketik console.log(x) baru akan muncul hasil pertambahan atau pengurangan
console.log(x)
x++ //x++ berarti tambah 1

console.log(" prefix -->",--x) //prefix berarti hasilnya akan muncul saat itu juga, maksudnya ketika ketik console.log(" prefix -->",--x) maka hasil pertambahan atau pengurangannya akan muncul

console.log(" --->", (5 > 7) < (90 >= 90) <= 45) // false < true <= 45. terus true <= 45 karena true lebih besar dari false. karena true nilainya 1, dan false nilainya 0. kemudian hasilnya true karena 45 lebih besar dari true yang nilainya 1
console.log(5 > 7)
console.log(5 >= 7)
console.log(5 >= 5)
console.log(5 < 7)
console.log(5 < 7)
console.log(5 <= 7)
console.log(5 <= 7)

console.log(5 == 7) //false
console.log(5 == "5") //kalo == ada 2, dia nge check valuenya sama atau gk. hasilnya true
console.log(5 === "5") // kalo == ada 3, dia nge check value dan tipenya sama atau gk false
console.log(5 === 7) //true

console.log(5 != 4) // tanda != artinya tidak sama dengan. hasilnya true
console.log(!false) // tanda ! artinya kebalikannya. jadi hasilnya true

console.log("a" > "b") //hasilnya false. karena b lebih besar
console.log("a" > "B") //hasilnya true. karena huruf kapital duluan, dan huruf kecil lebih besar

console.log(true > false)
console.log(true == false)

console.log(5**2)// pangkat 2

console.log(Math.PI)

console.log(Math.abs(-67))
console.log(Math.abs(67))

console.log(4 % 2)
console.log(7 % 3)

