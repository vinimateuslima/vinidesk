document.getElementById('btnCriarChamado')
    .addEventListener('click', function () {
        
        let nome = document.getElementById('iptNome');
        let telefone = document.getElementById('iptTelefone');
        let departamento = document.getElementById('iptDepartamento');
        let resumo = document.getElementById('iptResumo');
        let categoria = document.getElementById('selectCategoria');
        let descricao = document.getElementById('iptDescricao');
        let grupo;
        
        // Verificando qual categoria selecionada para enviar para o grupo específico
        switch (categoria.value) {
            case "1":
            grupo = 1;
            break;
        
            case "2":
            grupo = 2;
            break;

            default:
                grupo = 1;
                break;
        }

        //Se tiver algum input vazio, exiba a mensagem de erro
        if (validarCampos("inputsChamado") == true || validarCamposComCondicoes("inputsChamado", "iptCondicoes") == true) {

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Preencha todos os campos!'
            });

        } else {
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                nome: nome.value,
                telefone: telefone.value,
                departamento: departamento.value,
                resumo: resumo.value,
                id_categoria: categoria.value,
                id_impacto: 3,
                id_estado: 1,
                id_grupo: grupo,
                descricao: descricao.value
            })
        };

        fetch('http://localhost:3333/cadastrar-chamado', options)
            .then(response => response.json())
            .then(async response => {
                if (response.success == false) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Erro ao cadastrar chamado!'
                    });
                } else {
                    await Swal.fire({
                        title: `Chamado ${response.dados.id_chamado} aberto com sucesso!`,
                        icon: 'success',
                        confirmButtonText: 'Ir para o chamado',
                        confirmButtonColor: '#0075ff',
                        showCancelButton: true,
                        cancelButtonText: `Fechar`
                    }).then((result) => {
                        /* Read more about isConfirmed, isDenied below */
                        if (result.isConfirmed) {
                          window.open(`http://localhost:3333/pages/chamadoUsuario.html?chamado=${response.dados.id_chamado}`)
                        }
                      });
                    location.reload();
                }
            }).catch(err => console.error(err));

        }
    });