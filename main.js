import { adicionaNaLista, getLista } from "./src/lista.js";

const pEntrada = document.querySelector("#entrada");
const btnAdicionar = document.querySelector("#adicionar");
const btnLimpar = document.querySelector("#Limpar");
const olItens = document.querySelector("#itens");

atualizaListaOrdenada();
btnAdicionar.addEventListener('click', adicionaItemNaEntrada);

function adicionaItemNaEntrada(){   
    const valor = pEntrada.textContent;
    adicionaElementoNaLista(valor);
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


function adicionaElementoNaLista(texto){
    const li = document.createElement("li");
    li.textContent = texto;
    olItens.appendChild(li);
}
