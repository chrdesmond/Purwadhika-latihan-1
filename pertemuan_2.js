if(7 > 5){
    console.log("executed if true")
}

if(7 > 5 == false){
    console.log("executed if true")
} //hasilnya false karena 7 memang lebih besar dari 5. saat di eksekusi tidak muncul, karena false

console.log(true == true)
console.log(false == false)
console.log(true == false)
console.log(true != true)

let name = "dimas"
let age = 34
console.log(name == "dimas")

if(name == "dimas") {
    console.log("hello", name)
}

if(name == "Dimas") {
    console.log("hello", name)
} else {
    console.log("please rename")
}

if(age > 17) {
    console.log(name+ " had ID")
} else {
    console.log(name, " doesn't have ID")
}

// traffic light
let trafficStatus = "red"

if(trafficStatus == "red") {
    console.log("car should stop")
} else if(trafficStatus == "yellow") {
    console.log("car should drive slowly")
} else if(trafficStatus == "green") {
    console.log("car should drive")
} else {
    console.log("traffic status are not valid")
}

let score = 95
// 85 - 100 = A
// 75 - 84 = B
// 0 - 74 = C
if(score <= 74) {
    console.log("C")
} else if (score <= 84) {
    console.log("B")
} else if (score >= 85) {
    console.log("A")
}

if(score >= 85 && score <=100) {
    console.log("A")
} else if (score >= 75 && score <= 84) {
    console.log("B")
} else if (score >= 0 && score <= 74) {
    console.log("C")
}

let fruit = "papayas"
switch(fruit) {
    case "orange": //fruit == "orange"
        console.log("orange are $0.59 a pounds")
        break
    case "mangoes":
    case "papayas":
        console.log("mangoes and papayas are $2.79 a pound")
        break
    default:
        console.log("sorry, we are out of fruit")
}

switch(trafficStatus) {
    case "red": 
        console.log("car should stop")
        break
    case "yellow":
        console.log("car should drive slowly")
        break
    case "green":
        console.log("car should drive")
        break
    default:
        console.log("traffic status error")
}

if(2) {
    console.log("dua")
}

if(0) {
    console.log("tiga")
}

if([]) { //kalo array [] itu dia kehitung true meskipun kosong
    console.log("dua")
}

if({}) { //kalo object {} itu dia kehitung true meskipun kosong
    console.log("dua")
}

if(undefined) {
    console.log("empat")
}

if(null) {
    console.log("empat")
}

if(NaN) {
    console.log("lima")
}

let car = "BMW" //kalo or itu pake ||, dan salah satunya true maka kesimpulannya true meskipun yang satunya lagi false
if(car === "BMW" || car === "toyota") {
    console.log("car is awesome")
} 

/*
true || true -> true
true || false -> true
false || false -> false 
*/

let score2 = 89

if(score2 >= 74 && score2 <= 100) {
    console.log("lulus")
}

/*
true && true -> true
true && false -> false
false && false -> false
*/


console.log((45 > 98) && (34 <= 34 || 39 <= 45)) // false && (true || true), akhirnya jadi false karena && false

let val = 1
const res = val == 1 ? true : false
console.log(res)

const res2 = score2 >= 74 && score2 <= 100 ? "LULUS" : "TIDAK LULUS"
console.log(res2)

const res3 = car === "BMW" || car === "toyota" ? "car is awesome" : "car is ugly"
console.log(res3)