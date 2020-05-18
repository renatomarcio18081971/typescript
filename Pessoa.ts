import Carro from './Carro';

export default class Pessoa{
    private nome: string
    private carroPreferido: Carro
    private carro: Carro;

    public constructor(nome: string, carroPreferido: Carro, carro: Carro) {
        this.nome = nome,
        this.carroPreferido = carroPreferido,
        this.carro = carro
    }

    public dizerNome(): string{
        return this.nome;
    }

    public dizerCarroPreferido(): Carro{
        return this.carroPreferido;
    }

    public comprarCarro(carro: Carro): void {
        this.carro = carro;
    }

    public dizerCarroQueTem(): Carro {
        return this.carro;
    }
}
