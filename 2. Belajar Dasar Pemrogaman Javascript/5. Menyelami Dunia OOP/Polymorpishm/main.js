class SmartPhones {
  constructor(color, brand, model) {
    this.color = color;
    this.brand = brand;
    this.model = model;
  }

  charging() {
    console.log(`Charging ${this.model}`);
  }
}

class Android extends SmartPhones {
  // Inheritance dari parent element SmartPhones
  constructor(color, brand, model, device) {
    // Menambahkan property baru pada Child element atau sering disebut overiding consturctor
    super(color, brand, model); // kita harus menambahkan syntax Super untuk menandai apa saja property yang diturunkan dari parent element
    this.device = device;
  }

  charging() { // Overiding Method
    // memanggil method charging dari SuperClass (SmartPhones)
    super.charging();
    console.log(`Charging ${this.model} with fast charger`);
  }

  splitScreen() {
    console.log("Android have a Split Screen");
  }
}

const android = new Android("white", "B", "Galaxy S21", "smart TV");
