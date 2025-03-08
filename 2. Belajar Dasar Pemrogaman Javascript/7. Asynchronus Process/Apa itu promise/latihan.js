/**
 * ## Promise

Sebuah objek yang merepresentasikan  keberhasilan / kegagalan sebuah event yang asynchronous di masa yang akan datang

Janji ( Terpenuhi / Ingkar )

State ( fullfield  / rejected / pending )

callback ( resoleve / reject / finally )

aksi ( then / catch )
 */

// ! Contoh 1
let ditepati = true
const janji1 = new Promise((resolve, reject) => {
    if(ditepati) {
        resolve('Janji telah ditepati')
    } else {
        reject('Ingkar Janji')
    }
})

janji1.then(Response => console.log('OK : ' + Response)).catch(Response => console.log('NOT OK : ' + Response))


// ! Contoh 2
let ditepati2 = true
const janji2 = new Promise((resolve, reject) => {
    if(ditepati2) {
        setTimeout(() => {
            resolve('Ditepati setelah beberapa waktu')
        }, 2000)
    } else {
        setTimeout(() => {
            resolve('Tidak ditepati setelah beberapa waktu')
        }, 2000)
    }
});

console.log('mulai')
console.log(janji2.then(() => console.log(janji2)))
console.log('Selesai')
