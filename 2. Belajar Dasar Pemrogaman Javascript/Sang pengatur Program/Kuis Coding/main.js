function categorizeNumber(input) {
  /**
   * TODO:
   * Lengkapilah fungsi ini agar dapat menghasilkan output berupa kategori bilangan berdasarkan input yang diberikan.
   * Dengan ketentuan sebagai berikut:
   * 1. Jika input bukan number, bangkitkan (throw) error.
   * 2. Jika input adalah bilangan genap, kembalikan dengan nilai "Genap".
   * 3. Jika input adalah bilangan ganjil, kembalikan dengan nilai "Ganjil".
   * 4. Jika input adalah bilangan prima, kembalikan dengan nilai "Prima".
   * 5. Jika input adalah nol, kategorikan kembalikan dengan nilai "Nol".
   * 6. Jika input negatif, kembalikan dengan nilai "Negatif".
   */

  if (typeof input != "number") {
    // ? Jika input nilai nya bukan number maka bangkitkan error
    throw new error("Input yang anda masukan tidak valid");
  }

  if (input == 0) {
    // ? Jila value input sama dengan 0 maka Kembalikan nilai NOL
    return console.log("Nol");
  }
  if (input < 0) {
    // ? Jila value input kurang dari 0 maka Kembalikan nilai NEGATIF
    return console.log("Negatif");
  }

  if (prima(input)) { // ! Diambil dari function Prima
    return console.log("Prima");
  }

  //  ! Ternary Operator
  return input % 2 === 0 ? "Genap" : "Ganjil"; // ? Jika input modulus 2 hasilnya 0 maka jalankan Genap jika tidak jalankan Ganjil
}

function prima(num) { // ? Sebuah function dengan parameter num
  if (num < 2) return false; // ? Jika num kurang dari 2 maka berikan nilai false
  for (i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// Contoh
console.log(categorizeNumber(15)); // Output: "Ganjil"
console.log(categorizeNumber(12)); // Output: "Genap"
console.log(categorizeNumber(17)); // Output: "Prima"
console.log(categorizeNumber(0)); // Output: "Nol"
console.log(categorizeNumber(-5)); // Output: "Negatif"

try {
  categorizeNumber("abc");
} catch (error) {
  console.log(error.message);
} // Output: "Input harus berupa bilangan bulat"
