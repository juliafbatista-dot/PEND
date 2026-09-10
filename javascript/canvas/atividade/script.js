const canvas = document.querySelector("#canvas");
const contexto = canvas.getContext("2d");
contexto.lineWidth = 4;
contexto.lineCap = "round";
contexto.lineCap.Join = "round";
//perna 1
contexto.beginPath();//"vou começar um novo caminho"
contexto.moveTo(250,110);//define onde a linha vai começar
contexto.lineTo(250,200);//define onde a linha vai terminar
contexto.lineTo(200,270);//define onde a linha vai terminar
contexto.stroke();//desenha o caminho da linha
//perna 2 
contexto.beginPath();//"vou começar um novo caminho"
contexto.moveTo(300,270);//define onde a linha vai começar
contexto.lineTo(250,200);//define onde a linha vai terminar
contexto.lineTo(200,270);//define onde a linha vai terminar
contexto.stroke();//desenha o caminho da linha
// braco 1
contexto.beginPath();//"vou começar um novo caminho"
contexto.moveTo(250,110);//define onde a linha vai começar
contexto.lineTo(200,150);//define onde a linha vai terminar
contexto.lineTo(255,160);//define onde a linha vai terminar
contexto.stroke();//desenha o caminho da linha

// braco 2
contexto.beginPath();//"vou começar um novo caminho"
contexto.moveTo(250,110);//define onde a linha vai começar
contexto.lineTo(300,150);//define onde a linha vai terminar
contexto.lineTo(320,100);//define onde a linha vai terminar
contexto.stroke();//desenha o caminho da linha
contexto.beginPath();


contexto.arc(250, 60, 50, 0, Math.PI * 2);//desenha um círculo
contexto.stroke();//desenha o caminho do círculo