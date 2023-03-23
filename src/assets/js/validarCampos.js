function validarCampos(classeCampos) {
  let campoVazio = false;

  //Recuperando classe dos inputs do formulário
  let inputs = document.getElementsByClassName(classeCampos);

  //Removendo o atributo de erro dos inputs
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].classList.remove("is-invalid");
  }

  //Verificando se algum campo está vazio
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value == "") {
      inputs[i].classList.add("is-invalid");
      campoVazio = true;
    }
  }

  return campoVazio;
}

function validarCamposComCondicoes(classeCampos, idCondicoes) {
  let campoVazio = false;

  //Recuperando classe dos inputs do formulário
  let inputs = document.getElementsByClassName(classeCampos);
  let condicoes = document.getElementById(idCondicoes);

  //Removendo o atributo de erro dos inputs
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].classList.remove("is-invalid");
  }

  //Verificando se algum campo está vazio
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value == "") {
      inputs[i].classList.add("is-invalid");
      campoVazio = true;
    }
  }

  if (!condicoes.checked) {
    condicoes.classList.add("is-invalid");
    campoVazio = true;
  }

  return campoVazio;
}
