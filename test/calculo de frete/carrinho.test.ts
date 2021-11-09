import { Produto } from "../../04 - calculo frete/produto";
import { Carrinho } from "../../04 - calculo frete/carrinho"
import { Usuario } from "../../04 - calculo frete/usuario";



let usuario: Usuario
let carrinho: Carrinho
let teclado: Produto
let monitor: Produto
let mouse: Produto

beforeEach(() => {
    usuario = new Usuario('marcos', 35430045)
    carrinho = new Carrinho(usuario)
    
    teclado = new Produto('teclado', 75, 2)
    monitor = new Produto('monitor', 65, 3)
    mouse = new Produto('mouse', 55, 2)
})

describe('Adicionar produtos no carrinho', () => {   

    test('Adicionar 2 teclados no valor de 75 reais em um carrinho de compras', () => {
    
        const expectedValue = 'Produto adicionado no carrinho de compras'         
        
        const result = carrinho.add(teclado)

        expect(expectedValue).toEqual(result)
    
    })
})


describe('Lista de produtos no carrinho', () => {

    test('Retornar a lista de produtos', () => {
    
        const expectedValue = [{nome: 'teclado', valor: 75, quantidade: 2}, {nome: 'monitor', valor: 65, quantidade: 3}]
        
        carrinho.add(teclado)
        carrinho.add(monitor)

        const result = carrinho.getlistaProdutos()
    
        expect(expectedValue).toEqual(result)
    
    })
})


describe('Retornar o valor final do carrinho', () => {
    test('Retornar o valor de um carrinho vazio', () => {
        
        const expectedValue = 0
    
        const result = carrinho.getValorTotalDaListaProdutos()
    
        expect(expectedValue).toEqual(result)
    
    })
    
    test('Retornar o valor final do carrinho de compras depois de adicionar dois produtos', () => {
        const expectedValue =  345 

        carrinho.add(teclado)
        carrinho.add(monitor)        
        const result = carrinho.getValorTotalDaListaProdutos()
    
        expect(expectedValue).toEqual(result)
    
    })
    
    test('Retornar o valor final do carrinho de compras depois de adicionar o mesmo produto', () => {
        const expectedValue =  300
        
        carrinho.add(teclado)
        carrinho.add(teclado)
        
        const result = carrinho.getValorTotalDaListaProdutos()
    
        expect(expectedValue).toEqual(result)
    
    })
})

describe('Remover o produto de um carrinho', () => {
    test('Remover um produto do carrinho de compras', () => {
        const expectedValue =  'Produto removido'    
        
        carrinho.add(teclado)
        carrinho.add(mouse)
        const result = carrinho.remover(teclado)
    
        expect(expectedValue).toEqual(result)
    
    })
    
    test('Remover um produto espefico do carrinho de compras', () => {
        const expectedValue =  [{nome: 'mouse', valor: 55, quantidade: 2}]
        
        carrinho.add(teclado)
        carrinho.add(mouse)
    
        carrinho.remover(teclado)
    
        expect(expectedValue).toEqual(carrinho.getlistaProdutos())
    
    })    
    
    test('Remover todo os produtos do carrinho de compras', () => {
        const expectedValue =  0
        
        carrinho.add(teclado)
        carrinho.add(mouse)
    
        carrinho.remover(teclado)
        carrinho.remover(mouse)
    
        expect(expectedValue).toEqual(carrinho.getValorTotalDaListaProdutos())
    
    })
})

