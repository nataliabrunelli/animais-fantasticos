export default function animacaoScroll() {
  const sections = document.querySelectorAll("[data-anime='scroll']");
  const windowMetadeHeight = window.innerHeight * 0.6;

  if (sections.length) {
    function animarAoScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionVisible = sectionTop - windowMetadeHeight < 0;

        if (sectionVisible) {
          section.classList.add("ativo");
        }
      });
    }

    animarAoScroll();

    window.addEventListener("scroll", animarAoScroll);
  }
}