
navigator.geolocation.getCurrentPosition(
    function(posicao) {
        document.getElementById("latitude").textContent = posicao.coords.latitude;
        document.getElementById("longitude").textContent = posicao.coords.longitude;
        document.getElementById("precisao").textContent = posicao.coords.accuracy;

        document.getElementById("sucesso").style.display = "block";
        document.getElementById("erro").style.display = "none";
    },
    function(erro) {
        console.log("Erro ao obter localização", erro);

        document.getElementById("sucesso").style.display = "none";
        document.getElementById("erro").style.display = "block";
    }
);


const video = document.querySelector("#camera");
const canvas = document.querySelector("#canvas");
const botao = document.querySelector("#botao");
const foto = document.querySelector("#foto");


navigator.mediaDevices.getUserMedia({ video: true })
    .then(function(stream) {
        video.srcObject = stream;
    })
    .catch(function(erro) {
        console.log("Erro ao acessar a câmera.", erro);
    });


botao.addEventListener("click", function() {
    canvas.width = video.videoWidth || video.clientWidth;
    canvas.height = video.videoHeight || video.clientHeight;

    const contexto = canvas.getContext("2d");
    contexto.drawImage(video, 0, 0, canvas.width, canvas.height);
    
    foto.src = canvas.toDataURL("image/png");
    foto.style.display = "block";
});