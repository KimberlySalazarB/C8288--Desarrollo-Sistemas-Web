const sumar = (a,b) => a+b;
const restar = (a,b) => a-b;
const multiplicar = (a,b) => a*b;
const dividir = (a,b) => { 
    if (b===0){
        return console.log("No se puede divir entre cero");
    }else{
        return a/b
    }
}


export {sumar,restar};

export default{multiplicar,dividir};