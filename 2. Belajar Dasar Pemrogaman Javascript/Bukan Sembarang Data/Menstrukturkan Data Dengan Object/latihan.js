const profile = {
    nama : "irnanda",
    umur : 22,
    ips : [3.00, 2.50, 3.20],
    alamat : {
        jalan : "JL. abc No. 123",
        kota : 'Malang',
        provinsi : "Jawa Timur"
    }
};

// memanggil Object
console.log(profile.nama)
console.log(profile["umur"])

console.log(profile["ips"])
console.log(profile["ips"][2])

console.log(profile.alamat.kota)
console.log(profile["alamat"]["provinsi"])

// Latihan
const mhs = {
    nama : "irnanda",
    lulus : false,
    ipSemester : [3.00, 2.50, 3.20],
    ipKumulatif : function () {
        let total = 0;
        let ips = this.ipSemester;
        for( i = 0; i < ips.length; i++ ) {
            total += ips[i] // total = ips + ips
        }
        return total/ips.length // Kembalikan nilai total yang dibagi dengan panjang nilai dari ips
    }
}

console.log(mhs.ipKumulatif())