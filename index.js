const unorderedlist = document.querySelector("ul");
const navbtn = document.querySelector(".fa-bars");
navbtn.addEventListener("click", showList);
function showList() {
  unorderedlist.classList.toggle("list");
  navbtn.classList.toggle("fa-xmark");
}
