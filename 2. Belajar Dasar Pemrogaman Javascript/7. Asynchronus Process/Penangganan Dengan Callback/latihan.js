// menambahkan 1 parameter callback
function calculate(param1, param2, callback) {
    // me-return hasil eksekusi dari callback
  return callback(param1, param2);
}

// Buat function callback untuk menambahkan 2 angka dan format mata uang $
function callbackPlusDolar(param1, param2) {
  return '$ ' + (param1 + param2);
}

// Buat function callback untuk mengalikan 2 angka dan format mata uang Rp
function callbackMultiplyRupiah(param1, param2) {
  return 'Rp ' + param1 * param2;
}

console.log(calculate(2000, 4000, callbackPlusDolar))
console.log(calculate(7000, 2000, callbackMultiplyRupiah)) 