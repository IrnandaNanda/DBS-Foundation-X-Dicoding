// ! Inheritance
// Memungkinkan class untuk mewariskan property dan method ke class yang lainnya

// ? Membuat sebuah construktor dengan class
class SmartPhones {
  constructor(color, brand, model) {
    // * kerangka atau cetakan atau property yang akan diberikan kepada setiap object
    this.color = color;
    this.brand = brand;
    this.model = model;
  }

  charging() {
    // * Method dari sebuah class construktor
    console.log(`Charging ${this.model}`);
  }
}

// ? Membuat inheritance ( Warisan ) class dari Smartphones dengan nama IOS
class IOS extends SmartPhones {
  // ! Walaupun hanya mendefinisikan method kita tetap dapat mengakses property pada parent class
  // ? Seperti ( Color, brand, model )
  airDrop() {
    console.log("iOS Have behavior AirDrop");
  }
}

// ? Membuat inheritance ( Warisan ) class dari Smartphones dengan nama Android
class Android extends SmartPhones {
  // ! Walaupun hanya mendefinisikan method kita tetap dapat mengakses property pada parent class
  // ? Seperti ( Color, brand, model )
  splitScreen() {
    console.log("Android have a split screen");
  }
}

// ? Membuat object dari child class
const ios = new IOS("white", "A", "12 Pro Max");
const android = new Android("Black", "B", "Galaxy S21");
// const nokia = new SmartPhones('Yelow', 'C', 'Nokia')

// ? Memanggil class smartphones
ios.charging();
android.charging();
// nokia.charging()

console.log("=================")

// ? Memanggil inheritance class dari smartphone
ios.airDrop();
android.splitScreen();

console.log("=================")

// ! Untuk mengetahui parent dari sebuah class
console.log(ios instanceof SmartPhones); // apakah class ios mewarisi class smartphones
console.log(android instanceof SmartPhones); // apakah class android mewarisi class smartphones