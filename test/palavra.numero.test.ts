import {valueWord, isPrimeNumber, numbersOfDividers, isDivisible3Or5} from '../03 - palavras em numeros/palavra.numero'

describe('Valor de uma letra informanda', () => {
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
})

describe('Informando uma palavra dever retornar a soma dos valores', () => {
    test('Informando a palavras "marcos" a resposata deve ser 69', () => {
        const expectedValue = 69
    
        const result = valueWord('marcos')
    
        expect(expectedValue).toEqual(result)
    })
    
    test('Informando a palavras "marcos2548" a resposata deve ser 69', () => {
        const expectedValue = 69
    
        const result = valueWord('marcos2548')
    
        expect(expectedValue).toEqual(result)
    })    
})

describe('Primo ou Não', () => {
    test('Informando o numero 5 deve retornar que "Primo"', () => {
        const expectedValue = "Primo"
    
        const result = isPrimeNumber(5)
    
        expect(expectedValue).toEqual(result)
    })
    
    
    test('Informando o numero 4 deve retornar que "Não primo"', () => {
        const expectedValue = "Não primo"
    
        const result = isPrimeNumber(4)
    
        expect(expectedValue).toEqual(result)
    })
    
})

describe('Quantidade de divisores', () => {
    test('Informando o numero 10 o numero de divisores deve ser igual a 4', () => {
        const expectedValue = 4
    
        const result = numbersOfDividers(10)
    
        expect(expectedValue).toEqual(result)
    
    })
})

describe('Multiplo de 3 ou 5', () => {
    it('Informando o numero 15 deve retornar "true"', () => {
        const expectedValue = true

        const result = isDivisible3Or5(15)

        expect(expectedValue).toEqual(result)
    })

    it('Informando o numero 9 deve retornar "true"', () => {
        const expectedValue = true

        const result = isDivisible3Or5(9)

        expect(expectedValue).toEqual(result)
    })

    it('Informando o numero 10 deve retornar "true"', () => {
        const expectedValue = true

        const result = isDivisible3Or5(10)

        expect(expectedValue).toEqual(result)
    })

    it('Informando o numero 11 deve retornar "false"', () => {
        const expectedValue = false

        const result = isDivisible3Or5(11)

        expect(expectedValue).toEqual(result)
    })
})


describe('Prima ou Não - Feliz ou Não - Multiplo de 3 ou 5', () => {
    // test('infromando o numero 2 deve retornar "Primo - Não Feliz "')
})


