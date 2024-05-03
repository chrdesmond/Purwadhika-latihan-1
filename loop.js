let val = 10
/*
-di tingkatkan / ditambahkan 5
-sebanyak 3 kali
*/

//val += 5
//console.log(val)
//val += 5
//console.log(val)
//val += 5
//console.log(val)

for(i = 1; i <= 3; i++) { // formatnya awalan; akhiran; step berapa langkah. 
    val+=5 
    console.log(val)// setelah eksekusi selalu check lagi apakah lebih besar atau lebih kecil nilai hasilnya
}

console.log(i)

console.log(10 % 2 == 0)
console.log(7 % 5 == 3)
console.log(9 % 3 == 3)
console.log(9 % 2 == 1)

/* 2-10
2
4
6
8
10
*/
for(j = 2; j <= 10; j+=2) {
    console.log(j)
}

for(let k = 1; k <= 10; k++) {
    if(k % 2 == 0) { //kalo hasilnya genap maka ditampilin, kayak di filter
        console.log(k)
    }
}

let start = 1 // formatnya cek dulu baru eksekusi
while(start <= 3) {
    console.log("ini")
    start++
}
//console.log(start)

//while mikir dulu baru lakuin, kalo do while lakuin dulu baru mikir

console.log("==========")
start2 = 1
do{
    console.log("do while ", start2)
    start2 *= 2
} while(start2 < 20)
//console.log(start2)

for(let i = 0; 1 <= 10; i++) { //break itu berhentiin looping
    console.log("hello")
    if(i == 3) {
        break
    }
}

for(let i = 0; i < 5; i++) {
    console.log(" dio says : ") //continue berarti menge skip perintah console log, tapi yang dihapus adalah console.log yang ada di bawah
    if(i === 3) continue // console log yang ada di atas continue tidak terpengaruh
    console.log("za warudo ", i)
}

for(let i = 0; i < 5; i++) {
    if(i === 3) continue
    console.log("what ", i)
}

let name = "aries dimas yudhistira"
console.log(name[0])
console.log(name[1])
console.log(name[2])
console.log(name[3])
console.log(name[4])

//cara cepatnya
for(let i = 0; i < name.length; i++) {
    console.log(name[i])
}

let count = 0
for(let i = 0; i < name.length; i++) { //.length untuk mendapatkan seluruh jumlah huruf di sebuah nama atau kalimat
    if(name[i] == "a") {
        count++
    }
}

console.log(count)








