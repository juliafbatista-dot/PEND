// Onde será exibida a mensagem de erro/sucesso
let botao = document.querySelector("#enviar");
let mensagem = document.querySelector("#mensagem");


// Adicionar um evento click no botão
botao.addEventListener("click", function () {

// Definir variavel
  let nome = document.querySelector("#nome").value;
  let email = document.querySelector("#email").value;

    // Verifica se o campo Nome foi preenchido 
    if (nome === "") {
        mensagem.textContent = " falta o nome";
        mensagem.style.color = "red";
        return;
    }

    // Verifica se contém @ ou .
    if (!email.includes("@") || !email.includes(".")) {
        mensagem.textContent = " email deve conter (@) e (.)";
        mensagem.style.color = "red";
        return;
    }

    // Se der certo parar aparecer cadastrado
    mensagem.textContent = "enviado!";
    mensagem.style.color = "green";
});