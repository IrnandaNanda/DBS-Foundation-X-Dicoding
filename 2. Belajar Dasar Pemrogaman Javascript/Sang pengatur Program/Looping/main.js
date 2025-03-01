// ! Looping FOR

// ? For Loop
for (i = 1; i <= 5; i++) {
    console.log(`Ini adalah perulangan Ke ${i}`)
}

console.log("============")

// ? For In
// Digunakan Untuk perulangan pada Object
const person = {name: 'Irnanda', origin: 'Malang', birtYear: 15}

// Const property Berarti buatkan variabel yang bernama property yang isinya akan mewakili value dari variabel person
for(const property in person) {
    console.log(`${property} Bernilai ${person[property]}`)
    // console.log(property)
    // console.log(person[property])
}

console.log("============")

// ? For Of
// Digunakan pada object yang bisa di Iterasi seperti arrays, strings, sets, dan maps.
const Foods = [ 'Bebek', 'Ayam', 'Telor', 'Tempe' ]


// Const Makanan Berarti Buat variabel yang bernama Makanan yang mewakili isi value dari array Foods
for (const Makanan of Foods) {
    console.log(Makanan)
}

console.log("============")

// ? For Each
// Khusus Digunakan Hanya untuk array
const nama = ['Aku', 'Anak', 'Sehat']
nama.forEach(n => console.log(n))

console.log("========================")


// ! Looping WHILE

// ? While
let x = 0

// Jika nilai X kurang dari 5 maka jalankan isi yang berada dalam while
while (x < 5) {
    console.log(`Angka ke - ${x}`)
    x++
}

// ? Do While
let y = 0

do {
    console.log(`Angka Ke ${y}`)
    y++
} while (y < 5)