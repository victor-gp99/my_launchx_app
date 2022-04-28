const Ajolonauta = require('./../app/Ajolonauta')

describe("Pruebas de unidad de Ajolonauta", () => {
    test('Caso de prueba 1: Creación de objeto', () => {
        // Aqui tu puedes usar el código como lo deseas utilizar
        const woopa = new Ajolonauta("Woopa")

        // validar el resultado esperado
        expect(woopa.name).toBe("Woopa");
    });
})

//1.- Describe una prueba que alle pero que describa la funcionalidad que quieres
//2.- Agrega el codigo suficiente para hacer que esa prueba pase
//3.- Modifica/refactoriza, dale una mejor estructura a tu codigo tu codigo