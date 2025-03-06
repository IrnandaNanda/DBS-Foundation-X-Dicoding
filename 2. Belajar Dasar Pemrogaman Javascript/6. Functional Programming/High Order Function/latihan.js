function kerjakanTugas(mataKuliah, selesai) {
  // ? Function yang memiliki callback di argumennya maka disebut Higher Order Function
  // ? Function yang disimpan didalam argument disebut dengan callback
  console.log(`Selamat mengerjakan Matkul ${mataKuliah}`);
  selesai();
}

function selesai() {
  console.log("Selesai Mengerjakan Tugas");
}

kerjakanTugas("Pemrogaman Web", selesai);

// ! Fungsi menggunakan High Order Function
// ? 1. Abstraksi
// Semakin Besar sebuah program, semakin tinggi kompleksitasnya semakin membingungkan programmer nya

// // * Sebelum menggunakan Higher Order Function
// let total = 0,
//   count = 1;
// while (count <= 10) {
//   total += count;
//   count++;
// }
// console.log(total);

// // * Setelah menggunakan Higher Order Function
// function sum(one, two) {
//   return one + two;
// }

// function range(num) {
//   for (i = 1; i <= num; i++) {
//     console.log(`Angka Ke ${i}`);
//   }
//   return i + i
// }

// const penjumlahan = sum(range(10))
// range(10)
// console.log(penjumlahan)


// * Sebelum menggunakan HOF
for(i = 0; i < 10; i++) {
    console.log(`Ini menggunakan For ${i}`)
}

// * Setelah menggunakan HOF
function repeatLog(n) {
    for(i = 0; i < n; i++) {
        console.log(`ini menggunakan HOF ${i}`)
    }
}

repeatLog(10)