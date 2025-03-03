// ! Encapsulation
// Membuat data yang ada di class sebagai private atau tidak dapat dirubah

class CoffeeMachine {
  #temperature = 90;

  constructor(waterAmount) {
    this.waterAmount = waterAmount; // ? this digunakan untuk mengakses variabel yang berada didalam object
    this.#temperature = this.#defaultTemperature(); // ? this digunakan untuk mengakses variabel yang berada didalam object
  }

  set temperature(temperature) {
    // ? Setter Digunakan untuk mengatur data di dalam object
    console.log("you are not allowed to change the temperature");
  }

  get temperature() {
    // ? Getter Digunakan untuk mengambil data yang berada di dalam object
    return this.#temperature;
  }

  #defaultTemperature() {
    return 90;
  }
}

const coffee = new CoffeeMachine(10);
console.log("Sebelum diubah: ", coffee.temperature);
coffee.temperature = 100; // ! Ketika menerapkan GETTER dan SETTER nilai value tidak akan bisa dirubah
console.log("Setelah diubah: ", coffee.temperature);
