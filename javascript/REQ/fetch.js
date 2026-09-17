const botao = document.querySelector("#buscarUsuarios");
const resultado = document.querySelector("#resultado");
const idUsuario = document.querySelector("#idUsuario");

// 1 fech com then e catch
// botao.addEventListener("click", () => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//         .then(resposta => resposta.json())
//         .then(dados => {

//             console.log(dados);
            
//             resultado.innerHTML = "";

//             dados.forEach(usuario => {
//                 resultado.innerHTML += `
//                 <p>
//                     <strong>${usuario.name}</strong><br>
//                     ${usuario.email}
//                 </p>
//                 <hr>
//             `;
//             });
//         })

//         .catch(erro => {
//             console.log("erro: ", erro);
//         });
// });


// 2 fetch com async e await
// botao.addEventListener("click", async () => {
//     try {
//         const resposta = await fetch(
//             "https://jsonplaceholder.typicode.com/users"
//         );
    
//         const dados = await resposta.json();
//         resultado.innerHTML = "";

//         dados.forEach(usuario => {
//             resultado.innerHTML += `
//                 <p>
//                     <strong>${usuario.name}</strong><br>
//                     ${usuario.email}
//                 </p>
//                 <hr>
//             `;
//         });
    
//     } catch (erro) {
//         resultado.innerHTML = "Erro ao buscar usuários.";
//         console.log("erro: ", erro);
//     }
// });


// 3 fetch com async e await e arrow function
botao.addEventListener("click", async () => {
    const id = idUsuario.value;
    if (id === "") {
        resultado.innerHTML = "Digite um ID";
        return;
    }

    try {
        const resposta = await fetch(
            `https://jsonplaceholder.typicode.com/users/${id}` 
        );
    
        const dados = await resposta.json();
        resultado.innerHTML += `
            <p>
                <strong>${dados.name}</strong><br>
                Email: ${dados.email}<br>
                Cidade: ${dados.address.city}<br>
                Telefone: ${dados.phone}<br>
            </p>
            <hr>
        `;
    
    } catch (erro) {
        resultado.innerHTML = "Erro ao buscar usuários.";
        console.log("erro: ", erro);
    }
});