// ! Function rekursive 
// ? Berarti function yang memanggil diri nya sendiri


// ? Contoh Sebelum menerapkan function rekursive
function generateArray(n) {
  const result = []; // membuat array kosong dengan nama result
  for (counter = 0; counter <= n; counter++) {
    // nilai counter awalnya 0, jika counter kurang dari sama dengan parameter n, jalankan counter + 1
    result.push(counter); // tambahkan isi dari variabel counter kedalam array result
  }
  return result; // kembalikan nilai result
}

console.log(generateArray(5));

// ? Setelah menggunakan function rekursive
function generateArray2(n) {
  if (n <= 0) {
    // Jika parameter n kurang dari sama dengan 0 maka ...
    return []; // kembalikan nilai array kosong
  }

  return [...generateArray2(n - 1), n]; // kembalikan/panggil function generateArray2 kurangi nilai parameter dengan 1, kemudian tambahkan nilai n
}

console.log(generateArray2(5));
