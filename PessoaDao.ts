import { IDao } from "./IDao";
import Pessoa from './Pessoa';
import Carro from "./Carro";

export class PessoaDao implements IDao
{
    nomeTabela: string = 'pessoa';

    Inserir(object: Pessoa): boolean {
        console.log("logica insert");
        return true;
    }
    Atualizar(object: Pessoa): boolean {
        console.log("logica atualizar");
        return true;
    }
    Excluir(id: number): Pessoa {
        console.log("logica excluir");
        return new Pessoa('', new Carro('', 0), new Carro('', 0));
    }
    Selecionar(id: number): Pessoa {
        console.log("logica selecionar");
        return new Pessoa('', new Carro('', 0), new Carro('', 0));
    }
    SelecionarTodos(): [Pessoa] {
        console.log("logica selecionar todos");
        return [new Pessoa('', new Carro('', 0), new Carro('', 0))];
    }

}