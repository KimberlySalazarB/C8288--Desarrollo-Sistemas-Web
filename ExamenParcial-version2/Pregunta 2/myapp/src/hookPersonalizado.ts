import { useMemo } from "react";

type Valores={
    id:string,
    value:number,
  }
//Hook personalizado para filtrar datos por caracteres del id
export function useFiltro(data:Array<Valores>,filtro:string){
    return useMemo(()=>{
        return data.filter(item=>item.id.includes(filtro));
    },[data,filtro]);
}