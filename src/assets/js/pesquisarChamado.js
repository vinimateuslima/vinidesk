//Buscando através do campo de pesquisa
document.getElementById("formPesquisar").addEventListener("submit", function(e) {
  e.preventDefault(); //evito o submit do form ao apetar o enter..
  let pesquisar = document.getElementById("iptPesquisar").value;
  window.location.href = 'chamadoIndividual.html?chamado=' + pesquisar;

});
  