const drawerButton = document.querySelector("#drawer-button");
const drawerNavigation = document.querySelector("#main-nav");

drawerButton.addEventListener("click", () => {
  drawerNavigation.classList.toggle("open");
});

document.body.addEventListener("click", (event) => {
  if (
    !drawerNavigation.contains(event.target) &&
    !drawerButton.contains(event.target)
  ) {
    drawerNavigation.classList.remove("open");
  }
});

function myCopy() {
  const textElement = document.getElementById("text");
  const textToCopy = textElement.innerText;

  navigator.clipboard.writeText(textToCopy);

  alert("Text copied to clipboard!");

  console.log(textToCopy);
}

const decribe2 = document.querySelector("#description-2");
const decribe = document.querySelector(".description");
decribe2.style.display = "none";

let hasil = true;
function change() {
  if (hasil) {
    decribe.style.display = "none";
    decribe2.style.display = "block";
    // hasil = false;
  } else {
    decribe.style.display = "block";
    decribe2.style.display = "none";
    // hasil = true;
  }
}

// value="Ideapad Slim 3, Serial Number : PF3NLLF5, Product Number : 82Kt00HLID, BIOS Version : GLCN46WW"
