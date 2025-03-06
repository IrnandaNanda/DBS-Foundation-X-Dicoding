// ! High-Order-Function
// Terdiri dari sebuah function yang memanggil function lainnya "Callback"

function apply(operation, ...args) { // ? Spread Operator
    // kita bisa menambahkan kode lain sebelum operation dijalankan.
    
    return operation(...args)
  }
  
  function sum(a, b, c) { // ? Function untuk penambahan
    return a + b + c;
  }
  
  function discount(disc, value) { // ? Function diskon
    return value - ((disc / 100) * value);
  }
  
  const productPrice = apply(sum, 100, 100, 200); // ? Memanggil function apply yang didalam nya ada function sum
  const withDiscount = apply(discount, 25, productPrice); // ? Memanggil function apply yang ada callback function discount
  
  console.log('Product price:', productPrice); 
  console.log('With discount 25%:', withDiscount); 

console.log('==========================')

//   ! Teknik Currying pada javascript

// ? example one
function twoWords(one) {
    return function (two) {
        return `${one}, ${two}`
    }
}

const kataPertama = twoWords("Teknik")
console.log(kataPertama('Currying'));

// ? example two
function multipleX (one) {
    return function (two) {
        hasil = one * two
        return `Hasil perkalian adalah ${hasil}`
    }
}

const angkaPertama = multipleX(4)
console.log(angkaPertama(4))

console.log('==========================')

// ! Teknik Komposisi Fungsi

// ? example
function addOne(x) {
    return x + 1
}

function square(x) {
    return x * x
}

function compose(f,g) {
    return (x) => {
        return f(g(x)) // ? function g akan mengembalikan nilai, dan nilai akan digunakan untuk parameter function f
    }
}

const addOneAndSquare = compose(addOne, square)

console.log(addOneAndSquare(2))

console.log('===================')

// ! Menggunakan Array

const numbers = [1,2,3,4]

const double = numbers.map((num) => num * 2)

console.log(numbers)
console.log(double)