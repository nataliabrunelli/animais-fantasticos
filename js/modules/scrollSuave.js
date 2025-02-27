export default function smoothScroll() {
  const linksInternos = document.querySelectorAll("[data-scroll='suave'] a[href^='#']");

  function smoothScroll(event) {
    event.preventDefault();

    const href = this.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  if (linksInternos.length) {
    linksInternos.forEach((link) => {
      link.addEventListener("click", smoothScroll);
    });
  }
}