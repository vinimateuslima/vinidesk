/*Importação das tabelas*/
const tabelaChamado = require('../migrations/chamado');
const tabelaCategoria = require('../migrations/categoria');
const tabelaEstado = require('../migrations/estado');

/*Função para cadastrar chamados*/
async function cadastrarChamado(req, res) {

    //Recurepando dados do formulario
    let dados = req.body;

    //Cadastrando a chamado na tabela
    await tabelaChamado.create({
        nome: dados.nome,
        telefone: dados.telefone,
        departamento: dados.departamento,
        resumo: dados.resumo,
        id_categoria: dados.id_categoria,
        impacto: dados.impacto,
        id_estado: dados.id_estado,
        descricao: dados.descricao
    }).then(function (chamado) {

        return res.status(200).json({
            success: true,
            dados: chamado
        })
    }).catch(function (erro) {
        return res.status(400).json({
            success: false,
            messagem: erro.messagem
        })
    })
};

module.exports = cadastrarChamado;