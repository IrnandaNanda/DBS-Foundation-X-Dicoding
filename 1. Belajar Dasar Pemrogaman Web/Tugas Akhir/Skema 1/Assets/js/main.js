titleCard = document.getElementById("title-card");
bioCard = document.getElementById("bio-card");
titleCard2 = document.getElementById("title-card2");
bioCard2 = document.getElementById("bio-card2");

deskripsi = document.querySelector(".description");

deskripsi.style.display = "none";
bioCard.style.display = "none";

let hasil = true;
function view() {
  if (hasil ) {
    bioCard.style.display = "block";
    titleCard.style.display = "none";
    hasil = false;
  } else {
    bioCard.style.display = "none";
    titleCard.style.display = "block";
    hasil = true;
  }
}

function mouseIn() {
  deskripsi.style.display = "block";
  deskripsi.style.transition = "all 5s ease";
}

function mouseOut() {
  deskripsi.style.display = "none";
  deskripsi.style.transition = "all 5s ease";
}
