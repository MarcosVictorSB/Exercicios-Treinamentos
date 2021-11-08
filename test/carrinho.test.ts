import { Produto } from "../04 - calculo frete/produto";
import { Carrrinho } from "../04 - calculo frete/carrinho"
import { Usuario } from "../04 - calculo frete/usuario";

test('Adicionar 2 telcado no valor de 75 reais em um carrinho de compras', () => {
    
    const expectedValue = 'Produto adicionado no carrinho de compras' 


    const teclado = new Produto("teclado", 75)
    const carrinho = new Carrrinho()
    const quantidade = 2
    const result = carrinho.add(teclado, quantidade)

    expect(expectedValue).toEqual(result)

})