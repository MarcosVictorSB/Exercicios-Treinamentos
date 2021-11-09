import { Usuario } from "../../04 - calculo frete/usuario";


let usuario: Usuario

beforeEach(() => {
    usuario = new Usuario('marcos', 35430045)
})

describe('Usuario', () => {
    test('Retorna o nome e CEP um usuario novo', () => {    
        expect('marcos').toEqual(usuario.getNome())
        expect(35430045).toEqual(usuario.getCEP())
    })
})

