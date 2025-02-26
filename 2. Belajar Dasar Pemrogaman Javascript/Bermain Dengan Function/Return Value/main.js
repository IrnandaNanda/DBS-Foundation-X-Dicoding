function sumNumbers(a, b) {
  const result = a + b;
  return result; //mengembalikan suatu nilai dari hasil proses yang berjalan
}

const result = sumNumbers(4, 6); // dan menyimpannya ke variabel.
console.log("Hasil dari function sumNumbers Adalah : " + result);

// Konversi Suhu
function convertCelsiusToFahrenheit(temperature) {
  if (temperature !== undefined) {
    // <-- conditional statement (perintah kondisional)
    const result = (9 / 5) * temperature + 32;

    return result;
  }
}

const temperatureInFahrenheit = convertCelsiusToFahrenheit(90);
console.log('Hasil Konversi suhu dari Celsius Ke Fahrenheit Adalah : ' + temperatureInFahrenheit)
