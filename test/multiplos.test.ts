import Divisible from '../01 - exercicios/multiplos'

test('Somar dos numeros naturais abaixo de 10 divisivel por 3 ou 5', () => {
    const expectedValue = 23

    const divible = new Divisible();
    const result = divible.sumNaturalNumbersDivisible3Or5Below(10)

    expect(expectedValue).toEqual(result)
})

test('Soma dos numero naturais abaixo de 1000 divisivel por 3 ou 5', () => {
    const expectedValue = 233168

    const divible = new Divisible();
    const result = divible.sumNaturalNumbersDivisible3Or5Below(1000)

    expect(expectedValue).toEqual(result)
})

