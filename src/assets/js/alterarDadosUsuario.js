const modal = new bootstrap.Modal(document.getElementById("mdlEditarCampos"));

//Exibindo o modal
document.getElementById("editarCampos").addEventListener("click", (e) => {
  modal.show();
});

// Campos do Modal
let resumoModal = document.getElementById("iptResumo");
let nomeModal = document.getElementById("iptNome");
let telefoneModal = document.getElementById("iptTelefone");
let departamentoModal = document.getElementById("iptDepartamento");

// Campos do Dados do Usuário
let tituloChamado = document.getElementById("tituloChamado");
let nome = document.getElementById("lblNome");
let telefone = document.getElementById("lblTelefone");
let departamento = document.getElementById("lblDepartamento");
let campoVazio = false;

//Função para inserir os dados alterados do usuário no chamado
function alterarDadosUsuario() {
  tituloChamado.innerText = resumoModal.value;
  nome.innerText = nomeModal.value;
  telefone.innerText = telefoneModal.value;
  departamento.innerText = departamentoModal.value;

  //Se tiver algum input vazio, exiba a mensagem de erro
  if (validarCampos("inputsModal")) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Por gentileza, preencha todos os campos obrigatórios!",
      confirmButtonColor: "#0075ff",
    });
  } else {
    //Escondendo o modal
    modal.hide();
  }
}
