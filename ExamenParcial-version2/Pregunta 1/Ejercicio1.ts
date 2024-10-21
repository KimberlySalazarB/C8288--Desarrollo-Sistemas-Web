// Clase abstracta que define una tarea asíncrona
abstract class TareaAsincrona{
    protected nombre:string;
    constructor(nombre:string){
        this.nombre=nombre;
    }

    // Método abstracto para ejecutar la tarea
    abstract ejecutar():void;

    // Método para obtener información sobre la tarea
    infoTare():string{
        return this.nombre
    }
    //Metodo para mostrar la descripción de la tarea
    mostrarDescri():void{
        console.log(`Ejecutando: ${this.nombre}`);
    }
}

//Clase que simula una tarea con la fase setTimeout
class TareasetTimeout extends TareaAsincrona{
    ejecutar(): void {
        setTimeout(()=>{
            this.mostrarDescri();
            this.infoTare();
            console.log('Tarea de la fase setTimeout completada.');
        },1000);
    }
}

//Clase que simula una tarea con la fase setImmediate
class TareasetImmediate extends TareaAsincrona{
    ejecutar(): void {
        setImmediate(()=>{
            this.mostrarDescri();
            this.infoTare();
            console.log('Tarea de la fase setImmediate completada.');
        });
    }
}

//Clase que simula una tarea con la fase processNextTick
class TareaprocessNextTick extends TareaAsincrona{
    ejecutar(): void {
        process.nextTick(()=>{
            this.mostrarDescri();
            this.infoTare();
            console.log('Tarea de la fase process.nextTick completada.');
        });
    }
}

//Clase que simula una tarea con la fase Promise
class TareaPromise extends TareaAsincrona{
    ejecutar(): Promise<string> {
        return new Promise((resolve)=>{
            this.mostrarDescri();
            resolve('Tarea de la fase Promise completada.');
        }
        )}
}

// Interfaz para definir las propiedades de un nodo en la cola de tareas
interface INodo<T>{
    tarea:T;
    siguiente:INodo<T>|null; 
}
//Definición de Nodo para la cola de tareas
class Nodo<T> implements INodo<T>{
    tarea:T;
    siguiente:Nodo<T>|null; 

    constructor(tarea:T){
        this.tarea=tarea;
        this.siguiente=null;
    }
}

//Cola FIFO para simular la encolación de tareas
class Cola<T>{
    private cabeza:INodo<T>|null;
    private cola:INodo<T>|null;

    constructor(){
        this.cabeza=null;
        this.cola=null;
    }

    //Metodo para encolar tareas
    encolar(tarea:T):void{
        const nuevoNodo =new Nodo(tarea);
        if(this.cola){
            this.cola.siguiente=nuevoNodo;
        }else{
            this.cabeza=nuevoNodo;
        }
        this.cola=nuevoNodo;
    }

    //Metodo para desencolar tareas
    desencolar():T|null{
        if(!this.cabeza) return null;
        const tarea=this.cabeza.tarea;
        this.cabeza=this.cabeza.siguiente;
        if(!this.cabeza){
            this.cola=null;
        }
        return tarea;
    }

    //Verificar si la cola está vacia
    estaVacia():boolean{
        return this.cabeza===null;
    }
}

//Definimos la clase EventLoop que simula el bucle de eventos y la gestion de tareas
class EventLoop{
    private cola:Cola<TareaAsincrona>;

    constructor(){
        this.cola=new Cola();
        
    }
    //metodo para agregar una tarea a la cola
    agregarTarea(tarea:TareaAsincrona){
        this.cola.encolar(tarea);
        console.log(`${[tarea.infoTare()]} agregada a la cola`)
    }
    ejecutarTareas(): void {
        // Priorizamos la ejecucion de la microtarea con la fase de process.nextTick
        while (!this.cola.estaVacia()) {
            const tarea = this.cola.desencolar();
            if (tarea instanceof TareaprocessNextTick) {
                tarea.ejecutar(); // Ejecutar nextTick 
            }else{
                // Para las siguientes tareas
                setTimeout(() => {
                     //Ejecución de la microtarea con la fase Promise
                    if(tarea instanceof TareaPromise){
                        tarea.ejecutar()
                            .then(result=>console.log(result))
                    }else{
                        tarea.ejecutar(); // Para las siguientes tareas
                    }
                    
                });
            }
        }
    }
}


const evento= new EventLoop();
const tarea1=new TareaprocessNextTick("Tarea1-nextTick")
const tarea2=new TareaPromise("Tarea2-Promesa")
const tarea3=new TareasetImmediate("Tarea3-setImmediate")
const tarea4=new TareasetTimeout("Tarea4-setTimeout")

evento.agregarTarea(tarea1);
evento.agregarTarea(tarea4);
evento.agregarTarea(tarea2);
evento.agregarTarea(tarea3);
//Ejecutar el event loop
evento.ejecutarTareas();