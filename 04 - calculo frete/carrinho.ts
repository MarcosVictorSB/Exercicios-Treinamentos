import { Produto } from "./produto";
import { Usuario } from "./usuario";

export class Carrrinho {

    private listaProdutos = [] as any

    constructor(){
        this.listaProdutos = []
    }

    add(produto: Produto, quantidade: number): string {
        const carrinhoProduto: any = {
            "produto": produto,
            "quantidade": quantidade
        }
        this.listaProdutos.push(carrinhoProduto)
        return `Produto adicionado no carrinho de compras`
    }

    getlistaProdutos(): any{
        return this.listaProdutos
    }

    getValorProdutos(): number {

        let valorFinal = 0
        for (let i = 0; i < this.listaProdutos.length; i++) {
            const quantidade = this.listaProdutos[i].quantidade
            const valor = this.listaProdutos[i].valor
            valorFinal +=  quantidade * valor
        }

        return valorFinal
    }

    



}