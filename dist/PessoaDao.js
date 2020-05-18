"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa_1 = __importDefault(require("./Pessoa"));
var Carro_1 = __importDefault(require("./Carro"));
var PessoaDao = /** @class */ (function () {
    function PessoaDao() {
        this.nomeTabela = 'pessoa';
    }
    PessoaDao.prototype.Inserir = function (object) {
        console.log("logica insert");
        return true;
    };
    PessoaDao.prototype.Atualizar = function (object) {
        console.log("logica atualizar");
        return true;
    };
    PessoaDao.prototype.Excluir = function (id) {
        console.log("logica excluir");
        return new Pessoa_1.default('', new Carro_1.default('', 0), new Carro_1.default('', 0));
    };
    PessoaDao.prototype.Selecionar = function (id) {
        console.log("logica selecionar");
        return new Pessoa_1.default('', new Carro_1.default('', 0), new Carro_1.default('', 0));
    };
    PessoaDao.prototype.SelecionarTodos = function () {
        console.log("logica selecionar todos");
        return [new Pessoa_1.default('', new Carro_1.default('', 0), new Carro_1.default('', 0))];
    };
    return PessoaDao;
}());
exports.PessoaDao = PessoaDao;
