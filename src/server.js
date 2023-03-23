//Configurações
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
//const cookieParser = require('cooki-parser');
const bodyParser = require('body-parser');

//Importação das Tabelas
const models = require('./models/models');

//Importação das rotas
const rotas = require('./routes/routes');

//Configurações
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "/")));

router.get('/', function (req, res) {

    res.sendFile(path.join(__dirname + '/index.html'));

});

app.use('/', router);
app.use(rotas);
app.use(express.json());
app.listen(process.env.PORT || 3333);