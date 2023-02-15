const { saludo, PI, esMayor } = require("../app")

describe('Primeras Pruebas', () => {

    test('La funcion saludo debe estar definida', () => {
        expect(saludo).toBeDefined()
    })

    test('La funcion saludo debe retornar "hola mundo"', () => {
        expect(saludo()).toBe("Hola Mundo");
    })

    test('La constante PI debe estar definida', () => {
        expect(PI).toBeDefined()
    })

    test('Saber si es mayor de edad', () => {
        expect(esMayor(18)).toBeTruthy()
    })

    test('Saber si es mayor de edad', () => {
        expect(esMayor(16)).toBeFalsy()
    })
})