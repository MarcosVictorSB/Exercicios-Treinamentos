import { Produto } from "./produto";
import { Usuario } from "./usuario";

export class Carrrinho {

    listaProdutos = [] as any

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
}