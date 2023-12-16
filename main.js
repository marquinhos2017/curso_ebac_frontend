// Classe abstrata
class Veiculo {
    constructor(marca, modelo) {
      this.marca = marca;
      this.modelo = modelo;
    }
  
    acelerar() {
      console.log(`${this.marca} ${this.modelo} está acelerando.`);
    }
  
    parar() {
      console.log(`${this.marca} ${this.modelo} parou.`);
    }
  }
  
  // Classe herdeira Carro
  class Carro extends Veiculo {
    constructor(marca, modelo, numPortas) {
      super(marca, modelo);
      this.numPortas = numPortas;
    }
  
    abrirPortas() {
      console.log(`${this.marca} ${this.modelo} abriu as ${this.numPortas} portas.`);
    }
  }
  
  // Classe herdeira Moto
  class Moto extends Veiculo {
    constructor(marca, modelo, tipo) {
      super(marca, modelo);
      this.tipo = tipo;
    }
  
    empinar() {
      console.log(`${this.marca} ${this.modelo} está empinando!`);
    }
  }
  
  // Criando instâncias de objetos
  const carro1 = new Carro("Toyota", "Corolla", 4);
  const moto1 = new Moto("Honda", "CBR", "Esportiva");
  const carro2 = new Carro("Ford", "Fiesta", 2);
  
  // Exemplos de uso
  carro1.acelerar();
  carro1.abrirPortas();
  
  moto1.acelerar();
  moto1.empinar();
  
  carro2.acelerar();
  carro2.parar();
  