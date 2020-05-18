import Carro from './Carro';
import Moto from './Moto';
import Concessinaria from './Concessionaria';

let carro = new Carro("volkswagem", 4);
let moto = new Moto("yamaha");

moto.acelerar();
moto.acelerar();
carro.acelerar();
carro.acelerar();
console.log(carro);
console.log(moto);

let conc = new Concessinaria("praia formosa", [new Carro("honda", 3)])
console.log(conc.fornecerHorarioDeFuncionamento());