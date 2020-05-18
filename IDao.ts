export interface IDao 
{
    nomeTabela: string;
    
    Inserir(object: any): boolean;
    Atualizar(object: any): boolean;
    Excluir(id: number): any;
    Selecionar(id: number): any;
    SelecionarTodos(): [any];
}