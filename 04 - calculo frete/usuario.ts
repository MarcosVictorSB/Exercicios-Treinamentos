import { Carrrinho } from "./carrinho"

export class Usuario {
    private nome: string
    private cep: number
    private carrinho: Carrrinho

    constructor(nome: string, enderenco: number, carrinho: Carrrinho){
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

}