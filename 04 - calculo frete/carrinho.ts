import { Produto } from "./produto";
import { Usuario } from "./usuario";

export class Carrinho {

    private listaProdutos: Produto[] 
    usuario: Usuario

    constructor(usuario: Usuario){
        this.listaProdutos = []
        this.usuario = usuario
    }

    add(produto: Produto): string {
        this.listaProdutos.push(produto)
        return `Produto adicionado no carrinho de compras`
    }

    getlistaProdutos(): Produto[]{
        return this.listaProdutos
    }    

    getValorTotalDaListaProdutos(): number {
        return this.listaProdutos.reduce((acc, valor) => acc + (valor.getValor() *  valor.getQuantidade()), 0)
    }

    remover(produto: Produto): string {
        for (let i = 0; i < this.listaProdutos.length; i++) {
            if(this.listaProdutos[i].getNome() === produto.getNome()){                    
                
                this.listaProdutos.splice(i, 1)
            }
        }
        
        return `Produto removido`
    }

}