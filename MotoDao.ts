import { IDao } from "./IDao";
import Moto from "./Moto";

export class MotoDao implements IDao
{
    nomeTabela: string = 'moto';

    Inserir(object: Moto): boolean {
        console.log("logica insert");
        return true;
    }
    Atualizar(object: Moto): boolean {
        console.log("logica atualizar");
        return true;
    }
    Excluir(id: number): Moto {
        console.log("logica atualizar");
        return new Moto('');
    }
    Selecionar(id: number): Moto {
        console.log("logica atualizar");
        return new Moto('');
    }
    SelecionarTodos(): [Moto] {
        console.log("logica atualizar");
        return [new Moto('')];
    }

}