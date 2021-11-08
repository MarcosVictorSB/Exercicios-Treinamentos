import { numberHappy, numbersSplits, squareSumOfNumbers, thisNumberExistInArray} from '../../02 - exercicios/numeros.felizes'

test('Quando verificar o numero 7 deve um retornar "Numero feliz"', () => {
    const expectedValue = 'Numero feliz'

    const result = numberHappy(7)

    expect(expectedValue).toEqual(result)
})

test('Quando verificar o numero 2 deve me retonar "Numero não feliz"' , () => {
    const expectedValue = 'Numero não é feliz'

    const result = numberHappy(2)

    expect(expectedValue).toEqual(result)
})

test('Retorna um numero 15 separado em um array [1, 5]', () => {
    const expectedValue  = [1, 5]

    const result = numbersSplits(15)

    expect(expectedValue).toEqual(result)
})

test('Retorna um numero 155 separado em um array [1, 5, 5]', () => {
    const expectedValue  = [1, 5, 5]

    const result = numbersSplits(155)

    expect(expectedValue).toEqual(result)
})

test('Retorna a soma do quadrado dos digitos, informando os digitos 9 e 7 deve retornar 130', () => {
    const expectedValue = 130

    const result = squareSumOfNumbers([9, 7])

    expect(expectedValue).toEqual(result)
})

test('Retorna a soma do quadrado dos digitos, informando os digitos 4 e 9 deve retornar 97', () => {
    const expectedValue = 97

    const result = squareSumOfNumbers([4, 9])

    expect(expectedValue).toEqual(result)
})

test('Retorna verdadeiro ao verificar se o numero 5 existe neste array [1, 2, 3, 4, 5]', () => {
    const expectedValue = true

    const result = thisNumberExistInArray(5, [1, 2, 3, 4, 5])

    expect(expectedValue).toEqual(result)
})

test('Retorna falso ao verificar se o numero 5 existe neste array [1, 2, 3, 4]', () => {
    const expectedValue = false

    const result = thisNumberExistInArray(5, [1, 2, 3, 4])

    expect(expectedValue).toEqual(result)
})