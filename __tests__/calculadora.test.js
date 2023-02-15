const { sumar, restar, countToZero } = require("../calculadora");


describe('Pruebas sobre la funcion sumar', () => {

    test('La funcion sumar debe estar definida', () => {
        expect(sumar).toBeDefined();
    })

    test('La funcion sumar debe estar retonar un numero', () => {
        expect(typeof(sumar(10, 10))).toBe('number');
    })

    test('La suma de 12 + 12 debe retornar 24', () => {
        expect(sumar(12, 12)).toBe(24);
    })
})

describe('Pruebas sobre la funcion restar', () => {

    test('La funcion restar debe estar definida', () => {
        expect(restar).toBeDefined();
    })

    test('La funcion restar debe estar retonar un numero', () => {
        expect(typeof(restar(10, 10))).toBe('number');
    })

    test('La suma de 12 - 12 debe retornar 0', () => {
        expect(restar(12, 12)).toBe(0);
    })
})

describe('Pruebas sobre la function countToZero', () => {
    test('prueba 1', () => {
        expect(countToZero()).toBe(-1);
    })
})