"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./Carro"));
var CarroDao = /** @class */ (function () {
    function CarroDao() {
        this.nomeTabela = 'carro';
    }
    CarroDao.prototype.Inserir = function (object) {
        console.log("logica insert");
        return true;
    };
    CarroDao.prototype.Atualizar = function (object) {
        console.log("logica atualizar");
        return true;
    };
    CarroDao.prototype.Excluir = function (id) {
        console.log("logica atualizar");
        return new Carro_1.default('', 0);
    };
    CarroDao.prototype.Selecionar = function (id) {
        console.log("logica atualizar");
        return new Carro_1.default('', 0);
    };
    CarroDao.prototype.SelecionarTodos = function () {
        console.log("logica atualizar");
        return [new Carro_1.default('', 0)];
    };
    return CarroDao;
}());
exports.CarroDao = CarroDao;
