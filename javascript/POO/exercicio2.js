//OBJETO: ALUNO
//ATRIBUTOS: NOME, IDADE, CURSO, MATRICULA
//METODOS: APRENDER, ESTUDAR, APRESENTAR

class Aluno {
    constructor(nome, idade, curso, matricula) {
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
        this.matricula = matricula;
    }

    aprender() {
        console.log(`${this.nome} está aprendendo.`);
    }
    estudar() {
        console.log(`${this.nome} está estudando.`);
    }
    apresentar() {
        console.log(`${this.nome} está se apresentando.`);
    }
}

const aluno1 = new Aluno("João", 20, "Engenharia", "12345");
console.log("Aluno 1:", aluno1);

const aluno2 = new Aluno("Pedro", 19, "TI", "11111");
console.log("Aluno 2:", aluno2);

const aluno3 = new Aluno("Júlia", 18, "DS", "22222");
console.log("Aluno 3:", aluno3);


console.log("----------------------");
console.log("Atributos do Aluno 1:");
console.log("-", aluno1.nome);
console.log("-", aluno1.idade);
console.log("-", aluno1.curso);
console.log("-", aluno1.matricula);
console.log("----------------------");

console.log("----------------------");
console.log("Atributos do Aluno 2:");
console.log("-", aluno2.nome);
console.log("-", aluno2.idade);
console.log("-", aluno2.curso);
console.log("-", aluno2.matricula);
console.log("----------------------");

console.log("----------------------");
console.log("Atributos do Aluno 3:");
console.log("-", aluno3.nome);
console.log("-", aluno3.idade);
console.log("-", aluno3.curso);
console.log("-", aluno3.matricula);
console.log("----------------------");

aluno1.aprender();
aluno1.estudar();
aluno1.apresentar();

aluno2.aprender();
aluno2.estudar();
aluno2.apresentar();

aluno3.aprender();
aluno3.estudar();
aluno3.apresentar();
