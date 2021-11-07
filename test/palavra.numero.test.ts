import {valueWord} from '../03 - palavras em numeros/palavra.numero'

test('Informando a letra "a" teria a resposta deve ser 1', () => {
    const expectedValue = 1

    const result = valueWord('a')

    expect(expectedValue).toEqual(result)
})

test('Informando a letra "b" teria a resposta deve ser 2', () => {
    const expectedValue = 2

    const result = valueWord('b')

    expect(expectedValue).toEqual(result)
})

test('Informando a letra "z" teria a resposta deve ser 26', () => {
    const expectedValue = 26

    const result = valueWord('z')

    expect(expectedValue).toEqual(result)
})


test('Informando a letra "A" teria a resposta deve ser 27', () => {
    const expectedValue = 27

    const result = valueWord('A')

    expect(expectedValue).toEqual(result)
})

test('Informando a letra "B" teria a resposta deve ser 28', () => {
    const expectedValue = 28

    const result = valueWord('B')

    expect(expectedValue).toEqual(result)
})

test('Informando a letra "Z" teria a resposta deve ser 52', () => {
    const expectedValue = 52

    const result = valueWord('Z')

    expect(expectedValue).toEqual(result)
})

