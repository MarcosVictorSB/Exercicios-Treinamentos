test('A soma dos numeros naturais abaixo de 10 divisivel por 3 ou 5', () => {
    const expectedValue = 23

    const result = sumNaturaisNumbers(10)

    expect(expectedValue).toEqual(result)
})