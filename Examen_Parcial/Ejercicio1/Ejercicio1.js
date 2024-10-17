// Clase Nodo: Tarea de la cola
class Nodo {
    constructor(tarea) {
        this.tarea = tarea;
        this.siguiente = null;
    }
}
// Clase cola
class Cola extends Nodo {
    constructor(tarea) {
        super(tarea);
        this.cabeza = null;
        this.cola = null;
    }
    //Encolar tarea
    encolar(tarea) {
        const nuevoNodo = new Nodo(tarea);
        if (this.cola) {
            this.cola.siguiente = nuevoNodo;
        }
        else {
            this.cabeza = nuevoNodo;
        }
        this.cola = nuevoNodo;
    }
}
class EventLoop {
    constructor(tarea) {
        this.cola = new Cola(tarea);
    }
    funSetTimeout() {
        return setTimeout(() => console.log(this.cola), 1000);
    }
    ;
    funSetImmediate() {
        return setImmediate(() => console.log(this.cola));
    }
}
const evento = new EventLoop(["Tarea1", "Tarea2"]);
console.log(evento);
//Ejecucion de distintas fases
evento.funSetTimeout();
evento.funSetImmediate();
