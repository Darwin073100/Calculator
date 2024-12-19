class Operations{
    sum( a = 0, b = 0 ){
        
        if ( a === '') return 'Formato no valido'

        return a + b;
    }
}

// const operation = new Operations();

// console.log(operation.sum('a', 1));

module.exports = Operations;