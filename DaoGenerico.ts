import { IDaoGenerico } from "./IDaoGenerico";

export class DaoGenerico<T> implements IDaoGenerico<T>
{
    nomeTabela: string;

    constructor(nomeTabela: string){
        this.nomeTabela = nomeTabela;
    }

    NomeTabela(): void {
        console.log(this.nomeTabela);
    }
    
    Inserir(object: T): boolean {
        console.log("logica insert");
        return true;
    }
    Atualizar(object: T): boolean {
        console.log("logica atualizar");
        return true;
    }
    Excluir(id: number): T {
        console.log("logica excluir");
        return Object();
    }
    Selecionar(id: number): T {
        console.log("logica selecionar");
        return Object();
    }
    SelecionarTodos(): [T] {
        console.log("logica selecionar todos");
        return [Object()];
    }


}