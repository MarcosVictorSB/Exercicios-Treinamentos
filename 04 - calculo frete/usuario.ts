import { Carrinho } from "./carrinho"

export class Usuario {
    private nome: string
    private cep: number
    private carrinho: Carrinho

    constructor(nome: string, enderenco: number, carrinho: Carrinho){
        this.nome = nome
        this.cep = enderenco
        this.carrinho = carrinho
    }

    getNome(): string {
        return this.nome
    }

    getCEP(): number{
        return this.cep
    }

    getCarrinho(): Carrinho {
        return this.carrinho
    }

}