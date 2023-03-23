/*Importação das tabelas*/
const tabelaChamado = require('../migrations/chamado');
const tabelaCategoria = require('../migrations/categoria');
const tabelaEstado = require('../migrations/estado');

/*Função para listar chamados*/
async function listarChamado(req, res) {

    await tabelaChamado.findAll({
        include: [
            {
                model: tabelaCategoria,
                attributes: ['nm_categoria'],
            },

            {
                model: tabelaEstado,
                attributes: ['nm_estado']
            }
        ]
    }).then(function (chamados) {
        return res.status(200).json({
            success: true,
            chamados: chamados
        });
    }).catch(function (erro) {
        return res.status(400).json({
            success: false,
            messagem: erro.message
        });
    });

}

module.exports = listarChamado;