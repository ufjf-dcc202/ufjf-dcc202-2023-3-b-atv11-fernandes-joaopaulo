const pEntrada = document.querySelector("#entrada");
const btnAdicionar = document.querySelector("#adicionar");
const btnLimpar = document.querySelector("#Limpar");
const olItens = document.querySelector("#itens");

const li = document.createElement("li");
li.textContent = "Primeiro";
console.log(li);
olItens.appendChild(li);
