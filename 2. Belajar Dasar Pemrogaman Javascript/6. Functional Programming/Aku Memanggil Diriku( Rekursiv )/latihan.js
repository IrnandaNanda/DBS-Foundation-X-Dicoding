// ! Bilangan faktorial menggunakan rekursive function

// ? Sebelum menggunakan rekursive
function faktorialLooping(n) {
    let hasil = 1;
    for(i = n; i > 0; i--) { // Nilai dari i adalah parameter n, jika i lebih dari 0, maka kurangi niai i
        hasil *= i; // variabel hasil sama dengan nilai i dikali hasil
    }
    return hasil // kembalikan nilai dari variabel hasil
}

const faktorialwithoutRekursive = faktorialLooping(5)
console.log(faktorialwithoutRekursive)

// ? Setelah menggunakan rekursive
function faktorial(n) {
    if(n === 0) return 1; // jika nilai n sama dengan 0 maka kembalikan nilai 1
    return n * faktorial(n-1) // Kembalikan nilai n yang dikali dengan function faktorial yang parameter n nya dikurangi 1
}

const faktorialWithrekursive = faktorial(5)
console.log(faktorialWithrekursive)