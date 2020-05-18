"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Moto_1 = __importDefault(require("./Moto"));
var MotoDao = /** @class */ (function () {
    function MotoDao() {
        this.nomeTabela = 'moto';
    }
    MotoDao.prototype.Inserir = function (object) {
        console.log("logica insert");
        return true;
    };
    MotoDao.prototype.Atualizar = function (object) {
        console.log("logica atualizar");
        return true;
    };
    MotoDao.prototype.Excluir = function (id) {
        console.log("logica atualizar");
        return new Moto_1.default('');
    };
    MotoDao.prototype.Selecionar = function (id) {
        console.log("logica atualizar");
        return new Moto_1.default('');
    };
    MotoDao.prototype.SelecionarTodos = function () {
        console.log("logica atualizar");
        return [new Moto_1.default('')];
    };
    return MotoDao;
}());
exports.MotoDao = MotoDao;
