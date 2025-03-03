// Membuat set
const mySet = new Set([1,2,3])
console.log(mySet)

// Menyimpan Data dalam set
const set = new Set();
set.add(1)
set.add('Apple')
set.add(2)
set.add('Banana')
console.log(set)

// Cara mengakses Sebuah Set harus menggunakan Looping
const Myset2 = new Set();
Myset2.add("Angka 1")
Myset2.add("Angka 2")

for (const number of Myset2) {
  console.log(number)
}
// Atau Bisa Menggunakan ForEach
Myset2.forEach((value) => console.log(value))
