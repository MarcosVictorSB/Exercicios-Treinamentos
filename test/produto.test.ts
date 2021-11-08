import { Produto } from "../04 - calculo frete/produto";

test('Retirnado o nome e o preço de um produto recem criado', () => {
    
    const expectedValueName = "monitor"
    const expectedValuePrice = 185
    
    const produto = new Produto("monitor", 185)

    expect(expectedValueName).toEqual(produto.getNome())
    expect(expectedValuePrice).toEqual(produto.getValor())
})