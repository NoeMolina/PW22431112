//const operaciones = ['suma','resta', 'multiplica','divide'];
export type operaciones = 'suma' | 'resta' |'divide'|'multiplica';
const calculadora = (a:number,b:number,operacion: operaciones):number=>{
    // if (!operaciones.includes(operacion)) {
    //     console.log('operacion no permitida');
    // }
    if(operacion == 'suma'){
        return a+b;
    }
    if(operacion == "resta"){
        return a-b;
    }
    if(operacion == "multiplica"){
        return a*b;
    }
    if(operacion == "divide"){
        if(b == 0 ){
            //return "no se puede dividir entre 0";
            throw new Error("No se puede dividir entre 0");
            
        }
        return a/b;
    }
    throw new Error("Operacion no permitida");
    
}
console.log(calculadora(1,3,'suma'))
console.log(calculadora(1,3,'resta'))
console.log(calculadora(1,3,'multiplica'))
console.log(calculadora(1,3,'divide'))
