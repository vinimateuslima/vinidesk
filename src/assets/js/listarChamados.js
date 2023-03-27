// Recuperando o JSON das coletas através do método GET
const options = { method: "GET" };
/*
if (chamadoParametro == "") {
    alert("Não foi encontrado nenhum chamado");
} else {*/

    fetch('http://localhost:3333/listar-chamado', options)
        .then(response => response.json())
        .then(response => {

            // Dados para popular a tabela
            const dados = [];

            console.log(response.chamados);

            //Adicionando a tag <a> a partir do id do chamado e direcionado para o link do chamado individual
            function criarLink (id_chamado) {
                let linkChamado = `<a href="chamadoIndividual.html?chamado=${id_chamado}" target="_blank">INC0000${id_chamado}</a>`

                return linkChamado;
            }

            // Percorrendo o objeto response.dados e atribuindo um array dentro do array dados
            for (let i = 0; i < response.chamados.length; i++) {
                dados[i] = [criarLink(response.chamados[i].id_chamado), response.chamados[i].resumo, response.chamados[i].nome, response.chamados[i].estado.nm_estado,
                response.chamados[i].categorium.nm_categoria]

            }

            console.log(dados);

            // Função para criar uma Tag Ex: <tr>, <td>
            function criarTag(elemento) {
                return document.createElement(elemento);
            }

            // Criando a tabela
            let tabela = document.getElementById("tbl-pesquisa");
            let thead = criarTag("thead");
            let tbody = criarTag("tbody");

            let indicesTabela = ["Chamado", "Resumo", "Nome", "Estado", "Categoria"];
            let linhaHead = criarTag("tr");

            // Função para criar uma celula Ex <th> + o texto
            function criarCelula(tag, text) {
                tag = criarTag(tag);
                tag.innerHTML = text;
                return tag;
            }

            // Percorrendo o indice das tabelas e atribuindo a tag <thead>
            for (let j = 0; j < indicesTabela.length; j++) {
                
                let th = criarCelula("th", indicesTabela[j]);
                linhaHead.appendChild(th);
            }
            thead.appendChild(linhaHead);

            // Percorrendo os dados e atribuindo as colunas e adicionando em cada linha
            for (let j = 0, linhaBody = ''; j < dados.length; j++) {
                
                linhaBody = criarTag("tr");
                if (j % 2 != 0) {
                    linhaBody.setAttribute("class", "table-active");
                }

                for (let i = 0, cel = ''; i < dados[j].length; i++) {
                    cel = criarCelula("td", dados[j][i]);
                    linhaBody.appendChild(cel);
                }
                tbody.appendChild(linhaBody);
            }

            /*// Criando o botão Editar
            let btnChamado = document.createElement('a');
            btnChamado.type = 'button';
            btnChamado.innerHTML = 'Editar';
            btnChamado.className = 'btn btn-secondary i bi-pencil-square';
            btnChamado.setAttribute('data-bs-toggle', 'modal');
            btnChamado.setAttribute('data-bs-target', '#formEditaColetor');
            btnChamado.setAttribute('onclick', "editarColetor(" + "'" + dados[j][0] + "'," + "'" + dados[j][1] + "'," + "'" + dados[j][2] + "'" + "," + "'" + dados[j][3] + "'" + ")");

            //Criando mais uma celula no final da linha e adicionando o botão Editar
            let editar = linhaBody.insertCell();
            editar.appendChild(btnEditar);
            tbody.appendChild(linhaBody);*/
        

            // Atribuindo as tags da tabela na tag <table>
            tabela.appendChild(thead);
            tabela.appendChild(tbody);

        })
        .catch(err => console.error(err));
/*}*/