import { Produto } from "../../04 - calculo frete/produto";

test('Retionando o nome, preço e quantidade de um produto recem criado', () => {
    
    const expectedValueName = "monitor"
    const expectedValuePrice = 185
    const expectedValueQuantidade = 2
    
    const produto = new Produto("monitor", 185, 2)

    expect(expectedValueName).toEqual(produto.getNome())
    expect(expectedValuePrice).toEqual(produto.getValor())
    expect(expectedValueQuantidade).toEqual(produto.getQuantidade())
})