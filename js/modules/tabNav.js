export default function navegacaoTab() {
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