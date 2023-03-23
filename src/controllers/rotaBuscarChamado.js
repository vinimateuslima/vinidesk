/*Importação das tabelas*/
const tabelaChamado = require('../migrations/chamado');
const tabelaCategoria = require('../migrations/categoria');
const tabelaEstado = require('../migrations/estado');

/*Função para listar chamados individual*/
async function buscarChamado(req, res) {

    await tabelaChamado.findOne({
        include: [
            {
                model: tabelaCategoria,
                attributes: ['nm_categoria', 'duracao'],
            },

            {
                model: tabelaEstado,
                attributes: ['nm_estado']
            }
        ],
        where: {
            id_chamado: req.params.id
        }
    }).then(function (chamado) {
        return res.status(200).json({
            success: true,
            chamado: chamado
        });
    }).catch(function (erro) {
        return res.status(400).json({
            success: false,
            messagem: erro.message
        });
    });

}

module.exports = buscarChamado;