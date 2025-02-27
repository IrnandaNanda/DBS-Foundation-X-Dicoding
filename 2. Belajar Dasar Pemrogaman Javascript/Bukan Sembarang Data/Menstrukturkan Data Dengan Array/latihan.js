// ? Destructuring Array
const coba = ["satu", "dua", "tiga", "empat"];

// const [ a, b, c, d ] = coba

// !Skipping Items
// melewati beberapa items yang berada didalam array
const [a, , , d] = coba;
console.log(a);
console.log(d);

// !Swap Items
// menukar sebuah nilai
let x = 1;
let y = 2;
[x, y] = [y, x];
console.log(x);
console.log(y);

// !Rest Parameter
// Digunakan ketika ingin menampung banyak parameter dari array
const colors = ["red", "green", "blue", "white", "black"];
const [firstIndex, ...values] = colors;
console.log(firstIndex);
console.log(values);

// ? Desctructuring Object
// const mhs = {
//     nama : 'Irnanda',
//     umur : 22,
//     email : "Irnandatri1509@gmail.com"
// };

// const { nama, umur, email } = mhs
// console.log(nama)
// console.log(umur)
// console.log(email)

// !Destructuring tanpa deklarasi object
// ({ nama, umur } = { nama: "Irnanda", umur: 22 });
// console.log(nama);
// console.log(umur);

// !Assign ke variabel baru
// const mhs = {
//     nama : 'Irnanda',
//     umur : 22,
//     email : "Irnandatri1509@gmail.com"
// };

// const {nama : n, umur : u} = mhs
// console.log(u);

// ! Memberikan Default Value
// const mhs = {
//     nama : 'Irnanda',
//     umur : 22,
// };

// const {nama, umur, email = "email@default.com"} = mhs
// console.log(email)