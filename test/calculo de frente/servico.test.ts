import { Carrinho } from "../../04 - calculo frete/carrinho"
import { Produto } from "../../04 - calculo frete/produto"
import ServicoCalculoFrete from "../../04 - calculo frete/servico.calculo.frente"
import { Usuario } from "../../04 - calculo frete/usuario"

test('Retornar o valor do frente', () => {
    const expectedValue = 30

    const servico = new ServicoCalculoFrete()
    
    const marcos = new Usuario("marcos", 335430045)
    const carrinho = new Carrinho(marcos)
    
    const resultado = servico.registrado(marcos.getCEP())

    expect(expectedValue).toEqual(resultado)

})


test('Retonar o valor total do carrinho sem frete', () => {
    
    const expectedValue = 150
    
    const teclado = new Produto('teclado', 25, 2)
    const mouse = new Produto('mouse', 25, 2)
    const monitor = new Produto('monitor', 25, 2)
    const marcos = new Usuario('marcos', 35430045)

    const carrinho = new Carrinho(marcos)
    carrinho.add(teclado)
    carrinho.add(mouse)
    carrinho.add(monitor)

    const servico = new ServicoCalculoFrete()
    const result = servico.valorTotal(carrinho)

    expect(expectedValue).toEqual(result)
})

test('Retonar o valor total do carrinho com frete', () => {
    const expectedValue = 80
    
    const teclado = new Produto('teclado', 25, 2)
    const marcos = new Usuario('marcos', 35430045)

    const carrinho = new Carrinho(marcos)
    carrinho.add(teclado)

    

    const servico = new ServicoCalculoFrete()
    const result = servico.valorTotal(carrinho)

    expect(expectedValue).toEqual(result)
})