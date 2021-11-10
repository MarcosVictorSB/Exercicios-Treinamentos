import { Carrinho } from "./carrinho";
import IServicoCorreio  from "./IServicoCorreio"

export default class ServicoCalculoFrete implements IServicoCorreio {
    
    private static instancia: ServicoCalculoFrete
    private valorMininoParaCobraFrete: number = 99
    private valorFrete: number = 30
    
    private constructor(){}

    static getInstancia(): ServicoCalculoFrete {
        if(!ServicoCalculoFrete.instancia){
            ServicoCalculoFrete.instancia = new ServicoCalculoFrete()
        }
        return this.instancia
    }


    registrado(cep: number): number{
        return this.valorFrete // usará esse valor porque não ira consultar um api real
    }

    valorTotal(carrinho: Carrinho): number {
        const valorTotalDaListaProdutos = carrinho.getValorTotalDaListaProdutos()
        const possuiFrete = valorTotalDaListaProdutos <= this.valorMininoParaCobraFrete
        
        if(possuiFrete){
            const valorDoFrete = this.registrado(carrinho.usuario.getCEP())
            return valorTotalDaListaProdutos + valorDoFrete
        }

        return valorTotalDaListaProdutos
    }
}