const { name } = require("../strings");

describe('Prueba sobre caracteres(strings)', () => {

    test('Convertir en mayusculas la variable name', () => {
        expect(name.toUpperCase()).toEqual('LUIS');
    })

})