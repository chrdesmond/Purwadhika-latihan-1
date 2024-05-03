//1 luas persegi panjang
    p = 5
    l = 3
    console.log(p*l)
//2 keliling persegi panjang
    // keliling = 2 x (p + l)
    a = 5
    b = 3
    c = a + b
    d = 2*c
    console.log(d)
//3 diameter, pi, keliling, luas
    x = 5
    y = 2*x
    console.log(y) //diameter
    console.log(Math.PI) //pi number
    console.log(2*Math.PI*x) //keliling
    console.log(Math.PI*(5**2)) //luas

//4 sudut karena total sudut segitiga 180 derajat
    angle1 = 80
    angle2 = 65
    console.log(180-(angle1+angle2))
//5 perbedaan tanggal
    let date1 = new Date("2022-01-22")
    let date2 = new Date("2022-01-20")
    let result = (date1 - date2) / (1000 * 60 *60 * 24) //karena hasilnya masih dalam milisecond, maka kita harus bagi dengan milisecond. 1 hari 24 jam, 1 jam berapa menit. 1 menit berapa detik, 1 detik berapa milisecond
    console.log(result)
//6 convert hari ke tahun, bulan, dan hari
    let days = 400

    let year = Math.floor(days / 365)
    //let yearleft = days % 365 // modular mencari berapa sisa pembagian
    let yearleft = days - 365
    let month = Math.floor(yearleft / 30)
    //let daysleft = (days % 365) % 30
    let daysleft = yearleft - 30

    console.log(year, "years", month, "months", daysleft, "days")

console.log("a" > "b") //hasilnya false. karena b lebih besar
console.log("a" > "B") //hasilnya false. karena huruf kapital lebih kecil dan lebih belakang

console.log(days % 365)
