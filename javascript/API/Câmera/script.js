navigator.mediaDevices.getUserMedia({
     video: true, 
     audio: true
})
.then(function(stream) {
    const video = document.querySelector("#camera");
    video.srcObject = stream;
})
.catch(function(erro) {
    console.log("Erro aoacessar a câmera.",erro);
});    