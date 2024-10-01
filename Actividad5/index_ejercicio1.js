import { sumar,restar } from "./mathOperations.js";
import operaciones from './mathOperations.js';

const a=10;
const b=5;

console.log(`Suma de ${a} y ${b} :`, sumar(a,b));
console.log(`Resta de ${a} y ${b} :`, restar(a,b));
console.log(`Multiplicacion de ${a} y ${b} :`, operaciones.multiplicar(a,b));
console.log(`Division de ${a} y ${b} :`, operaciones.dividir(a,b));

