function convertCelsiusToFahrenheit(temperature) {
  if (temperature !== undefined) { // <-- conditional statement (perintah kondisional)
    const temperatureInFahrenheit = 9 / 5 * temperature + 32;
 
    console.log('Hasil konversi:', temperatureInFahrenheit);
  }
  }

  //Memasukan nilai dalam variabel secara langsung
  convertCelsiusToFahrenheit(90) // Cara Pertama Pemanggilan function

  // Memasukan Nilai kedalam function dengan variabel
  const temperatureInCelcius = 90;
  convertCelsiusToFahrenheit(temperatureInCelcius); // Pemanggilan function kedua dengan cara dimasukan kedalam variabel

  convertCelsiusToFahrenheit() // Tidak dijalankan karena bernilai undifined, tidak sesuai dengan kondisi didalam function