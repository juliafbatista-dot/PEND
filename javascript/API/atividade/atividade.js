// Obtendo localização
navigator.geolocation.getCurrentPosition(
    function(posicao) {

        document.getElementById("latitude").textContent =
            posicao.coords.latitude;

        document.getElementById("longitude").textContent =
            posicao.coords.longitude;

        document.getElementById("precisao").textContent =
            posicao.coords.accuracy;

        document.getElementById("sucesso").style.display = "block";
        document.getElementById("erro").style.display = "none";

    },

    function(erro) {

        console.log("Erro ao obter localização", erro);

        document.getElementById("sucesso").style.display = "none";
        document.getElementById("erro").style.display = "block";

    }
);


navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
})
.then(function(stream) {

    const video = document.getElementById("camera");
    video.srcObject = stream;

})
.catch(function(erro) {

    console.log("Erro ao acessar a câmera.", erro);

});