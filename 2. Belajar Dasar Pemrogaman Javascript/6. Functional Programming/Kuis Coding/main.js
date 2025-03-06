const sampleProducts = [
  { id: 1, name: "Laptop", category: "Electronics", price: 1000 },
  { id: 2, name: "Phone", category: "Electronics", price: 500 },
  { id: 3, name: "Shirt", category: "Apparel", price: 50 },
  { id: 4, name: "Shoes", category: "Apparel", price: 80 },
  { id: 5, name: "Watch", category: "Accessories", price: 200 },
];

function getProductsByCategory(products, category) {
  /**
   * TODO:
   * Gunakan metode array immutable untuk mengembalikan array produk yang termasuk dalam kategori yang diberikan.
   */
  return products.filter((product) => product.category === category);

  /**
   * filter parameter products dan hanya munculkan product dengan katagori yang cocok dengan parameter
   *
   */
}

function findProductById(products, id) {
  /**
   * TODO:
   * Gunakan metode array immutable untuk mengembalikan products dengan ID yang cocok dengan parameter.
   */

  return products.find((product) => product.id === id);

  /**
   * Temukan di parameter products sesuai dengan id yang diminta oleh parameter id
   *
   */
}

function calculateTotalPrice(products) {
  /**
   * TODO:
   * Gunakan metode array immutable untuk menghitung total harga semua produk.
   */
  let result;
  result = products.map((product) => product.price);
  return result.reduce((acc, currentValue) => acc + currentValue);

  /**
   * membuat variabel result, kemudian isi variabel result dengan value dari parameter product.price
   * Kemudian tambahkan semua value yang berada di dalam variabel result
   */
}

function applyDiscount(products, discount) {
  /**
   * TODO:
   * Gunakan metode array immutable untuk mengembalikan array baru,
   * di mana setiap produk memiliki harga yang sudah dikurangi dengan diskon yang diberikan.
   */

  return [...products].map((products) => ({
    ...products,
    price: products.price - (products.price * discount) / 100,
  }));
}

console.log(getProductsByCategory(sampleProducts, "Electronics")); // Should return products with id 1 and 2 👌
console.log(calculateTotalPrice(sampleProducts)); // Should return 1830 👌
console.log(applyDiscount(sampleProducts, 10)); // Should return products with prices reduced by 10% 👌
console.log(findProductById(sampleProducts, 3)); // Should return the product with id 3 👌
