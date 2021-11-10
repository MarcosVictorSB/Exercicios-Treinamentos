import { Produto } from "./produto";
import { Usuario } from "./usuario";

export class Carrinho {

    private listaProdutos: Produto[] 
    usuario: Usuario

    constructor(usuario: Usuario){
        this.listaProdutos = []
        this.usuario = usuario
    }

    add(produto: Produto): void {
        const carrinhoVazio = this.listaProdutos.length === 0
        if(carrinhoVazio){
            this.listaProdutos.push(produto)
            return
        }

        const index = this.listaProdutos.indexOf(produto)
        if(index === -1){
            this.listaProdutos.push(produto)
            return
        }
        
        this.listaProdutos[index].setQuantidade(produto.getQuantidade())
        return
        
            
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