import { IDao } from "./IDao";
import Concessionaria from './Concessionaria';
import Carro from "./Carro";

export class ConcessionariaDao implements IDao
{
    nomeTabela: string = 'concessionaria';

    Inserir(object: Concessionaria): boolean {
        console.log("logica insert");
        return true;
    }
    Atualizar(object: Concessionaria): boolean {
        console.log("logica atualizar");
        return true;
    }
    Excluir(id: number): Concessionaria {
        console.log("logica atualizar");
        return new Concessionaria('', []);
    }
    Selecionar(id: number): Concessionaria {
        console.log("logica atualizar");
        return new Concessionaria('', []);
    }
    SelecionarTodos(): [Concessionaria] {
        console.log("logica atualizar");
        return [new Concessionaria('', [])];
    }

}