const mainMenu = document.querySelector(".mobile__navlist");
// const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".hamburger");
const menu_items = document.querySelectorAll(".mobile__navlist-item a");

openMenu.addEventListener("click",toggle);
// close menu when you click on a menu item
menu_items.forEach((item) => {
  item.addEventListener("click", toggle);
});

function toggle() {
   mainMenu.classList.toggle("show");
   openMenu.classList.toggle("hamburgerActive");

}

// prevent scroll when mobile menu showing
function preventScroll(e) {
  e.preventDefault();
  e.stopPropagation();

  return false;
}
mainMenu.addEventListener("wheel", preventScroll);



