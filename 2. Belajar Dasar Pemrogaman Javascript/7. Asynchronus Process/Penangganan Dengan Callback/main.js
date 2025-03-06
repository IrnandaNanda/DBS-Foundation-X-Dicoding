import { makeCoffee } from "./coffe.js";

console.log("Saya memesan kopi di kafe.");

makeCoffee(() => {
  console.log("Pramusaji memberikan kopi pesanan.");
  console.log("Saya mendapatkan kopi dan menghabiskannya.");
});
