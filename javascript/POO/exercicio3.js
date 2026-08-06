// OBJETO: PRODUTO
// ATRIBUTOS: NOME, PRECO, ESTOQUE
// METODOS: VENDER, REPOR, ALTERAR PRECO

class Produto {
    constructor(nome, preco, estoque) {
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    }

    vender() {
    console.log(`${this.nome} foi vendido.`);
    }

    repor() {
    console.log(`${this.nome} tem que repor.`);
    }

    alterarPreco() {
    console.log(`${this.nome} teve o preço alterado.`);
}
}

const produto1 = new Produto("Cropped", 50, 150);
console.log("Produto 1:", produto1);

const produto2 = new Produto("Vestido", 100, 50);
console.log("Produto 2:", produto2);

const produto3 = new Produto("Sandalia", 200, 30);
console.log("Produto 3:", produto3);


console.log("----------------------");
console.log("Atributos do Produto 1:");
console.log("-", produto1.nome);
console.log("-", produto1.preco);
console.log("-", produto1.estoque);
console.log("----------------------");

console.log("----------------------");
console.log("Atributos do Produto 2:");
console.log("-", produto2.nome);
console.log("-", produto2.preco);
console.log("-", produto2.estoque);
console.log("----------------------");

console.log("----------------------");
console.log("Atributos do Produto 3:");
console.log("-", produto3.nome);
console.log("-", produto3.preco);
console.log("-", produto3.estoque);
console.log("----------------------");



produto1.vender();
produto1.repor();
produto1.alterarPreco();

produto2.vender();
produto2.repor();
produto2.alterarPreco();

produto3.vender();
produto3.repor();
produto3.alterarPreco();