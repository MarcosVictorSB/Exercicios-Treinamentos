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


test('Retornar a lista de produtos', () => {
    
    const expectedValue = [{'produto': {'nome': 'teclado', 'valor': 75}, 'quantidade': 2}, {'produto': {'nome': 'monito', 'valor': 65}, 'quantidade': 3}]


    const teclado = new Produto("teclado", 75)
    const quantidadeTeclado = 2

    const monitor = new Produto("monito", 65)
    const quantidadeMonitor = 3
    
    const carrinho = new Carrrinho()
    
    carrinho.add(teclado, quantidadeTeclado)
    carrinho.add(monitor, quantidadeMonitor)


    const result = carrinho.getlistaProdutos()

    expect(expectedValue).toEqual(result)

})