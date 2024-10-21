import React,{useState,useEffect,useCallback,useRef, useReducer} from 'react';
import './App.css';
import { useFiltro } from './hookPersonalizado';

//Tipo Valores representa la estructura de los datos(id y valor)
type Valores={
  id:string,
  value:number,
}
//Interfaz Data representa la estructura del estado global que contiene los datos
interface Data{
  data:Array<Valores>;
}

//Definir una accion para useReducer
//En este caso, la acción es de tipo actualizar y en payload con los nuevos valores
type DataAccion={
  type:'Actualizar';
  payload:Array<Valores>
}

//Se define la siguiente función para manejar el estado global 
//La acción actualizar añade nuevos datos y mantiene solo los ultimos 50 elementos en el estado
const dataReducer=(estado:Data,accion:DataAccion):Data=>{
  switch(accion.type){
    case 'Actualizar':
      const nuevosDatos = [...estado.data, ...accion.payload];
      return { ...estado, data: nuevosDatos.slice(-50) }; //Mantener solo los ultimos 50 elementos
    default:
      return estado;
  }
}

//Estado inicial para useReducer
const Inicial:Data={
  data:[]
}
/*
 * Definimos el componente App
 * @hook {useReducer} ->para manejar el estado global
 * @hook {useState} ->para manejar el valor actual del filtro
 * @hook {useRef} -> para referenciar elementos del DOM directamente (input de filtro, nuevo ID, nuevo valor)
 * @tipo {HTMLInputElement} --> representa a un elemento que en este caso es <input> del DOM.Permiteindo acceder a las propiedades como value
 * @returns JSX
 */
function App() {
  const[estado,dispatch]=useReducer(dataReducer,Inicial);
  const[filtro,setFiltro]=useState('');
  const entradaRef=useRef<HTMLInputElement>(null); 
  const nuevoRef=useRef<HTMLInputElement>(null);
  const nuevoValorRef=useRef<HTMLInputElement>(null);

  //Filtramos datos usando el hook personalizado 'useFiltro'
  const filtrarData=useFiltro(estado.data,filtro);

  //Usamos useCallback para actualizar el valor del filtro
  const actualizarFiltro=useCallback(()=>{
    if(entradaRef.current){
      setFiltro(entradaRef.current.value); // Establece el filtro con el valor del input
    }
  },[])

  //Usamos useCallback para simular una actualizacion de los datos manualmente (cuando el usuario introduce ID y valor)
  const agregarDatos = useCallback(() => {
    if (nuevoRef.current && nuevoValorRef.current) {
      //Se crea un objeto que contenga las propiedades de nuevo dato se esta actualizando
      const nuevoDato: Valores = {
        id: nuevoRef.current.value,
        value: parseInt(nuevoValorRef.current.value, 10)
      };
      dispatch({ type: 'Actualizar', payload: [nuevoDato] }); // Añadir el nuevo dato
      nuevoRef.current.value = ''; // Limpiar el campo de ID
      nuevoValorRef.current.value = ''; // Limpiar el campo de valor
    }
  }, [dispatch]);

  //Simula la llegada de los datos actualizados en tiempo real en un itervalo de cada 3 segundos
  useEffect(() => {
    const intervalo = setInterval(() => {
      //Se muestran cada 5 datos aleatorios
      const randomData: Array<Valores> = Array.from({ length: 5 }, () => ({
        id: Math.random().toString(36).substring(2, 5), // id: es alfanumerico
        value: Math.floor(Math.random() * 100) //value: va tener entre valores de 0 a 100
      }));
      //Actualiza el estado con los datos generados
      dispatch({ type: 'Actualizar', payload: randomData });
    }, 3000); // Actualiza cada 3 segundos

    //Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalo);
  }, [dispatch]);

   // Mostrar los logs del ciclo de vida
  useEffect(()=>{
    try{
      //Muestra los datos actuales en la consola
      console.log('Datos actualizado:', estado.data);
    }catch(error){
      console.error(`Error al actualizar los datos:`,error)
    }
    // Se ejecuta cada vez que los datos cambian
  },[estado.data]);
  
  return (
    <div className="App">
    <h1>Tablero de control en Tiempo real</h1>
    <p>Filtrando data</p>
    <input
      ref={entradaRef} //Referencia al campo de entrada
      type="text"
      onChange={actualizarFiltro} // Actualizar el filtro cuando cambie el valor
    />
    <div>
        <h3>Actualizar</h3>
        <p>ID</p>
        <input
          ref={nuevoRef} //Referencia al campo nuevo
          type="text"
        />
        <p>Valor</p>
        <input
          ref={nuevoValorRef}
          type="number"
        />
        <button onClick={agregarDatos}>Agregar Datos</button> 
      </div>
    <ul>
      {filtrarData.length === 0 ? (
        <li>No se encontraron datos</li> // Mensaje si no hay datos que coincidan con el filtro
      ) : (
        filtrarData.map((item) => (
          <li key={item.id}>{item.id}: {item.value}</li>// Mostrar los datos filtrados
        ))
      )}
    </ul>
  </div>
    );
  
}

export default App;
