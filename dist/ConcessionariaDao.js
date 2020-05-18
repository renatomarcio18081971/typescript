"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var ConcessionariaDao = /** @class */ (function () {
    function ConcessionariaDao() {
        this.nomeTabela = 'concessionaria';
    }
    ConcessionariaDao.prototype.Inserir = function (object) {
        console.log("logica insert");
        return true;
    };
    ConcessionariaDao.prototype.Atualizar = function (object) {
        console.log("logica atualizar");
        return true;
    };
    ConcessionariaDao.prototype.Excluir = function (id) {
        console.log("logica atualizar");
        return new Concessionaria_1.default('', []);
    };
    ConcessionariaDao.prototype.Selecionar = function (id) {
        console.log("logica atualizar");
        return new Concessionaria_1.default('', []);
    };
    ConcessionariaDao.prototype.SelecionarTodos = function () {
        console.log("logica atualizar");
        return [new Concessionaria_1.default('', [])];
    };
    return ConcessionariaDao;
}());
exports.ConcessionariaDao = ConcessionariaDao;
