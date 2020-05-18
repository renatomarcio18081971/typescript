"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var Pessoa_1 = __importDefault(require("./Pessoa"));
var Carro_1 = __importDefault(require("./Carro"));
var Moto_1 = __importDefault(require("./Moto"));
var DaoGenerico_1 = require("./DaoGenerico");
var daoConcessionaria = new DaoGenerico_1.DaoGenerico('concessionaria');
var concessionaria = new Concessionaria_1.default('', []);
daoConcessionaria.NomeTabela();
daoConcessionaria.Inserir(concessionaria);
daoConcessionaria.Atualizar(concessionaria);
daoConcessionaria.Excluir(10);
daoConcessionaria.Selecionar(10);
var resultado = daoConcessionaria.SelecionarTodos();
console.log(resultado);
var daoPessoa = new DaoGenerico_1.DaoGenerico('pessoa');
var pessoa = new Pessoa_1.default('', new Carro_1.default('', 0), new Carro_1.default('', 0));
daoPessoa.NomeTabela();
daoPessoa.Inserir(pessoa);
daoPessoa.Atualizar(pessoa);
daoPessoa.Excluir(10);
daoPessoa.Selecionar(10);
var resultadoPessoa = daoPessoa.SelecionarTodos();
console.log(resultadoPessoa);
var daoMoto = new DaoGenerico_1.DaoGenerico('moto');
var moto = new Moto_1.default('');
daoMoto.NomeTabela();
daoMoto.Inserir(moto);
daoMoto.Atualizar(moto);
daoMoto.Excluir(10);
daoMoto.Selecionar(10);
var resultadoMoto = daoMoto.SelecionarTodos();
console.log(resultadoMoto);
var daoCarro = new DaoGenerico_1.DaoGenerico('carro');
var carro = new Carro_1.default('', 0);
daoCarro.NomeTabela();
daoCarro.Inserir(carro);
daoCarro.Atualizar(carro);
daoCarro.Excluir(10);
daoCarro.Selecionar(10);
var resultadoCarro = daoCarro.SelecionarTodos();
console.log(resultadoCarro);
