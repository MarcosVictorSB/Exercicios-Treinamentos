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

    test('Adicionar um produto no carrinho de compras', () => {
    
        const produtoExperado = [{nome: 'teclado', valor: 75, quantidade: 2}]
        
        carrinho.add(teclado)

        expect(produtoExperado).toEqual(carrinho.getlistaProdutos())

    
    })

    test('Adicionar o mesmo produto 2x no carrinho de compras', () => {
    
        const expectedValue = [{nome: 'teclado', valor: 75, quantidade: 4}]
        
        carrinho.add(teclado)
        carrinho.add(teclado)

        const result = carrinho.getlistaProdutos()
    
        expect(expectedValue).toEqual(result)
    
    })

    test('Adicionar 2 produtos diferente no carrinho de compra', () => {
    
        const expectedValue = [{nome: 'teclado', valor: 75, quantidade: 2}, {nome: 'monitor', valor: 65, quantidade: 3}]
        
        carrinho.add(teclado)
        carrinho.add(monitor)

        const result = carrinho.getlistaProdutos()
    
        expect(expectedValue).toEqual(result)
    
    })
})


describe('Valor final do carrinho', () => {
    test('O valor de um carrinho vazio deve ser 0', () => {
        
        const expectedValue = 0
    
        const result = carrinho.getValorTotalDaListaProdutos()
    
        expect(expectedValue).toEqual(result)
    
    })
    
    test('O valor final de um carrinho de compra que possui teclado e monitor deve ser igual a 345', () => {
        const expectedValue =  345 

        carrinho.add(teclado)
        carrinho.add(monitor)        
        const result = carrinho.getValorTotalDaListaProdutos()
    
        expect(expectedValue).toEqual(result)
    
    })
    
    test('O valor final de um carrinho de compra que possui 2 teclados deve ser igual a 300', () => {
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

