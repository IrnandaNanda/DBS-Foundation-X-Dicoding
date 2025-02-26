// ?Membuat Array dengan object constructor
const users = new Array();
console.log(users)

// ?Membuat Array Menggunakan Sintaks Array.from
const foo = Array.from('foo')
console.table(foo)

// ?Menyalin Array Menggunakan method Array.from
const pengguna = new Array('John', 'Jane', 'Jack', 'Jill')
const pelanggan = Array.from(pengguna)

console.table("ini adalah Array pertama : " + pengguna)
console.table("ini adalah salinan Array pertama : " + pelanggan)

// ?Membuat Array dengan cara literal ( Direkomendasikan )
const array = []
const fruits = ['apple', 'banana', 'strawberry']
console.table(fruits)

// ?Mengakses Elemen dalam array
console.log(fruits[2])


// !Memanipulasi Nilai Array

const numbers = [10, 20, 30, 40, 50]
console.table("Sebelum Dimanipulasi : " + numbers)

// ?Merubah Nilai Dalam Array
numbers[1] = 2
numbers[2] = 3
numbers[3] = 4
console.table("Sesudah Dimanipulasi : " + numbers)

// ?Menambahkan nilai dalam Array Menggunakan Push
// *Nilai yang ditambahkan akan berada di elemen terakhir
numbers.push(60)
console.log(numbers)

// ?Menghapus Index dan data dalam array
const tech = ['Android', 'Data Science', 'Web']
console.table(tech)

delete tech[1] // !menghapus data didalam array tech indeks ke 1 tetapi element dalam array tersebut masih ada
console.table(tech)
console.log("Panjang Element dalam array adalah : " + tech.length)

tech.splice(1,1) // !Menghapus element dan data yang berada di dalam array tech ( Hapus indeks ke-1 dan hanya hapus 1 elemen )
console.table(tech)
console.log('Panjang Element dalam array adalah : ' + tech.length)


// !Array Destructuring
// ?Destructuring digunakan untuk melihat isi dari array.

// Example one
const introduction = ['Hello', 'Arsy'];
const [greeting, name] = introduction;
console.log(greeting); 

// Example two
const colors = ['red', 'green', 'blue', 'white', 'black']
const [firstIndex, secondIndex, thirdIndex, ...extraColors] = colors
console.log(firstIndex)
console.log(secondIndex)
console.log(thirdIndex)
console.log(extraColors)

// !Array Method

// ? Reverse & Sort
const myArray = ['Android', 'Data Science', 'Web'];

// ? Reverse : Untuk membalik nilai di dalam array
myArray.reverse();
console.log(myArray);

// ? Sort : Digunakan untuk mengurutkan nilai array
myArray.sort();
console.log(myArray)
