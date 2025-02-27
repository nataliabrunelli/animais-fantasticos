export default function accordion() {
  const accordion = document.querySelectorAll("[data-anime='accordion'] dt");

  if (accordion.length) {
    accordion[0].classList.add("ativo");
    accordion[0].nextElementSibling.classList.add("ativo");

    accordion.forEach((item) => {
      item.addEventListener("click", () => {
        item.classList.toggle("ativo");
        item.nextElementSibling.classList.toggle("ativo");
      });
    });
  }
}
