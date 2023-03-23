//Recuperando parametro passado na URL com o id do chamado
const urlParams = new URLSearchParams(window.location.search);

const chamadoParametro = urlParams.get("chamado");

let numeroChamado = document.getElementById("numeroChamado");
let tituloChamado = document.getElementById("tituloChamado");
let estado = document.getElementById("lblEstado");
let duracao = document.getElementById("lblDuracao");
let nome = document.getElementById("lblNome");
let telefone = document.getElementById("lblTelefone");
let departamento = document.getElementById("lblDepartamento");
let descricao = document.getElementById("lblDescricao");
let estadoCor;

const options = { method: "GET" };

fetch("http://localhost:3333/buscar-chamado/" + chamadoParametro, options)
  .then((response) => response.json())
  .then(async (response) => {
    if (response.chamado == null) {
      alert("Não foi encontrado nenhum chamado");
    } else {
      const dados = response.chamado;

      numeroChamado.innerText = dados.id_chamado;
      tituloChamado.innerText = dados.resumo;
      estado.innerText = dados.estado.nm_estado;
      duracao.innerText = dados.categorium.duracao + " Horas uteis";
      nome.innerText = dados.nome;
      telefone.innerText = dados.telefone;
      departamento.innerText = dados.departamento;
      descricao.innerText = dados.descricao;

      //Verificando o estado e atribuindo o estilo a variável
      switch (dados.estado.nm_estado) {
        case "Aberto":
          estadoCor = "#007bff";
          break;

        case "Em andamento":
          estadoCor = "#17a2b8";
          break;

        case "Pendente":
          estadoCor = "#ffc107";
          break;

        case "Resolvido":
          estadoCor = "#28a745";
          break;

        case "Fechado":
          estadoCor = "#6c757d";
          break;

        default:
      }

      estado.style.backgroundColor = estadoCor;

      console.log(response);
    }
  })
  .catch((err) => console.error(err));
