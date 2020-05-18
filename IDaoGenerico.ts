export interface IDaoGenerico<T> 
{
    nomeTabela: string;
    
    NomeTabela(): void;
    Inserir(object: T): boolean;
    Atualizar(object: T): boolean;
    Excluir(id: number): T;
    Selecionar(id: number): T;
    SelecionarTodos(): [T];
}