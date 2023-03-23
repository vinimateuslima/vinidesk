const Sequelize = require('sequelize');//Importanto Sequelize
const db = require('./db'); //Importando Banco

//Criando tabela estado
const tabelaCategoria = db.define('categoria', {
    id_categoria: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nm_categoria: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    duracao: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, { freezeTableName: true });

//Método para verificar se tabela já existe
tabelaCategoria.sync();

//Exportando entidade
module.exports = tabelaCategoria