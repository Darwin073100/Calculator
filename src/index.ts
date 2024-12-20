import Operations from './service/Operations';
let operations: any;

operations =  new Operations();

console.log(operations.validationParameter(1,1));
console.log(operations.validationParameter(()=>{},1));
console.log(operations.validationParameter(1,""));
console.log(operations.validationParameter(1,true));
console.log(operations.validationParameter(1,undefined));
console.log(operations.validationParameter(1,NaN));

console.log(operations.sumRefactor(1,2,3,4,5,100));
console.log(operations.sumRefactor(1,2,3,4,5,100,9,4));
console.log(operations.sumRefactor(1,2,3,4,5,100,7,3,4,5,6,7,8));
