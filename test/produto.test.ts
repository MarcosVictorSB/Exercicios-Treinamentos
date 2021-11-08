import { Produto } from "../04 - calculo frete/produto";

test('Criado um produto monitor no valo de R$ 185 reais', () => {
    
    const expectedValueName = "monitor"
    const expectedValuePrice = 185
    
    const produto = new Produto("monitor", 185)

    expect(expectedValueName).toEqual(produto.nome)
    expect(expectedValuePrice).toEqual(produto.valor)
})