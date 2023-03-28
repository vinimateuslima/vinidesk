document.getElementById("btnSalvar").addEventListener("click", function () {

  let numeroChamado = document.getElementById("numeroChamado");
  let impacto = document.getElementById("btnImpacto");
  let estado = document.getElementById("btnEstado");
  let grupo = document.getElementById("btnGrupo");
  let categoria = document.getElementById("btnCategoria");
  let descricao = document.getElementById("lblDescricao");
  let resolucao = document.getElementById("lblResolucao");

  // Campos do Dados do Usuário
  let tituloChamado = document.getElementById("tituloChamado");
  let nome = document.getElementById("lblNome");
  let telefone = document.getElementById("lblTelefone");
  let departamento = document.getElementById("lblDepartamento");


  /*if (estado.value == 4 || estado.value == 5) {

    alert('Aviso')
    let nomeEstado;
    switch (estado.value) {
      case 1:
        nomeEstado = "Resolver";
        break;
      
      case 2:
        nomeEstado = "Fechar";
      default:
        nomeEstado = "Resolver";
        break;
    }
     Swal.fire({
      title: `Aviso: ao ${nomeEstado} um chamado não poderar reabrir novamente!`,
      text: "Deseja continuar?",
      icon: "warning",
      confirmButtonText: "OK",
      confirmButtonColor: "#0075ff"
    })
  }*/

  // Verificando se o campo Estado está como resolvido
  if (
    (estado.value == 4 && resolucao.value == "") ||
    (estado.value == 5 && resolucao.value == "")
  ) {
    resolucao.focus();
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Preencha o campo de Resolução!",
      confirmButtonColor: "#0075ff",
    });
    
  } else {

   if (estado.value != 4 && estado.value != 5) {
      resolucao.value = null;
    }

    const options = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        /*nome: nome.value,
          telefone: telefone.value,
          departamento: departamento.value,
          resumo: resumo.value,*/
        id_chamado: numeroChamado.innerText,
        id_impacto: impacto.value,
        id_estado: estado.value,
        id_categoria: categoria.value,
        id_grupo: grupo.value,
        descricao: descricao.value,
        resolucao: resolucao.value,
        nome: nome.innerText,
        telefone: telefone.innerText,
        departamento: departamento.innerText,
        resumo: tituloChamado.innerText
      }),
    };

    console.log(options.body);

    fetch("http://localhost:3333/atualizar-chamado", options)
      .then((response) => response.json())
      .then(async (response) => {
        if (response.success == false) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Erro ao atualizar Chamado!",
          });
        } else {
          await Swal.fire({
            title: `Chamado ${numeroChamado.innerText} atualizado com sucesso!`,
            icon: "success",
            confirmButtonText: "OK",
            confirmButtonColor: "#0075ff",
          });

          location.reload();
        }
      })
      .catch((err) => console.error(err));
  }
});
