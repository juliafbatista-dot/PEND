
class NewsToday {

    constructor(apiKey) {
        this.apiKey = apiKey;
        this.containerNoticias = document.getElementById("noticias");

        this.iniciarEventos();
        this.carregarNoticias();
    }

    iniciarEventos() {

        const links = document.querySelectorAll("nav a");

        links.forEach(link => {

            link.addEventListener("click", (event) => {

                event.preventDefault();

                const categoria = link.dataset.category;

                this.carregarNoticias(categoria);
            });

        });

    }

    carregarNoticias(categoria = "") {

        this.containerNoticias.innerHTML =
            "<h3>Carregando notícias...</h3>";

        let url =
            `https://gnews.io/api/v4/top-headlines?country=br&lang=pt&max=10&apikey=${this.apiKey}`;

        if (categoria) {
            url += `&topic=${categoria}`;
        }

        fetch(url)
            .then(response => response.json())
            .then(data => {

                this.containerNoticias.innerHTML = "";

                data.articles.forEach(article => {

                    this.criarCard(article);

                });

            })
            .catch(() => {

                this.containerNoticias.innerHTML = `
                    <p class="erro">
                        Erro ao carregar notícias.
                    </p>
                `;

            });

    }

    criarCard(article) {

        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${article.image || 'https://via.placeholder.com/300'}" alt="Imagem da notícia">

            <h3>${article.title}</h3>

            <p>${article.description || "Sem descrição disponível."}</p>

            <a href="${article.url}" target="_blank">
                Ler notícia completa
            </a>
        `;

        this.containerNoticias.appendChild(card);

    }

}

const sistemaNoticias = new NewsToday(
    "20954b823cd1780b266abb12742119db"
);