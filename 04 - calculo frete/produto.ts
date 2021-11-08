export class Produto {
    private nome: string
    private valor: number

    constructor(nome: string, valor: number){
        this.nome = nome
        this.valor = valor
    }

    getNome(): string {
        return this.nome
    }

    getValor(): number {
        return this.valor
    }
}