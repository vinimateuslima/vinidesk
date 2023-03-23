const express = require("express");
const routes = express.Router();

/*Importação das funções executadas em cada rota*/
const listarChamado = require("../controllers/rotaListarChamado");

const buscarChamado = require("../controllers/rotaBuscarChamado");

const cadastrarChamado = require("../controllers/rotaCadastrarChamado");

const atualizarChamado = require("../controllers/rotaAtualizarChamado");

/*Rota que chamar a função  listarChamados*/
routes.get("/listar-chamado", listarChamado);

routes.get("/buscar-chamado/:id", buscarChamado);

routes.post("/cadastrar-chamado", cadastrarChamado);

routes.put("/atualizar-chamado", atualizarChamado);

module.exports = routes;
