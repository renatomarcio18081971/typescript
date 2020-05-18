import { IDao } from "./IDao";
import Carro from "./Carro";

export class CarroDao implements IDao 
{
    nomeTabela: string = 'carro';

    Inserir(object: Carro): boolean {
        console.log("logica insert");
        return true;
    }
    Atualizar(object: Carro): boolean {
        console.log("logica atualizar");
        return true;
    }
    Excluir(id: number): Carro {
        console.log("logica atualizar");
        return new Carro('', 0);
    }
    Selecionar(id: number): Carro {
        console.log("logica atualizar");
        return new Carro('', 0);
    }
    SelecionarTodos(): [Carro] {
        console.log("logica atualizar");
        return [new Carro('', 0)];
    }

}