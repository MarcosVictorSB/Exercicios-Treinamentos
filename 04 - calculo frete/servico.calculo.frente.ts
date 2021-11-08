import { Carrinho } from "./carrinho";
import { Usuario } from "./usuario";
import IServicoCorreio  from "./IServicoCorreio"

export default class ServicoCalculoFrete implements IServicoCorreio {
    
    registrado(cep: number): number {
        return 0
    }
}