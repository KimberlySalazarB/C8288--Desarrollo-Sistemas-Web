import React from 'react';
import { useState,useEffect} from 'react';


function App() {

  const[evento,setEvento]=useState([[
    {titulo:"name",descripcion:"descripcion", fecha:Date.now()}
  ]]);

  const [data,setData]=useState([]);
  //Clase de operaciones de los eventos
  class OperacionesEventos{
    //Editar evento
    editarEvento=(titulo)=>{
        evento.titulo=titulo;
        setEvento(evento.titulo);
      }
      //Eliminando un evento
    eliminar=()=>{
        delete evento[1];
      }
    
      //Crear un evento
    crearevento=(nuevo_evento)=>{
        setEvento(nuevo_evento);
        
      }
  }

  //Simulacion de una llamada a una API

  const llamadaApi=(url)=>{
    useEffect(()=>{ 
    setTimeout(()=>{
        const data={id:1,name:"Lola"}
        setData(data.name)
    },1000)
    },[url]);

    return[data];
  }
  


  return (
    <div>
      <ul>[evento]</ul>
    </div>
  );
}

export default App;
