const user = {
    name: 'Dicoding',
    lastName : 'Indonesia',
    age : 9

}

// Mengakses Object menggunakan dot
console.log(user.name);

// Mengakses menggunakan square bracket
console.log(user["lastName"])

// Memanggil Object dengan cara destructuring
const { name, lastName, isMale = false } = user;
console.log( name, lastName)
console.log(isMale)

console.log("---------------")

// mengubah nilai di properti object
const product = { name: 'Sepatu', price: 23000 }

product.price = 10000
console.table(product)
console.log("Harga Sepatu Adalah : " + product.price)

// Menghapus Nilai properti didalam object
// delete product.price
delete product['price']
console.log(product)
console.table(product)