console.log("Hello World!"); // program akan menjalan ini yang pertama

setTimeout(function () {
  console.log("I'm stuck here :("); // dan ini yang ketiga
}, 3000);

console.log("Try to learn async javascript."); // Kemudian ini yang kedua

// ! Note : Berarti Javascript berjalan secara asynchronous atau tidak akan menunggu block/syntax lain selesai di eksekusi