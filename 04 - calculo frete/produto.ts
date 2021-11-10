export class Produto {
    private nome: string
    private valor: number
    private quantidade: number

    constructor(nome: string, valor: number, quantidade: number){
        this.nome = nome
        this.valor = valor
        this.quantidade = quantidade
    }

    getNome(): string {
        return this.nome
    }

    getValor(): number {
        return this.valor
    }

    setValor(valor: number): void {
        this.valor += valor
    }

    getQuantidade(): number {
        return this.quantidade
    }

    setQuantidade(quantidade: number): void {
        this.quantidade += quantidade
    }
}