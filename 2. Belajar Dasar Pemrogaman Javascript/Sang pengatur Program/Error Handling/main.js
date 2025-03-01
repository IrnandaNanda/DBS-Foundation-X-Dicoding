// ! Error Handling

// ? Throwing Error
// Cara Membangkitkan ERROR
// Error yang disengaja Untuk

// const error = new Error("Terjadi error");
// console.error(error);

// ? Kenapa kita perlu membangkitkan exception secara sengaja? Jawabannya adalah karena kita ingin program yang dibangun tidak mengalami crash ketika terjadi sesuatu di luar dugaan.

// ! Catching Error
// Cara Menangkap ERROR

// ? Try-Catch
try { // Tuliskan code yang kemungkinan akan error dalam blok try
  console.log("Memulai Program");
  throw new Error('Error: Program Berhenti') // Ketika error dibangkitkan, kode yang ada di bawahnya tidak akan tereksekusi. Pada kasus ini, program akan langsung lompat ke blok catch
  console.log("Akhir Program");
} catch (err) {
  console.log("Jika Ada Error Kode ini akan muncul");
} finally { // Berada di akhir program try-catch dan code ini akan selalu di eksekusi walaupun ada error atau tidak
    console.log("ini block code yang akan selalu di eksekusi")
}
