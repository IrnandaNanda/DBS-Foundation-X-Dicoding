// function untuk melakukan request ke server
function request(url, callback) {
    // melakukan request ke server
    // simulasi proses pemanggilan data ke url, akan delay 1 detik. setelah request selesai, panggil callback
    console.log(`Request ke ${url} dimulai`);
  
    setTimeout(() => {
      callback(url);
    }, 1000);
  }
  
  // function callback
  function callback(url) {
    console.log(`Request ke ${url} selesai`);
  }
  
  // memanggil function request dan passing function callback sebagai argument
  
  request("https://google.com", callback);
  request("https://facebook.com", callback);
  request("https://ruangguru.com", callback);