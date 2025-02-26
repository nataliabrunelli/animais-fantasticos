// NAVEGAÇÃO TAB
{
  const tabMenu = document.querySelectorAll("[data-tab='menu'] li");
  const tabContent = document.querySelectorAll("[data-tab='description'] section");

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");

    function ativarTab(index) {
      tabContent.forEach((description) =>
        description.classList.remove("ativo")
      );

      const direcao = tabContent[index].dataset.anime;
      tabContent[index].classList.add("ativo", direcao);
    }

    tabMenu.forEach((item, index) => {
      item.addEventListener("click", () => {
        ativarTab(index);
      });
    });
  }
}

// ACCORDION
{
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

// SCROLL SUAVE
{
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

// ANIMAÇÃO SCROLL
{
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
