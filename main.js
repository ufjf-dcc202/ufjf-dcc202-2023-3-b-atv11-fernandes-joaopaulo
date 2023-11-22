import { adicionaNaLista, getLista, limpaLista } from "./lista.js";

const pEntrada = document.querySelector("#entrada");
const btnAdicionar = document.querySelector("#adicionar");
const btnLimpar = document.querySelector("#limpar");
const olItens = document.querySelector("#itens");

atualizaListaOrdenada();
btnAdicionar.addEventListener('click', adicionaItemNaEntrada);
btnLimpar.addEventListener('click', limparListaOrdenada);

function adicionaItemNaEntrada(){   
    const valor = pEntrada.textContent;
    adicionaNaLista(valor);
    pEntrada.textContent = "";
    atualizaListaOrdenada();
}

function atualizaListaOrdenada(){
    const lista = getLista();
    olItens.innerHTML = "";
    for(let i=0; i < lista.length; i++){
        adicionaElementoNaLista(lista[i]);
    }
}

function limparListaOrdenada(){
    limpaLista();
    atualizaListaOrdenada();
}

function adicionaElementoNaLista(texto){
    const li = document.createElement("li");
    li.textContent = texto;
    olItens.appendChild(li);
}
