let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

// let titulo = document.querySelector ("h1");
// titulo.innerHTML = "Jogo do número secreto";

// let paragrafo = document.querySelector ("P");
// paragrafo.innerHTML = "Escolha um número entre 1 e 10.";

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela("h1", "Jogo do Número Secreto");
    exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
}

exibirMensagemInicial();

// adiciona uma função para um elemento que precisa executar alguma coisa.
function verificarChute() {
    let chute = document.querySelector("input").value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela("h1", "Acertou");
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}.`;
        exibirTextoNaTela("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela("P", "O número secreto é menor");
        } else {
            exibirTextoNaTela("P", "O número secreto é maior");
        }
        tentativas++;
        limparCampo();
    }

}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);

}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    limparCampo();
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}