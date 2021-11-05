import numberHappy from '../02 - exercicios/numeros.felizes'

test('Quando verificar o numero 7 deve um retornar "Numero feliz"', () => {
    const expectedValue = 'Numero feliz'

    const result = numberHappy(7)

    expect(expectedValue).toEqual(result)
})


test('Quando verificar o numero 5 deve me retonar "Numero não feliz"' , () => {
    const expectedValue = 'Numero não é feliz'

    const result = numberHappy(5)

    expect(expectedValue).toEqual(result)
})
