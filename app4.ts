import Concessionaria from './Concessionaria';
import Pessoa from './Pessoa';
import Carro from './Carro';
import Moto from './Moto';
import { DaoGenerico } from './DaoGenerico';

let daoConcessionaria: DaoGenerico<Concessionaria> = new DaoGenerico<Concessionaria>('concessionaria');
let concessionaria = new Concessionaria('', []);
daoConcessionaria.NomeTabela();
daoConcessionaria.Inserir(concessionaria);
daoConcessionaria.Atualizar(concessionaria);
daoConcessionaria.Excluir(10);
daoConcessionaria.Selecionar(10);
let resultado = daoConcessionaria.SelecionarTodos();
console.log(resultado);

let daoPessoa: DaoGenerico<Pessoa> = new DaoGenerico<Pessoa>('pessoa');
let pessoa = new Pessoa('', new Carro('', 0), new Carro('', 0));
daoPessoa.NomeTabela();
daoPessoa.Inserir(pessoa);
daoPessoa.Atualizar(pessoa);
daoPessoa.Excluir(10);
daoPessoa.Selecionar(10);
let resultadoPessoa = daoPessoa.SelecionarTodos();
console.log(resultadoPessoa);

let daoMoto: DaoGenerico<Moto> = new DaoGenerico<Moto>('moto');
let moto = new Moto('');
daoMoto.NomeTabela();
daoMoto.Inserir(moto);
daoMoto.Atualizar(moto);
daoMoto.Excluir(10);
daoMoto.Selecionar(10);
let resultadoMoto = daoMoto.SelecionarTodos();
console.log(resultadoMoto);

let daoCarro: DaoGenerico<Carro> = new DaoGenerico<Carro>('carro');
let carro = new Carro('', 0);
daoCarro.NomeTabela();
daoCarro.Inserir(carro);
daoCarro.Atualizar(carro);
daoCarro.Excluir(10);
daoCarro.Selecionar(10);
let resultadoCarro = daoCarro.SelecionarTodos();
console.log(resultadoCarro);