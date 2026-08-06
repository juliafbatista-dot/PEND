// classe
class Carro {
    //metodo que define os valores iniciais do objeto
    constructor(marca, modelo, ano, cor) {

        // SIGNIFICA "ESTE OBJETO"
        //
        //
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
    }
    // 6- metodo
    ligar() {
    console.log("Carro ligado.");
    }   
    //
    acelerar(){
    console.log("Acelerando.");
    }
    frear(){
    console.log(`${this.modelo} freiou.`);
    }

}

const carro1 = new Carro("Volkswagen", "Gol", 2022, "Branco");
console.log("Carro 1:", carro1);

const carro2 = new Carro("Toyota", "Corolla", 2025, "Preto");
console.log("Carro 2:", carro2);

const carro3 = new Carro("Porsche", "Panamera", 2025, "roxo");
console.log("Carro 3:", carro3);


console.log("----------------------");
console.log("Atributos do Carro 1:");
console.log("-", carro1.marca);
console.log("-", carro1.modelo);
console.log("-", carro1.ano);
console.log("-", carro1.cor);
console.log("----------------------");

console.log("----------------------");
console.log("Atributos do Carro 2:");
console.log("-", carro2.marca);
console.log("-", carro2.modelo);
console.log("-", carro2.ano);
console.log("-", carro2.cor);
console.log("----------------------");

console.log("----------------------");
console.log("Atributos do Carro 3:");
console.log("-", carro3.marca);
console.log("-", carro3.modelo);
console.log("-", carro3.ano);
console.log("-", carro3.cor);
console.log("----------------------");

    // 7- metodo
    carro1.ligar();
    //
    carro1.acelerar();
    //
    carro1.frear();

