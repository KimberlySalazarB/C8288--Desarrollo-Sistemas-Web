import { createTask,getTask,updateTask,deleteTask } from "./task.js";

import express from "express";
const server = express();
const port = 3000;

server.use(express.json());
server.get("/tareas", async (req, res) => {
    try{
        const tareas=await getTask();
        res.json(tareas);
    }catch(error){
        console.log("Error: ", error);
        res.status(500).json({ message: "Error al obtener las tareas" });
    }
});

server.post("/tareas", async (req, res) => {
    try{
        const {name}=req.body;
        const nuevatarea=await createTask(name);
        console.log("Nueva tarea agregada: ", nuevatarea)
    }catch(error){
        console.log("Error: ", error);
        res.status(500).json({ message: "Error al crear la tarea" });
    }
});

server.put("/tareas/:id", async (req, res) => {
    try{
        const {id}=req.params;
        const {name}=req.body;
        const tareaActualizada=await updateTask(parseInt(id),name);
        if (tareaActualizada){
            res.json(tareaActualizada);
        }else{
            res.status(404).json({ message: "Tarea no encontrada" });
        }
    }catch(error){
        console.log("Error: ", error);
        res.status(500).json({ message: "Error al actualizar la tarea" });
    }
});

server.delete("/tareas/:id", async (req, res) => {
    try{
        const {id}=req.params;
        const tareaEliminada= await deleteTask(parseInt(id));
        if (tareaEliminada) {
            res.json(tareaEliminada); // Respuesta con la tarea eliminada
        } else {
            res.status(404).json({ message: "Tarea no encontrada" });
        }
    }catch(error){
        console.log("Error: ", error);
        res.status(500).json({ message: "Error al eliminar la tarea" });
    }
});

server.listen(port, function () {
    console.log("Listening on " + port);
   });