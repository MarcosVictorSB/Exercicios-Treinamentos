import { Carrinho } from "./carrinho";
import { Usuario } from "./usuario";
import IServicoCorreio  from "./IServicoCorreio"

export default class ServicoCalculoFrete implements IServicoCorreio {
    
    private servicoCorreio: IServicoCorreio
    
    constructor(servicoCorreio: IServicoCorreio){
        this.servicoCorreio = servicoCorreio
    }

    registrado(cep: number): number{
        return 35.50 // usará esse valor porque não ira consultar um api real
    }
}