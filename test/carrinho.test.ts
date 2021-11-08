import { Produto } from "../04 - calculo frete/produto";
import { Carrinho } from "../04 - calculo frete/carrinho"
import { Usuario } from "../04 - calculo frete/usuario";

test('Adicionar 2 teclados no valor de 75 reais em um carrinho de compras', () => {
    
    const expectedValue = 'Produto adicionado no carrinho de compras' 


    const teclado = new Produto("teclado", 75, 2)
    const carrinho = new Carrinho()
    const result = carrinho.add(teclado)

    expect(expectedValue).toEqual(result)

})


test('Retornar a lista de produtos', () => {
    
    const expectedValue = [{'nome': 'teclado', 'valor': 75, 'quantidade': 2}, {'nome': 'monitor', 'valor': 65, 'quantidade': 3}]


    const teclado = new Produto("teclado", 75, 2)
    const monitor = new Produto("monitor", 65, 3)
    
    const carrinho = new Carrinho()
    
    carrinho.add(teclado)
    carrinho.add(monitor)


    const result = carrinho.getlistaProdutos()

    expect(expectedValue).toEqual(result)

})


test('Retornar o valor de um carrinho vazio', () => {
    const expectedValue = 0

    const carrinho = new Carrinho()
    const result = carrinho.getValorTotalDaListaProdutos()

    expect(expectedValue).toEqual(result)

})

test('Retornar o valor final do carrinho de compras depois de adicionar dois produtos', () => {
    const expectedValue =  330 


    const teclado = new Produto('teclado', 35, 2)
    const monitor = new Produto('monitor', 130, 2)

    const carrinho = new Carrinho()
    carrinho.add(teclado)
    carrinho.add(monitor)
    const result = carrinho.getValorTotalDaListaProdutos()

    expect(expectedValue).toEqual(result)

})

test('Retornar o valor final do carrinho de compras depois de adicionar o mesmo produto', () => {
    const expectedValue =  105
    const teclado1 = new Produto('teclado', 35, 2)
    const teclado2 = new Produto('teclado', 35, 1)

    const carrinho = new Carrinho()
    carrinho.add(teclado1)
    carrinho.add(teclado2)
    const result = carrinho.getValorTotalDaListaProdutos()

    expect(expectedValue).toEqual(result)

})

test('Remover um produto do carrinho de compras', () => {
    const expectedValue =  'Produto removido'
    const teclado = new Produto('teclado', 35, 2)
    const mouse = new Produto('mouse', 35, 1)

    const carrinho = new Carrinho()
    carrinho.add(teclado)
    carrinho.add(mouse)


    const result = carrinho.remover(teclado)

    expect(expectedValue).toEqual(result)

})

test('Remover um produto espefico do carrinho de compras', () => {
    const expectedValue =  [{'nome': 'mouse', 'valor': 35, 'quantidade': 1}]
    const teclado = new Produto('teclado', 35, 2)
    const mouse = new Produto('mouse', 35, 1)

    const carrinho = new Carrinho()
    carrinho.add(teclado)
    carrinho.add(mouse)

    carrinho.remover(teclado)

    expect(expectedValue).toEqual(carrinho.getlistaProdutos())

})


test('Remover todo os produtos do carrinho de compras', () => {
    const expectedValue =  0
    const teclado = new Produto('teclado', 35, 2)
    const mouse = new Produto('mouse', 35, 1)

    const carrinho = new Carrinho()
    carrinho.add(teclado)
    carrinho.add(mouse)

    carrinho.remover(teclado)
    carrinho.remover(mouse)

    expect(expectedValue).toEqual(carrinho.getValorTotalDaListaProdutos())

})