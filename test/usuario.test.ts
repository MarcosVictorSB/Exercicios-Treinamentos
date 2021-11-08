import { Usuario } from "../04 - calculo frete/usuario";


test('Criando um usuario novo', () => {
    const expectedValueName = 'marcos'
    const expectedValueEndereco = 35430045

    const usuario = new Usuario('marcos', 35430045)

    expect(expectedValueName).toEqual(usuario.nome)
    expect(expectedValueEndereco).toEqual(usuario.enderenco)
})