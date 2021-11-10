import { Carrinho } from "../../04 - calculo frete/carrinho"
import { Produto } from "../../04 - calculo frete/produto"
import ServicoCalculoFrete from "../../04 - calculo frete/servico.calculo.frente"
import { Usuario } from "../../04 - calculo frete/usuario"

let usuario: Usuario
let carrinho: Carrinho
let produto: Produto
let servico: ServicoCalculoFrete

beforeEach(() => {
    servico = ServicoCalculoFrete.getInstancia()
    usuario = new Usuario("marcos", 335430045)
    carrinho = new Carrinho(usuario)
    produto = new Produto('teclado', 25, 2)
})



describe('Valor do frete', () => {
    test('Retornar o valor do frete', () => {
        const expectedValue = 30

        const resultado = servico.registrado(carrinho.usuario.getCEP())
    
        expect(expectedValue).toEqual(resultado)
    
    })
})


describe('Valor do carrinho com e sem frete', () => {
    test('Retonar o valor total do carrinho sem frete', () => {
    
        const expectedValue = 150
        
        carrinho.add(produto)
        carrinho.add(produto)
        carrinho.add(produto)
        const result = servico.valorTotal(carrinho)
    
        expect(expectedValue).toEqual(result)
    })
    
    test('Retonar o valor total do carrinho com frete', () => {
        const expectedValue = 80

        carrinho.add(produto)        
        const result = servico.valorTotal(carrinho)
    
        expect(expectedValue).toEqual(result)
    })
})

