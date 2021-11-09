import { Produto } from "../../04 - calculo frete/produto";

let produto: Produto

beforeEach(() => {
    produto = new Produto('monitor', 185, 2)
})


describe('Produto', () => {
    test('Retornando o nome, preço e quantidade de um produto recem criado', () => {
    
        expect('monitor').toEqual(produto.getNome())
        expect(185).toEqual(produto.getValor())
        expect(2).toEqual(produto.getQuantidade())
    })
})

