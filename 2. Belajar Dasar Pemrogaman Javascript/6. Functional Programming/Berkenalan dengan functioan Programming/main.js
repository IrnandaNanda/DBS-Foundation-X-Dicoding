// ? Metode Imperatif
// Metode yang menggunakan paradigma how to solve
// kita perlu menulis instruksi yang sifatnya langkah demi langkah
const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const newNamesWithExcMark = [];

for(let i = 0; i < names.length; i++) {
  newNamesWithExcMark.push(`${names[i]}!`);
}

console.log(newNamesWithExcMark);
// ? End ++++

// ? Metode Deklaratif
// Metode yang menggunakan paradigma what to solve
const namas = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const namaBaruDenganTambahanTanda = names.map((nama) => `${nama}!`);

console.log(newNamesWithExcMark); 
// gaya deklaratif yang notabene dianut dalam paradigma FP
// ? End ++++