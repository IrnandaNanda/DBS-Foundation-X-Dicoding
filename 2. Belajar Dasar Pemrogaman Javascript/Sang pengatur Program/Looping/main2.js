// ! Control Statement

// ? Break

for (i = 0; i < 10; i++) { // Seharusnya code print out sebanyak 10 kalit
    if (i === 5) {
       console.log(`Ini adalah Angka Ke ${i}`)
       break // Tetapi karena ada Control Statement Break kode akan berhenti jika kondisi terpenuhi
    }
    console.log(i)
}
// ? NOTE : Break biasanga juga sering kita temukan di Switch Case



// ? Continue

for (x = 1; x < 10; x ++) {
    if (x === 5) { // Ketika variabel i sama dengan 5 maka variabel tersebut tidak akan ditampilkan
        continue // Dan akan tetap melanjutkan perulangan
        console.log('hai')
    }
    console.log(x)
}