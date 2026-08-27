class Produto {

    constructor(nome, preco, categoria, desconto) {
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
        this.desconto = desconto;
    }

    aplicarDesconto() {
        this.preco = this.preco - (this.preco * (this.desconto / 100));
    }

}

class Estoque {

    constructor() {
        this.produtos = [];
        this.carregar();
    }

    adicionarProduto(produto) {
        produto.aplicarDesconto();
        this.produtos.push(produto);
        this.salvar();
    }

    salvar() {
        localStorage.setItem("produtos", JSON.stringify(this.produtos));
    }

    carregar() {
        const dados = localStorage.getItem("produtos");

        if (dados) {
            const produtoSalvos = JSON.parse(dados);
            this.produto = produtoSalvos;
        }
    }

    exibirNaTela() {

        const resultado = document.querySelector('#resultado');

        resultado.innerHTML = "";

        this.produtos.forEach((produto, posicao) => {
            resultado.innerHTML += `
                <div>
                    <p>Nome: ${produto.nome}</p>
                    <p>Preço: R$ ${produto.preco}</p>
                    <p>Categoria: ${produto.categoria}</p>
                    <p>Desconto: ${produto.desconto}</p>
                    <button onclick="estoque.removerProduto(${posicao})">Excluir</button>
                </div>
            `;
        });
    }

    removerProduto(posicao) {
        this.produtos.splice(posicao, 1);
        this.salvar();
        this.exibirNaTela();
    }
}

const estoque = new Estoque();

const nome = document.querySelector('#nome');
const preco = document.querySelector('#preco');
const categoria = document.querySelector('#categoria');
const desconto = document.querySelector('#desconto');
const botaoCadastrar = document.querySelector('#botaoCadastrar');

botaoCadastrar.addEventListener('click', function () {

    const produto = new Produto(
        nome.value,
        parseFloat(preco.value),
        categoria.value,
        parseFloat(desconto.value),

    );

    estoque.adicionarProduto(produto);
    estoque.exibirNaTela();

});

estoque.exibirNaTela();