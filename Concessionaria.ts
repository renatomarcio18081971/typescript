import Carro from './Carro';
import IConcessionaria from './IConcessionaria';

export default class Concessinaria implements IConcessionaria {
    private endereco: string
    private listaDeCarros: Carro[] = []

    public constructor(endereco: string, listaDeCarros: Carro[]){
        this.endereco = endereco,
        this.listaDeCarros = listaDeCarros
    }

    public fornecerHorarioDeFuncionamento(): string {
        return 'de Segunda a Sexta das 8:00 às 18:00 e sábado das 8:00 às 12:00 ';
    }

    public fornecedorEndereco(): string {
        return this.endereco;
    }

    public mostrarListaDeCarros(): Carro[] {
        return this.listaDeCarros;
    }
}
