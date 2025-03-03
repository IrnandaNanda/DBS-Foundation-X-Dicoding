// ! Biasanya penamaan constructor function ditulis dengan awalan huruf besar untuk membedakan dengan penamaan fungsi biasa.
// 🫴🫳🫴🫳
function Person(name, age) {
  // ? Ini adalah constructor function yang akan digunakan untuk sebuah object
  this.name = name;
  this.age = age;
}

Person.prototype.eat = function () {
  console.log(`${this.name} is eating`);
};

const person1 = new Person("Alice", 30); // ? Cara Membuat Sebuah object berdasarkan constructor function yang sudah ada
const person2 = new Person("Bob", 25); // ? Cara Membuat Sebuah object berdasarkan constructor function yang sudah ada

console.log(person1.name, person1.age); // Output: Alice
console.log(person2.name, person2.age); // Output: Bob

person1.eat();
person2.eat();
// ! Ini adalah cara lama membuat class pada javascript 👆👆👆👆



