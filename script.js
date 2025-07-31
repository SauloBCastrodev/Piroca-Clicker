let botaocliques = document.querySelector('#clicker');
let botaoNivel = document.querySelector('#botaonivel')
let botaoPiroca = document.querySelector('#botaopiroca')
let pirocoins = document.querySelector('#pirocoins');
let nivel = document.querySelector('#nivel')
let pirocas = document.querySelector('#pirocas');
let precoNivel = document.querySelector('#precoNivel');
let precoPiroca = document.querySelector('#precoPiroca');
let autoPiroca;

function clicar() {
    pirocoins.innerText = parseInt(pirocoins.innerText) + parseInt(nivel.innerText);
}

function startPirocas() {
    if (autoPiroca) {
        clearInterval(autoPiroca);
    }

    if (parseInt(pirocas.innerText) > 0) {
        const delay = 10000 / (parseInt(pirocas.innerText) * 0.5);
        autoPiroca = setInterval(clicar, delay);
    }
}

function aumentarNivel() {
    if (parseInt(pirocoins.innerText) >= parseInt(precoNivel.innerText)) {
        nivel.innerText = parseInt(nivel.innerText) + 1;
        pirocoins.innerText = parseInt(pirocoins.innerText) - parseInt(precoNivel.innerText);
        precoNivel.innerText = parseInt(precoNivel.innerText) * 2;
    }
}

function comprarPiroca() {
    if (parseInt(pirocoins.innerText) >= parseInt(precoPiroca.innerText)) {
        pirocas.innerText = parseInt(pirocas.innerText) + 1;
        pirocoins.innerText = parseInt(pirocoins.innerText) - parseInt(precoPiroca.innerText);
        precoPiroca.innerText = parseInt(precoPiroca.innerText) * 2;
        startPirocas();
    }
}

botaocliques.onclick = clicar;
botaoNivel.onclick = aumentarNivel;
botaoPiroca.onclick = comprarPiroca;