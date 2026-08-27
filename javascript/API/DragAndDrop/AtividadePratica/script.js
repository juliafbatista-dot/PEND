const produtos = document.querySelectorAll(".produto");
const carrinho = document.querySelector("#carrinho");

produtos.forEach(produto => {
    produto.addEventListener("dragstart", function(event) {
    event.dataTransfer.setData("text", event.target.id);
    });
});

carrinho.addEventListener("dragover", function(event) {
    event.preventDefault();
    carrinho.classList.add("ativo");
});

carrinho.addEventListener("drop", function(event) {
    event.preventDefault();

    const id = event.dataTransfer.getData("text");
    const elemento = document.querySelector("#" + id);

    carrinho.appendChild(elemento);
});

