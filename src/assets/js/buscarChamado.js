
//Buscando através do campo de pesquisa
document.getElementById("formPesquisar").addEventListener("submit", function(e) {
  e.preventDefault(); //evito o submit do form ao apetar o enter..
  let pesquisar = document.getElementById("iptPesquisar").value;
  window.location.href = 'chamadoIndividual.html?chamado=' + pesquisar;



});



function buscarChamadoIndividual() {

  //Recuperando parametro passado na URL com o id do chamado
  const urlParams = new URLSearchParams(window.location.search);

  const chamadoParametro = urlParams.get("chamado");

  let numeroChamado = document.getElementById("numeroChamado");
  let tituloChamado = document.getElementById("tituloChamado");
  let impacto = document.getElementById("btnImpacto");
  let estado = document.getElementById("btnEstado");
  let categoria = document.getElementById("btnCategoria");
  let grupo = document.getElementById("btnGrupo");
  let duracao = document.getElementById("iptDuracao");
  let nome = document.getElementById("lblNome");
  let telefone = document.getElementById("lblTelefone");
  let departamento = document.getElementById("lblDepartamento");
  let descricao = document.getElementById("lblDescricao");
  let resolucao = document.getElementById("lblResolucao");
  let btnSalvar = document.getElementById("btnSalvar");
  let editarCampos = document.getElementById("editarCampos");


  // Campos do Modal
  let resumoModal = document.getElementById("iptResumo");
  let nomeModal = document.getElementById("iptNome");
  let telefoneModal = document.getElementById("iptTelefone");
  let departamentoModal = document.getElementById("iptDepartamento");

  const options = { method: "GET" };

  if (chamadoParametro == "") {
    alert("Não foi encontrado nenhum chamado");
  } else {

  fetch("http://localhost:3333/buscar-chamado/" + chamadoParametro, options)
    .then((response) => response.json())
    .then(async (response) => {
      if (response.chamado == null) {
        alert("Não foi encontrado nenhum chamado");
      } else {
        const dados = response.chamado;
              
        numeroChamado.innerText = dados.id_chamado;
        tituloChamado.innerText = dados.resumo;
        impacto.value = dados.id_impacto;
        estado.value = dados.id_estado;
        categoria.value = dados.id_categoria;
        grupo.value = dados.id_grupo;
        duracao.innerText = dados.categorium.duracao + " Horas uteis";
        nome.innerText = dados.nome;
        telefone.innerText = dados.telefone;
        departamento.innerText = dados.departamento;
        descricao.innerText = dados.descricao;
        resolucao.innerText = dados.resolucao;

        //Populando o Modal
        resumoModal.value = dados.resumo;
        nomeModal.value = dados.nome;
        telefoneModal.value = dados.telefone;
        departamentoModal.value = dados.departamento;

        // Desativando os campos de estado e resolução caso esteja Fechado
        if (estado.value == 5) {
          estado.setAttribute("disabled", true);
          resolucao.setAttribute("disabled", true);
          impacto.setAttribute("disabled", true);
          categoria.setAttribute("disabled", true);
          grupo.setAttribute("disabled", true);
          btnSalvar.setAttribute("disabled", true);
          editarCampos.setAttribute("disabled", true);
        }

        console.log(response);
      }
    })
    .catch((err) => console.error(err));
}
}

buscarChamadoIndividual();
