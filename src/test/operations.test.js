const Operations = require("../src/service/Operations");

describe('Operations', () => {
    let operations;
    
    beforeEach(() => {
        operations = new Operations();
    });

    // Pruebas para suma
    describe('sum', () => {
        test('should return 0 when no numbers are passed', () => {
            expect(operations.sum()).toBe(0);
        });
    });

    test("La contraseña debe ser mayor a 8", () => {
        expect(operations.sum(2, 3)).toBe(5);
        expect(operations.sum(-1, 1)).toBe(0);
        expect(operations.sum(0, 0)).toBe(0);
        expect(operations.sum('', 7)).toBe('formato no valido');
    });


});