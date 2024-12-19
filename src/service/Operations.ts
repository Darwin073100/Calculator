class Operations{
    sum( a: number = 0, b:number = 0 ){
        
        if ( typeof(a) === 'string') return 'Formato no valido'

        return a + b;
    }

    substract(a:number, b:number){
        if( typeof(a) !== 'number' || typeof(b) !== 'number') return 'Formato no valido';

        return a - b;
    }

    multiply(a:number, b:number){
        if( typeof(a) !== 'number' || typeof(b) !== 'number') return 'Formato no valido';

        return a * b;
    }

    division(a:number, b:number){
        if( typeof(a) !== 'number' || typeof(b) !== 'number') return 'Formato no valido';
        
        if( b === 0 ) return 'No se puede dividir entre 0';
        
        return a / b;
    }
}

export default Operations;