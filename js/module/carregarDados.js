/*
*********************************************************************
*Objetivo: Criar a comunicacao entre a pagina HTML e os dados fornecidos de livros (arquivos de dados ou API)
*Data: 21/04/2026
*Autor: Diego Araujo
*Versao: 1.0
*********************************************************************
*/

//Escopo Global
import { livros } from "./livros.js";

// console.log(livros[0].books[2].image)

const setCreateCard = function(bibliotecaLivros) {
    let divCardProdutos = document.getElementById('cardProdutos')

    //Cria elementos no HTML
    let divCaixa_produto = document.createElement('div')
    let h2Caixa_titulo = document.createElement('h2')
    let figureCaixa_imagem = document.createElement('figure')
    let imgProduto = document.createElement('img')
    let divCaixaTexto = document.createElement('div')

    //Adiciona um atributo ao elemento do HTML
    divCaixa_produto.setAttribute('class', 'caixa_produto')
    h2Caixa_titulo.setAttribute('class', 'caixa_titulo')
    figureCaixa_imagem.setAttribute('class', 'caixa_imagem')
    imgProduto.setAttribute('src', 'imagens/icone01.png')
    imgProduto.setAttribute('alt', 'Imagem de Livro')
    imgProduto.setAttribute('title', 'Livro de TI')
    divCaixaTexto.setAttribute('class', 'caixa_texto')

    h2Caixa_titulo.innerText = bibliotecaLivros[0].books[0].title
    

    //Permite colocar um elemento do HTML pertecendo a outro elemento (PAI E FILHO)
    divCardProdutos.appendChild(divCaixa_produto)
    divCaixa_produto.appendChild(h2Caixa_titulo)
    divCaixa_produto.appendChild(figureCaixa_imagem)
    figureCaixa_imagem.appendChild(imgProduto)
    divCaixaTexto.appendChild(divCaixaTexto)
}

window.addEventListener('load', function(){
    setCreateCard(livros)
})