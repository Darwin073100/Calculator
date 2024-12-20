class Operations{
    // Retorna false, si los parametros son diferentes de un tipo number
    // Retorna true, si los parametros son diferentes de un tipo number
    validationParameter(a: number, b:number): boolean {
        return (typeof a === 'number' && typeof b === 'number' && !isNaN(a) && !isNaN(b));
    }

    sum( a: number = 0, b:number = 0 ){
        
        if(!this.validationParameter(a,b)) return 'Formato no valido';

        return a + b;
    }

    sumRefactor(...numbers:number[]){
        let add = 0;
        for(let i = 0; i < numbers.length; i++){
            add = add + numbers[i]
        }
        return add;
    }

    substract(a:number, b:number){
        if(!this.validationParameter(a,b)) return 'Formato no valido';

        return a - b;
    }

    multiply(a:number, b:number){
        if(!this.validationParameter(a,b)) return 'Formato no valido';

        return a * b;
    }

    division(a:number, b:number){

        if(!this.validationParameter(a,b)) return 'Formato no valido';
        
        if( b === 0 ) return 'No se puede dividir entre 0';
        
        return a / b;
    }
    
}

export default Operations;