// ! Syarat Sebuah Pure Function
// 1. Menghasilkan nilai yang sama setiap kali dipanggil
// 2. Tidak memiliki efek samping yang mempengaruhi keadan diluar function tersebut

// ? Example : Not - Pure function (impure), Because ?
let value = 0;

function addWith(addingValue) {
  value += addingValue;
  console.log(`Current value is ${value}`);
  return value;
}

const result1 = addWith(1); // ? Tidak menghasilkan nilai yang sama setiap di panggil
const result2 = addWith(1); // ? ada efek samping *Menghasilkan perubahan di keadaan luar function
const result3 = addWith(1); 

console.log(result1, result2, result3); 
// ? End +++++

// ? example : Pure function, because
function addWith(value, addingValue) {
    return value + addingValue; // ? Tidak ada efek samping atau tidak menghasilkan perubahan di luar function
    // ? Selama nilai dari 2 argumen nilai nya sama
  }
  
  const hasil1 = addWith(0, 1);
  console.log(`result1 is ${result1}`); // ? Menghasilkan nilai yang sama setiap di panggil
  
  const hasil2 = addWith(result1, 1);
  console.log(`result2 is ${result2}`); // ? mengembalikan nilai yang sama dengan membuat nilai baru
  
  const hasil3 = addWith(result2, 1);
  console.log(`result3 is ${result3}`); 
  
  console.log(hasil1, hasil2, hasil3); 
