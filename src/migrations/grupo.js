const Sequelize = require('sequelize');//Importanto Sequelize
const db = require('./db'); //Importando Banco

//Criando tabela estado
const tabelaGrupo = db.define('grupo', {
    id_grupo: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nm_grupo: {
        type: Sequelize.STRING(50),
        allowNull: false
    }
}, { freezeTableName: true });

//Método para verificar se tabela já existe
tabelaGrupo.sync();

//Exportando entidade
module.exports = tabelaGrupo