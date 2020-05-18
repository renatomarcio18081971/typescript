"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Concessinaria = /** @class */ (function () {
    function Concessinaria(endereco, listaDeCarros) {
        this.listaDeCarros = [];
        this.endereco = endereco,
            this.listaDeCarros = listaDeCarros;
    }
    Concessinaria.prototype.fornecerHorarioDeFuncionamento = function () {
        return 'de Segunda a Sexta das 8:00 às 18:00 e sábado das 8:00 às 12:00 ';
    };
    Concessinaria.prototype.fornecedorEndereco = function () {
        return this.endereco;
    };
    Concessinaria.prototype.mostrarListaDeCarros = function () {
        return this.listaDeCarros;
    };
    return Concessinaria;
}());
exports.default = Concessinaria;
