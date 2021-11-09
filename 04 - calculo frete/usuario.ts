import { Carrinho } from "./carrinho"

export class Usuario {
    private nome: string
    private cep: number

    constructor(nome: string, enderenco: number){
        this.nome = nome
        this.cep = enderenco
    }

    getNome(): string {
        return this.nome
    }

    getCEP(): number{
        return this.cep
    }

}