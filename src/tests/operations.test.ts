import { describe } from "node:test";
import Operations from "../service/Operations";

describe('Operations', () => {
    let operations: any;
    
    beforeEach(() => {
        operations = new Operations();
    });

    // Pruebas para suma
    describe('Suma', () => {
        test('should return 0 when no numbers are passed', () => {
            expect(operations.sum()).toBe(0);
        });
        
        test("Deberá realizar las operaciones matematicas", () => {
            expect(operations.sum(2, 3)).toBe(5);
            expect(operations.sum(-1, 1)).toBe(0);
            expect(operations.sum(0, 0)).toBe(0);
            expect(operations.sum('', 7)).toBe('Formato no valido');
        });
    });


    describe('Resta', ()=>{
        test('Debe restar un valor x - y, retornando un valor positivo o negativo', () => { 
            expect(operations.substract(7,7)).toBe(0);
            expect(operations.substract(-7,7)).toBe(-14);
            expect(operations.substract(0,7)).toBe(-7);
            expect(operations.substract(7,0)).toBe(7);

        })
        
        test('Debe retornar, Formato no valido, si se recibe en la funcion un valor distinto de un number', () => { 
            expect(operations.substract(()=>{},7)).toBe('Formato no valido');
            expect(operations.substract(6,true)).toBe('Formato no valido');
            expect(operations.substract(null,true)).toBe('Formato no valido');
        })
    });
    
    describe('Multiplicación',()=>{
        test('Debe multiplicar un valor x * y, retornando un valor positivo o negativo', () => { 
            expect(operations.multiply(3,2)).toBe(6);
            expect(operations.multiply(-4,2)).toBe(-8);
            expect(operations.multiply(7,0)).toBe(0);
            expect(operations.multiply(0,0)).toBe(0);
        })

        test('Debe retornar, Formato no valido, si se recibe en la funcion un valor distinto de un number', () => { 
            expect(operations.multiply(()=>{},7)).toBe('Formato no valido');
            expect(operations.multiply(6,true)).toBe('Formato no valido');
            expect(operations.multiply(null,true)).toBe('Formato no valido');
        })
    });

    describe('División',()=>{
        test('Debe dividir un valor x / y, retornando un valor positivo o negativo', () => { 
            expect(operations.division(100,10)).toBe(10);
            expect(operations.division(-4,2)).toBe(-2);
            expect(operations.division(0,6)).toBe(0);
        })

        test('Debe retornar, Formato no valido, si se recibe en la funcion un valor distinto de un number', () => { 
            expect(operations.division(()=>{},7)).toBe('Formato no valido');
            expect(operations.division(6,true)).toBe('Formato no valido');
            expect(operations.division(null,true)).toBe('Formato no valido');
        })

        test('Si se quiere dividir entre 0, Debe retornar un mensaje de que no es posible', () => {
            expect(operations.division(0,0)).toBe('No se puede dividir entre 0');
            expect(operations.division(7,0)).toBe('No se puede dividir entre 0');
        })
    });
});