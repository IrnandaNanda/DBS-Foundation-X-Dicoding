// Membuat MAP
const productMap = new Map([
  ["shoes", 500],
  ["cap", 350],
  ["jeans", 250],
]);

console.log(productMap);

// menyimpan nilai dalam MAP menggunakan // !SET
const map = new Map()
map.set('name', 'Irnanda')

console.log(map);
// Mengakses Nilai dalam MAP menggunakan // !GET
console.log(map.get('name'))

// Menghapus Nilai dalam MAP menggunakan // !DELETE
const map2 = new Map()
map2.set('name', 'Irnanda')
map2.set('lastName', 'Nanda')
map2.delete('lastName')
console.log(map2)
