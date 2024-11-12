const unorderedlist = document.querySelector(".Links");
const bright = document.querySelector("#bright");
const container = document.querySelector(".container");
const heading = document.querySelector("header");
const links = document.querySelectorAll("a");
const copyright = document.querySelector(".copyright");
const sidenav = document.querySelector(".sidebar");
bright.addEventListener("click", changeMode);
function changeMode() {
  document.body.classList.toggle("darkmode");
  bright.classList.toggle("fa-moon");
  bright.classList.toggle("fa-sun");
  if (document.body.classList.contains("darkmode")) {
    container.style.color = "white";

    heading.style.backgroundColor = "black";
    copyright.classList.remove();
    copyright.classList.add("edited");
    links.forEach((item) => {
      item.style.color = "white";
    });
  } else {
    container.style.color = " rgb(86, 81, 81)";
    copyright.classList.remove("edited");

    heading.style.backgroundColor = "white";

    links.forEach((item) => {
      item.classList.remove("link");
      item.style.color = "rgb(86, 81, 81)";
    });
  }
}
console.log(links);

//add active class

function activeState() {
  links.forEach((item) => {
    item.addEventListener("click", () => {
      unorderedlist.style.display = "none";
      links.forEach((linkbtn) => {
        linkbtn.classList.remove("active");
        item.classList.add("active");
      });
    });
  });
}
activeState();

function showList() {
  unorderedlist.classList.toggle("list");
  navbtn.classList.toggle("fa-xmark");
}
console.log(dish);

function showBar() {
  sidenav.style.display = "flex";
}

function closeBar() {
  sidenav.style.display = "none";
}
