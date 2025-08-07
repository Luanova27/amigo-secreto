//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeAmigos = [];
let resultadoDoSorteio = {};

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Amigo Secreto');
    exibirTextoNaTela('h2', 'Digite o nome dos seus amigos');
    document.getElementById('btnSortear').style.display = 'flex';
    document.querySelector('.secondary-buttons').style.display = 'none';
    document.getElementById('resultado').innerHTML = '';
}

exibirMensagemInicial();

function exibirAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for (let i = 0; i < listaDeAmigos.length; i++) {
        lista.innerHTML += `<li class="friend-item">${listaDeAmigos[i]}</li>`;
    }
}

function adicionarAmigo() {
    let nome = document.querySelector('input').value;

    if (nome.trim() === '') {
        alert('Por favor digite um nome válido: ');
        return;
    }
    
    listaDeAmigos.push(nome);
    exibirAmigos();
    document.querySelector('input').value = '';
}

function sortearAmigo() {
    if (listaDeAmigos.length < 4) {
        alert("Adicione pelo menos 4 amigos!");
        return;
    }
    
    let destinatarios = [...listaDeAmigos];
    resultadoDoSorteio = {};

    for (let i = 0; i < listaDeAmigos.length; i++) {
        let pessoa = listaDeAmigos[i];
        let indiceSorteado;
        let sorteado;

        do {
            indiceSorteado = parseInt(Math.random() * destinatarios.length);
            sorteado = destinatarios[indiceSorteado];
        } while (pessoa === sorteado && destinatarios.length > 1);

        resultadoDoSorteio[pessoa] = sorteado;
        destinatarios.splice(indiceSorteado, 1);
    }

    exibirResultado();
    document.querySelector('.secondary-buttons').style.display = 'flex';
    document.getElementById('btnSortear').style.display = 'none';
}

function exibirResultado() {
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    for (let pessoa in resultadoDoSorteio) {
        resultado.innerHTML += `<li class="result-item">${pessoa} tirou ${resultadoDoSorteio[pessoa]}</li>`;
    }
}

function ocultarSorteio() {
    let lista = document.getElementById('resultado');
    if (lista.style.display === 'none') {
        lista.style.display = 'block';
    } else {
        lista.style.display = 'none';
    }
}

function reiniciar() {
    listaDeAmigos = [];
    resultadoDoSorteio = {};
    exibirAmigos();
    document.getElementById('resultado').innerHTML = '';
    
    exibirMensagemInicial();
}