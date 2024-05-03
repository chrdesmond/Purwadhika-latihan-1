//1. convert celsius ke fahrenheit
    // contoh 60 celsius ke 140 fahrenheit
    console.log(((9/5)*60)+32)
//2. cek apakah angka ganjil atau genap
let angka = 25
if(angka % 2 == 0) {
    console.log("angka adalah genap")
} else {
        console.log("angka adalah ganjil")
    }

//cara lain
/*
let angka = 25
if(angka % 2 == 0) {
    console.log("angka adalah genap") // angka ganjil dibagi 2 sisanya 1
} else if(num % 2 == 1){
        console.log("angka adalah ganjil")
    }
*/

//3 cek apakah angka prima atau tidak
let num2= 8
let isPrime = true
for(let i = 2; i < num2; i++) {
    if(num2 % i == 0) {
        isPrime = false
        break;
    }
}

if(isPrime) { // maksudnya if(true)
    console.log(num2, "bilangan prima")
} else {
    console.log(num2, "bukan bilangan prima")
}

//4 sum dari 1 ke N
//N = 5
let res = 0
for(let j = 1; j <= 5; j++) {
    res = res + j // atau res += j
    console.log(res)
}

//5 faktorial dari sebuah angka
// !5
let hasil = 1
for(let i = 1; i <= 5; i++) {
    hasil = hasil * i
    console.log(hasil)
}

//6 print angka N fibonacci pertama

first_num = 1
second_num = 1

first_num = 1
second_num = 2

first_num = 2
second_num = 3

first_num = 3
second_num = 5

first_num = 5
second_num = 8

first_num = 1 // angka pertama 1
second_num = 1 // angka kedua 1

for(i = 3; i <= 15; i++) {
    let temp = first_num //1 // pake temp karena buat simpen angka first number
    first_num = second_num //1
        //2         // 1 + 1
    second_num = temp + second_num
    console.log("fib ke => ", i, " result fib --> ", second_num)
}

//angka prima adalah angka yang hanya bisa dibagi oleh 1 dan angka itu sendiri

for (let i = 1; i < 6; i++) {
    console.log(i);
}

var i = 5

for(i = 0; i <= 10; i++) {
    console.log(i)
}