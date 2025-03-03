// ! ini perbedaan menggunakan if else dan switch case 

//  ? If Else
const day = new Date().getDay()

// console.log(day)

if (day === 0) {
    console.log('Minggu');
  } else if (day === 1) {
    console.log('Senin');
  } else if (day === 2) {
    console.log('Selasa');
  } else if (day === 3) {
    console.log('Rabu');
  } else if (day === 4) {
    console.log('Kamis');
  } else if (day === 5) {
    console.log('Jumat');
  } else if (day === 6) {
    console.log('Sabtu');
  } else {
    console.log('Hari tidak valid');
 }


//  ? Switch Case
const day2 = new Date().getDay();

switch (day2) {
  case 0:
    console.log('Minggu');
    break;
  case 1:
    console.log('Senin');
    break;
  case 2:
    console.log('Selasa');
    break;
  case 3:
    console.log('Rabu');
    break;
  case 4:
    console.log('Kamis');
    break;
  case 5:
    console.log('Jumat');
    break;
  case 6:
    console.log('Sabtu');
    break;
  default:
    console.log('Hari tidak valid');
}