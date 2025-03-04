// ! Function Declaration
// function Mahasiswa(nama, energi) {
  // ! ini adalah sebuah object
//   let mahasiswa = {};
//   mahasiswa.nama = nama; // ? ini adalah property
//   mahasiswa.energi = energi; // ? ini adalah property

//   mahasiswa.makan = function (porsi) {
    // ? ini adalah method
//     this.energi += porsi;
//     console.log(`Haloo ${this.nama}, Selamat Makan`);
//   };
//   return mahasiswa;
// }

// const Irnanda = Mahasiswa("Irnanda", 10); // * sebelum menampilkan object kita harus instansiansi terlebih dahulu atau
// ! Instansiansi: membuat objek baru dari fungsi constructor

// console.log(Irnanda);

// Irnanda.makan(5);
// console.log(Irnanda);

// ! Constuctur function
// Keyword New
function Mahasiswa(nama, energi) {
  this.nama = nama;
  this.energi = energi;

  this.makan = function (porsi) {
    // ? ini adalah method
    this.energi += porsi;
    console.log(`Haloo ${this.nama}, Selamat Makan`);
  };
}

let Irnanda = new Mahasiswa('Irnanda', 15) // ! Sekarang wajib menggunakan new untuk consturctor 
console.log(Irnanda)

Irnanda.makan(5)
console.log(Irnanda)
