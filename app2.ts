import Concessinaria from './Concessionaria';
import Carro from './Carro';
import Pessoa from './Pessoa';

/* --- criar carro */
let concessinaria = new Concessinaria("cidade nova", [
                                                        new Carro("fox", 4), 
                                                        new Carro("veloster", 3), 
                                                        new Carro("cerato", 4)
                                                    ])
//console.log(concessinaria);

/*-- comprar o carro */

let cliente = new Pessoa("renato", new Carro("volkswagem", 4), new Carro("Fiat", 2));
//console.log(cliente);

concessinaria.mostrarListaDeCarros().map((carro: Carro) => {
    if(carro['modelo'] == cliente.dizerCarroPreferido().modeloVeiculo()){
        cliente.comprarCarro(carro);
        console.log(cliente);
    }
});

console.log(cliente.dizerCarroQueTem());