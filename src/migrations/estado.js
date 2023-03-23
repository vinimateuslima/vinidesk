const Sequelize = require('sequelize');//Importanto Sequelize
const db = require('./db'); //Importando Banco

//Criando tabela estado
const tabelaEstado = db.define('estado', {
    id_estado: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nm_estado: {
        type: Sequelize.STRING(20),
        allowNull: false
    }
}, { freezeTableName: true });

//Método para verificar se tabela já existe
tabelaEstado.sync();

//Exportando entidade
module.exports = tabelaEstado