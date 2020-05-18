"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./Carro"));
var Moto_1 = __importDefault(require("./Moto"));
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var carro = new Carro_1.default("volkswagem", 4);
var moto = new Moto_1.default("yamaha");
moto.acelerar();
moto.acelerar();
carro.acelerar();
carro.acelerar();
console.log(carro);
console.log(moto);
var conc = new Concessionaria_1.default("praia formosa", [new Carro_1.default("honda", 3)]);
console.log(conc.fornecerHorarioDeFuncionamento());
