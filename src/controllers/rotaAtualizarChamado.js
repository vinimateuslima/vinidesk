/*Importação das tabelas*/
const tabelaChamado = require("../migrations/chamado");

async function atualizarChamado(req, res) {
  //Recurepando dados do formulario
  let dados = req.body;

  //Verificando se o chamado existe na tabela
  await tabelaChamado
    .findOne({
      where: {
        id_chamado: dados.id_chamado,
      },
    })
    .then(async function (chamado) {
      if (chamado != null) {
        //Atualizando tabela coletor
        await tabelaChamado
          .update(
            {
              id_impacto: dados.id_impacto,
              id_estado: dados.id_estado,
              id_categoria: dados.id_categoria,
              id_grupo: dados.id_grupo,
              descricao: dados.descricao,
              resolucao: dados.resolucao,
              nome: dados.nome,
              telefone: dados.telefone,
              departamento: dados.departamento,
              resumo: dados.resumo
            },
            {
              where: {
                id_chamado: dados.id_chamado,
              },
            }
          )
          .then(function () {
            return res.status(200).json({
              success: true,
            });
          })
          .catch(function (erro) {
            return res.status(400).json({
              success: false,
              messagem: erro.message,
            });
          });
      } else {
        res.status(400).json({
          success: false,
          messagem: "Chamado não encontrado",
        });
      }
    })
    .catch(function (erro) {
      return res.status(400).json({
        success: false,
        messagem: erro.message,
      });
    });
}

module.exports = atualizarChamado;
