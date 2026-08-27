const form = document.getElementById('productForm');
const listaProdutos = document.getElementById('listaProdutos');


let produtos = JSON.parse(localStorage.getItem('produtos')) || [];


renderizarProdutos();


form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const preco = parseFloat(document.getElementById('preco').value);
  const desconto = parseFloat(document.getElementById('desconto').value) || 0;

  const precoFinal = preco - (preco * (desconto / 100));

  const novoProduto = {
    id: Date.now(),
    nome,
    preco,
    desconto,
    precoFinal
  };


  produtos.push(novoProduto);


  salvarNoLocalStorage();

  renderizarProdutos();

  form.reset();
});


function renderizarProdutos() {
  listaProdutos.innerHTML = '';

  if (produtos.length === 0) {
    listaProdutos.innerHTML = '<p>Nenhum produto cadastrado.</p>';
    return;
  }

  produtos.forEach((prod) => {
    const card = document.createElement('div');
    card.className = 'card-produto';
    card.innerHTML = `
      <div>
        <h3>${prod.nome}</h3>
        <p>Preço original: R$ ${prod.preco.toFixed(2)}</p>
        <p>Desconto: ${prod.desconto}%</p>
        <p><strong>Preço Final: R$ ${prod.precoFinal.toFixed(2)}</strong></p>
      </div>
      <button class="btn-excluir" onclick="excluirProduto(${prod.id})">Excluir</button>
    `;
    listaProdutos.appendChild(card);
  });
}


function excluirProduto(id) {
  produtos = produtos.filter(prod => prod.id !== id);
  salvarNoLocalStorage();
  renderizarProdutos();
}


function salvarNoLocalStorage() {
  localStorage.setItem('produtos', JSON.stringify(produtos));
}