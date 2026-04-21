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

    bibliotecaLivros.books.forEach(function(itemLivro) {
        
        //Cria elementos no HTML
        let divCaixa_produto        = document.createElement('div')
        let h2Caixa_titulo      = document.createElement('h2')
        let figureCaixa_imagem  = document.createElement('figure')
        let imgProduto          = document.createElement('img')
        let divCaixa_texto      = document.createElement('div')
        let pTextoProduto       = document.createElement('p')
        let divComprar          = document.createElement('div')

        //Adiciona um atributo ao elemento do HTML
        divCaixa_produto.setAttribute('class', 'caixa_produto')
        h2Caixa_titulo.setAttribute('class', 'caixa_titulo')
        figureCaixa_imagem.setAttribute('class', 'caixa_imagem')
        imgProduto.setAttribute('src', itemLivro.image)
        imgProduto.setAttribute('alt', 'Imagem de Livro')
        imgProduto.setAttribute('title', 'Livro de TI')
        divCaixa_texto.setAttribute('class', 'caixa_texto')
        divComprar.setAttribute('class', 'comprar')
        
        //Textos dos elementos no HTML
        h2Caixa_titulo.innerText = itemLivro.title
        pTextoProduto.innerText = itemLivro.subtitle
        divComprar.innerText = 'Comprar'
        

        //Permite colocar um elemento do HTML pertecendo a outro elemento (PAI E FILHO)
        divCardProdutos.appendChild(divCaixa_produto)
        divCaixa_produto.appendChild(h2Caixa_titulo)
        divCaixa_produto.appendChild(figureCaixa_imagem)
        figureCaixa_imagem.appendChild(imgProduto)
        divCaixa_produto.appendChild(divCaixa_texto)
        divCaixa_texto.appendChild(pTextoProduto)
        divCaixa_produto.appendChild(divComprar)

    })
}

const getDadosLivrosAPI = async function() {
    let url = 'https://projeto-livraria-latx.onrender.com/v2/livraria/livro/'

    let response = await fetch(url)

    let dados = await response.json()

    setCreateCard(dados)
}

window.addEventListener('load', function(){
    // setCreateCard(livros)
    getDadosLivrosAPI()
})