//Buscando através do campo de pesquisa
document.getElementById("formPesquisar").addEventListener("submit", function(e) {
  e.preventDefault(); //evito o submit do form ao apetar o enter..
  let pesquisar = document.getElementById("iptPesquisar").value;
  window.location.href = 'chamadoIndividual.html?chamado=' + pesquisar;

});

// Pesquisa dinâmica
document.getElementById("iptPesquisar").addEventListener("keyup", function () {

  let tbody = document.querySelector('tbody')
  let busca = document.getElementById("iptPesquisar").value.toLowerCase();

  // Percorrendo as do body para encontrar um valor
  for (let i = 0; i < tbody.childNodes.length; i++) {

      let achou = false;
      let tr = tbody.childNodes[i];
      let td = tr.childNodes;

      // Percorrendo as colunas do body para encontrar um valor
      for (let j = 0; j < td.length; j++) {
          let value = td[j].innerText.toLowerCase();
          
          if (value.indexOf(busca) >= 0) {
              achou = true;
          }
      }

      // Se encontrar, adicionar a classe "table-row" para exibir as linhas da pesquisa
      if (achou) {
          tr.style.display = "table-row";
      } 
      // Se não encontrar, adicionar a classe "none" para esconder as linhas
      else {
          tr.style.display = "none";
      }
  }

});
  