export default function tootip() {
  const tooltips = document.querySelectorAll("[data-tootip]");

  tooltips.forEach((tip) =>
    tip.addEventListener("mouseover", (event) => {
      const target = event.currentTarget;
      const tooltipBox = criarTooltip(target);

      function handleMouseLeave() {
        tooltipBox.remove();

        target.removeEventListener("mouseleave", handleMouseLeave);
        target.removeEventListener("mousemove", onMouseMove);
      }

      onMouseMove.tooltipBox = tooltipBox;
      target.addEventListener("mousemove", onMouseMove);

      target.addEventListener("mouseleave", handleMouseLeave);
    })
  );

  const onMouseMove = {
    handleEvent(event) {
      this.tooltipBox.style.top = `${event.pageY + 20}px`;
      this.tooltipBox.style.left = `${event.pageX + 20}px`;
    },
  };

  function criarTooltip(element) {
    const tooltipBox = document.createElement("div");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = element.getAttribute("aria-label");
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }
}
