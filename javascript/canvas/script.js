const canvas = document.querySelector("#canvas");
const contexto = canvas.getContext("2d");

contexto.beginPath();//"vou começar um novo caminho"
contexto.moveTo(10,0);//define onde a linha vai começar
contexto.lineTo(50,200);//define onde a linha vai terminar
contexto.lineTo(50,10);//define onde a linha vai terminar
contexto.stroke();//desenha o caminho da linha


contexto.fillRect(50, 50, 150, 100);//desenha um retângulo preenchido
contexto.strokeRect(250, 50, 150, 100);//desenha o contorno do retângulo

contexto.beginPath();
contexto.arc(250, 250, 50, 0, Math.PI * 2);//desenha um círculo
contexto.stroke