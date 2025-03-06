function max(arrayOfNumbers) {
  return arrayOfNumbers
    .sort((a, b) => a - b) // urutkan nilai array
    .pop(); // hapus element terakhir di dalam array
}

const numbers = [10, 23, 24, 7, 42, 18]; // Membuat variabel  bertipe array dengan nama numbers
const largest = max(numbers); // membuat variabel dengan isi function max dan parameter besisi variabel number

console.log(largest); // Output: 42
console.log(numbers); // Output: [ 7, 10, 18, 23, 24 ]

console.log("=================");

//   ! Bedakan Copy by reference dan copy by value

// ? Contohh copy by reference
console.log("=== Copy By reference ===");
let myArr = [0, 1, 2, 4];
let myArr2 = myArr;

myArr2.push(6);

console.log(myArr);
console.log(myArr2);

console.log(myArr);
console.log();

// ? Contoh copy by value
console.log("=== Copy By Value ===");
let myNum = 27;
let myString = "Hai Sedang apa kamu";

let myNum2 = myNum;
let myString2 = myString;

myNum2 - 5;
myString2 += " Sekarang";

console.log(myNum);
console.log(myNum2);

console.log(myString);
console.log(myString2);
console.log("=============================");

const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// ! Filter
// Mencari angka >= 3

// Menggunakan for
// const newAngka = []
// for (i = 0; i < angka.length; i++) {
//     if (angka[i] >= 3) {
//         newAngka.push(angka[i])
//     }
// }
// console.log(newAngka)

// Menggunakan filter : Digunakan untuk mengatur urutan dari sebuah array atau object
const newAngka = angka.filter((a) => a >= 3); // ? Membuat array baru yang isinya di filter dengan method filter (value leih dari sama dengan 3)

console.log(newAngka);

// ! Map
// ? Map adalah salah satu contoh copy by value
// Tambahankan semua angka dalam array dengan 2
// const newAngka = angka.map(a => a + 2) // membuat array baru dengan nama newAngka dengan method map yang isinya mewakili isi value dari array angka, kemudian tambahkan dengan a + 2
// console.log(newAngka)

// ! Reduce
// Menambahkan semua angka di dalam array
// const newAngka = angka.reduce((acc, currentValue) => acc + currentValue,)
// console.log(newAngka)
