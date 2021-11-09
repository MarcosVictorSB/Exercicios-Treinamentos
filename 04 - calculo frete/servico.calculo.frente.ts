import { Carrinho } from "./carrinho";
import IServicoCorreio  from "./IServicoCorreio"

export default class ServicoCalculoFrete implements IServicoCorreio {
    
    private static instancia: ServicoCalculoFrete
    
    private constructor(){}

    static getInstancia(): ServicoCalculoFrete {
        if(!ServicoCalculoFrete.instancia){
            ServicoCalculoFrete.instancia = new ServicoCalculoFrete()
        }
        return this.instancia
    }


    registrado(cep: number): number{
        return 30 // usará esse valor porque não ira consultar um api real
    }

    valorTotal(carrinho: Carrinho): number {
        return carrinho.getValorTotalDaListaProdutos() < 100 ? 
            carrinho.getValorTotalDaListaProdutos() + this.registrado(carrinho.usuario.getCEP()) : carrinho.getValorTotalDaListaProdutos()
    }
}