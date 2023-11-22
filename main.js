const pEntrada = document.querySelector("#entrada");
const btnAdicionar = document.querySelector("#adicionar");
const btnLimpar = document.querySelector("#Limpar");
const olItens = document.querySelector("#itens");

adicionaELementoNaLista("Primeiro");
adicionaELementoNaLista("Segundo");
adicionaELementoNaLista("Terceiro");


function adicionaELementoNaLista(texto){
    const li = document.createElement("li");
    li.textContent = texto;
    olItens.appendChild(li);
}
