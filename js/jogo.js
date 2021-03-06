function jogo() {
    // Área de variáveis
    const bntIniciar = document.getElementById('iniciar')
    const bnt = document.getElementById('rolar')
    const bntVoltar = document.getElementById('voltar')
    const ponto = document.getElementById('pnt')
    const tentativas = document.getElementById('pontoClick')
    const PontoVida = document.getElementById('vida')
    let addPonto = 0
    let pontoTentativa = 6
    let vida = 2

    // Inserção de dados na tela

    PontoVida.innerHTML = `${vida}`
    tentativas.innerHTML = `${pontoTentativa}`

    //  Arrow Function Gerando Números Aleatórios

    const valorDados = () => {
        let dado1 = Math.floor(Math.random() * 6 + 1)
        let dado2 = Math.floor(Math.random() * 6 + 1)
        return [dado1 , dado2]
    }

    //  Eventos de Click!
    bntIniciar.addEventListener('click', function () {
        document.getElementById('estilo').href = "./css/style.css"
    })

    bnt.addEventListener('click', function () {
        let dados = valorDados()
        document.getElementById("face1").src = `./img/face${dados[0]}.png`
        document.getElementById("face2").src = `./img/face${dados[1]}.png`

        pontoTentativa--

        tentativas.innerHTML = `${pontoTentativa}`
    

        if (dados[0] === dados[1]) {
            addPonto++
            pontoTentativa = 6
            ponto.innerHTML = `${addPonto}`
            tentativas.innerHTML = `${pontoTentativa}`
        }
        if (pontoTentativa === 0) {
            pontoTentativa = 6
            addPonto--
            if (addPonto < 0) {
                addPonto = 0
            }
            ponto.innerHTML = `${addPonto}`
            tentativas.innerHTML = `${pontoTentativa}`
        }
        if (addPonto === 10) {
            document.getElementById('estilo').href = "./css/vitoria.css"
        }
        if (pontoTentativa === 6 && addPonto === 0) {
            vida--
            PontoVida.innerHTML = `${vida}`
        }
        if (vida === 0) {
            document.getElementById('estilo').href = "./css/telaDerrota.css"
        }
    })

    bntVoltar.addEventListener('click', function () {
        document.getElementById('estilo').href = "./css/style.css"
        vida = 2
        addPonto = 0
        PontoVida.innerHTML = `${vida}`
        ponto.innerHTML = `${addPonto}`
    })
}   jogo()

// Testando para mandar atualização para o GitHub