const Sequelize = require('sequelize');

const sequelize = new Sequelize('vinidesk', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: true,
        underscored: true
    }
});
//teste 2

sequelize.authenticate()
    .then(() => {
        console.log("Conexão com o banco de dados realizada com sucesso!");
    }).catch(() => {
        console.log("Erro: Conexão com o banco de dados não foi realizada com sucesso!");
    });

module.exports = sequelize;