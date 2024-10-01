let tareas=[];
const createTask= async(name)=>{
    const id =tareas.length +1;
    const nuevatarea= {id, name, completed:false}
    tareas.push(nuevatarea);
    return nuevatarea;
}
const getTask=async()=>{
    return tareas;
}

const updateTask=(id, newName)=>{
    const tarea= tareas.find((tarea)=>tarea.id===id);
    if(tarea){
        tarea.name=newName;
        console.log(`Nuevo nombre de la tarea ${tarea.name} es ${newName}`);
    }else{
        return console.log("No existe tarea")
    }
}

const deleteTask=(id)=>{
    const index= tareas.findIndex((tarea)=>tarea.id===id);
    if(index !== -1){
        const tareaEliminada = tareas.splice(index,1);
        return tareaEliminada;
    }else{
        return console.log("Tarea no encontrada");
    }
}

export { createTask,getTask,updateTask,deleteTask};