"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var Carro_1 = __importDefault(require("./Carro"));
var Pessoa_1 = __importDefault(require("./Pessoa"));
/* --- criar carro */
var concessinaria = new Concessionaria_1.default("cidade nova", [
    new Carro_1.default("fox", 4),
    new Carro_1.default("veloster", 3),
    new Carro_1.default("cerato", 4)
]);
//console.log(concessinaria);
/*-- comprar o carro */
var cliente = new Pessoa_1.default("renato", new Carro_1.default("volkswagem", 4), new Carro_1.default("Fiat", 2));
//console.log(cliente);
concessinaria.mostrarListaDeCarros().map(function (carro) {
    if (carro['modelo'] == cliente.dizerCarroPreferido().modeloVeiculo()) {
        cliente.comprarCarro(carro);
        console.log(cliente);
    }
});
console.log(cliente.dizerCarroQueTem());
