
// Bisa digunakan ketika ingin menampung banyak data
// Atau digunakan saat ingin menggabungan 2 object

const obj1 = { name: 'Dicoding' };
const obj2 = { lastName: 'Indonesia', address: 'Jl. Batik Kumeli No 50' };
const newObj = { ...obj1, ...obj2 };

console.log(newObj);


const originalObj = { name: 'Dicoding', age: 9 };
const copiedObj = { ...originalObj };

console.log(copiedObj);