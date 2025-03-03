function checkGrades(grades) {
  // * Funtction yang menerima sebuah parameters grades
  for (let i = 0; i < grades.length; i++) {
    // ? Selama i Kurang dari panjang parameters grades maka selalu tambah i + 1
    if (typeof grades[i] !== "number") {
      // * Jika tipe parameter grades yang dimasukkan bukan number Maka jalankan ...
      throw new Error("Invalid input. Please provide an array of numbers."); // ? Bangkitkan Sebuah Error
    }

    const grade = grades[i]; // ? Variabel grade adalah parameters grades yang berupa array of number
    let predicate; // * Digunakan untuk menyimpan nilai predikat

    if (grade >= 90) {
      predicate = "A";
    } else if (grade >= 80) {
      predicate = "B";
    } else if (grade >= 70) {
      predicate = "C";
    } else if (grade >= 60) {
      predicate = "D";
    } else {
      predicate = "E";
    }

    console.log(`Grade ${i + 1}: ${grade} (${predicate})`);
  }
}

// ? Try-Catch digunakan untuk menangani exception ketika function checkGrades error.
// try {
//     const studentGrades = [90, 11, 80];
//     checkGrades(studentGrades);
// } catch (e) {
//     console.error(e); 
// }
// ? Di saat function checkGrades menerima argument berupa string, maka blok catch akan dibangkitkan


// ! Bisa juga di panggil seperti function biasa seperti berikut
checkGrades([10, 63, 90])