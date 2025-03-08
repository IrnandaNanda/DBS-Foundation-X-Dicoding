import { makeCoffee, sendCoffee } from './coffe.js';

console.log('Saya memesan kopi di kafe.');

makeCoffee(() => { // function makecoffe diisi dengan calback function sendcoffe
  sendCoffee(() => {
    console.log('Pramusaji memberikan kopi pesanan.');
    console.log('Saya mendapatkan kopi dan menghabiskannya.');
  });
});
