const drawerButton = document.querySelector("#drawer-button");
const drawerNavigation = document.querySelector("#main-nav");

drawerButton.addEventListener("click", () => {
  drawerNavigation.classList.toggle("open");
  console.log('Hello World')
});

document.body.addEventListener("click", (event) => {
  if (
    !drawerNavigation.contains(event.target) &&
    !drawerButton.contains(event.target)
  ) {
    drawerNavigation.classList.remove("open");
  }
});
