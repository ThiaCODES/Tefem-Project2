const unorderedlist = document.querySelector("ul");
const navbtn = document.querySelector(".fa-bars");
const bright = document.querySelector(".fa-moon");
const container = document.querySelector(".container");
const heading = document.querySelector("header");
const links = document.querySelectorAll("a");
const dish = document.querySelectorAll(".dish");
const copyright = document.querySelector(".copyright");
bright.addEventListener("click", changeMode);
function changeMode() {
  document.body.classList.toggle("darkmode");
  if (document.body.classList.contains("darkmode")) {
    container.style.color = "white";
    heading.style.backgroundColor = "black";
    copyright.classList.remove();
    copyright.classList.add("edited");
    links.forEach((item) => {
      item.classList.add("link");
    });
  } else {
    container.style.color = " rgb(86, 81, 81)";
    copyright.classList.remove("edited");

    heading.style.backgroundColor = "white";

    links.forEach((item) => {
      item.classList.remove("link");
    });
  }
}
console.log(links);
function activeState() {}
links.forEach((item) => {
  item.addEventListener("click", () => {
    links.forEach((linkbtn) => {
      linkbtn.classList.remove("active");
      item.classList.add("active");
    });
  });
});
navbtn.addEventListener("click", showList);
function showList() {
  unorderedlist.classList.toggle("list");
  navbtn.classList.toggle("fa-xmark");
}
console.log(dish);
