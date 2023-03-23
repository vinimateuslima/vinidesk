const Sequelize = require('sequelize');//Importanto Sequelize
const db = require('./db'); //Importando Banco
const tabelaCategoria = require('./categoria');//Importando tabela categoria
const tabelaEstado = require('./estado');//Importando tabela estado
const tabelaImpacto = require('./impacto');//Importando tabela impacto
const tabelaGrupo = require('./grupo');//Importando tabela grupo


//Criando tabela usuario
const tabelaChamado = db.define('chamado', {
    id_chamado: {
        type: Sequelize.INTEGER(6).ZEROFILL,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    resumo: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    descricao: {
        type: Sequelize.STRING(500),
        allowNull: false
    },
    nome: {
        type: Sequelize.STRING(100),
        allowNull: true
    },
    departamento: {
        type: Sequelize.STRING(50),
        allowNull: true
    },
    telefone: {
        type: Sequelize.STRING(15),
        allowNull: true
    },
    resolucao: {
        type: Sequelize.STRING(500),
        allowNull: true
    }
}, { freezeTableName: true });

//Relacionamento Categoria  1-1
tabelaChamado.belongsTo(tabelaCategoria, {
    constraint: true,
    foreignKey: 'id_categoria',
    allowNull: true
})

//Relacionamento Categoria 1-N
tabelaCategoria.hasMany(tabelaChamado, {
    foreignKey: 'id_categoria'
})

//Relacionamento Estado 1-1
tabelaChamado.belongsTo(tabelaEstado, {
    constraint: true,
    foreignKey: 'id_estado',
    allowNull: false
})

//Relacionamento Estado 1-N
tabelaEstado.hasMany(tabelaChamado, {
    foreignKey: 'id_estado'
})

//Relacionamento Impacto 1-1
tabelaChamado.belongsTo(tabelaImpacto, {
    constraint: true,
    foreignKey: 'id_impacto',
    allowNull: false
})

//Relacionamento Impacto 1-N
tabelaImpacto.hasMany(tabelaChamado, {
    foreignKey: 'id_impacto'
})

//Relacionamento Grupo 1-1
tabelaChamado.belongsTo(tabelaGrupo, {
    constraint: true,
    foreignKey: 'id_grupo',
    allowNull: false
})

//Relacionamento Grupo 1-N
tabelaGrupo.hasMany(tabelaChamado, {
    foreignKey: 'id_grupo'
})


//Método para verificar se tabela já existe
tabelaChamado.sync();

//Exportando entidade
module.exports = tabelaChamado;