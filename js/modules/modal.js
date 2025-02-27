export default function modal() {
  const abrir = document.querySelector("[data-modal='abrir']");
  const fechar = document.querySelector("[data-modal='fechar']");
  const container = document.querySelector("[data-modal='container']");

  if (abrir && fechar && container) {
    function toggleModal(event) {
      event.preventDefault();
      container.classList.toggle("ativo");
    }

    abrir.addEventListener("click", toggleModal);
    fechar.addEventListener("click", toggleModal);
    container.addEventListener("click", (event) => {
      if (event.target === container) {
        container.classList.remove("ativo");
      }
    });
  }
}
