import React from 'react';
import { useState,useEffect } from 'react';


function App() {
  const [data,setData]=useState([]);

  function dato(){
    const datos=Math.random()*20;
    setData(datos);
  }
  let n=0;
  //Generando datos aleatoriamente
  while(n>20){
      dato()
      n++;
  }

  
  useEffect(()=>{
    //Filtro de los datos
    setInterval(()=>{
      setData(data.forEach((item)=>item>3));
      data[1]=10;
      setData(data[1])

    })
  })

  return (
    <div>
      <p>[data]</p>
    </div>
  );
}

export default App;
