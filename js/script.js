//Header

const button = document.getElementById("my-button");
const nav = document.getElementById("nav");

button.addEventListener("click", () => {
  nav.classList.toggle("show");
});

const links = document.querySelectorAll(".header ul li a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);
