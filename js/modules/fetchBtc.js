export default function fetchBtc() {
  const valorBtc = document.querySelector(".btc-preco");

  fetch("https://blockchain.info/ticker")
    .then((resposta) => resposta.json())
    .then((dados) => {
      let valor = dados.BRL.buy;
      valorBtc.innerHTML = (500 / valor).toFixed(4)
    })
    .catch(console.error(error));
}
