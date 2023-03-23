const Sequelize = require('sequelize');//Importanto Sequelize
const db = require('./db'); //Importando Banco

//Criando tabela estado
const tabelaImpacto = db.define('impacto', {
    id_impacto: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nm_impacto: {
        type: Sequelize.STRING(20),
        allowNull: false
    }
}, { freezeTableName: true });

//Método para verificar se tabela já existe
tabelaImpacto.sync();

//Exportando entidade
module.exports = tabelaImpacto