import { Carrrinho } from "../04 - calculo frete/carrinho"
import { Produto } from "../04 - calculo frete/produto"
import { Servico } from "../04 - calculo frete/servico"
import { Usuario } from "../04 - calculo frete/usuario"

test('Criar o usuario marcos que comprou dois tecldo no valor de 130, com isso o serviço deve retornar o valor final 260', () => {
    
    const expectedValue = 260

    const carrinhoMarcos = new Carrrinho()
    const marcos = new Usuario('marcos', 35430045, carrinhoMarcos)
    const produto = new Produto("telado", 130, 2)
    marcos.getCarrinho().add(produto)

    const result = new Servico().valorFinal(marcos)

    expect(expectedValue).toEqual(result)

})