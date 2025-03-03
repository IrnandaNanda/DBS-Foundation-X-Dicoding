const gajian = false;

console.log("Jalan-Jalan");

if (gajian) {
  console.log("Makan Di Restoran");
} else {
  console.log("Makan Dirumah");
}

const value = 90;

if (value >= 90) {
  console.log("Selamat Anda Lulus dengan nilai Terbaik");
} else if (value >= 80) {
  console.log("Selamat Anda lulus dengan nilai Biasa");
} else {
  console.log("Maaf anda belum lulus silahkan coba di ujian berikutnya");
}

// ! Bentuk Lain Dari If ... Else Statement ( Ternary Operation )
// ? let result = condition ? Value 1 : Value 2;

const price = 1000;
// let isMember = true
isMember = false;
const discount = isMember ? 0.1 : 0; // Jika Kondisi 'isMember' adalah true Maka beri nilai 0.1 Jika tidak beri nilai 0

console.log(`Anda Mendapatkan diskon sebesar ${discount * price}`); // 0.1 x 1000

// ! Switch Case

let fruit;
// const fruit = 'strawberry'

switch (fruit) {
  case "banana":
    console.log('i"m a banana');
    break;
  case "strawberry":
    console.log('i"m a strawberry');
    break;
  case "Apple":
    console.log('i"m a Apple');
    break;
  default:
    console.log("i am not fruits i am a programmer");
}