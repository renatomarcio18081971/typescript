"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DaoGenerico = /** @class */ (function () {
    function DaoGenerico(nomeTabela) {
        this.nomeTabela = nomeTabela;
    }
    DaoGenerico.prototype.NomeTabela = function () {
        console.log(this.nomeTabela);
    };
    DaoGenerico.prototype.Inserir = function (object) {
        console.log("logica insert");
        return true;
    };
    DaoGenerico.prototype.Atualizar = function (object) {
        console.log("logica atualizar");
        return true;
    };
    DaoGenerico.prototype.Excluir = function (id) {
        console.log("logica excluir");
        return Object();
    };
    DaoGenerico.prototype.Selecionar = function (id) {
        console.log("logica selecionar");
        return Object();
    };
    DaoGenerico.prototype.SelecionarTodos = function () {
        console.log("logica selecionar todos");
        return [Object()];
    };
    return DaoGenerico;
}());
exports.DaoGenerico = DaoGenerico;
