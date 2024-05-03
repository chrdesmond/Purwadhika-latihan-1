//6 convert hari ke tahun, bulan, dan hari
let days = 400

let year = Math.floor(400 / 365)
let yearleft = 400 % 365
let month = Math.floor(yearleft / 30)
let daysleft = yearleft % 30

console.log(year, "Tahun", month, "Bulan", daysleft, "Hari")

const name = "jhonny"
let newName = name
//let newName = "Jhonny"
//name = "Jane" //karena name sudah const diawal, maka name tidak bisa diubah
console.log(newName)

let nama = "john"
nama = "Jane"
console.log(nama)

const Person = {
    name: "Jhonny",
    age: 26
}
const newPerson = Person //karena bentuk person adalah object, maka hasilnya masih bisa dirubah
newPerson.name = "Jane"
console.log(Person)

x = 10

console.log(x--)
console.log(x)

console.log(--x)

console.log("10" + 2) // hasilnya 12
console.log(2 + "10") // hasilnya 21
console.log("10" - 5)