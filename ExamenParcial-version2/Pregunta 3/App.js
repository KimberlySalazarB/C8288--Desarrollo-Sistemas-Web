import React,{useReducer,useState,useEffect} from 'react';
import EventoFormu from './Crear_Editar_Evento';
import EventoLista from './Lista_Eventos';

import './App.css';

/**
 * Reducer para manejar el estado de eventos.
 * 
 * @param {Array} state - Estado actual de los eventos.
 * @param {Object} action - Objeto de acción que contiene el tipo de acción y la carga útil.
 * @returns {Array} - Nuevo estado de los eventos.
 */

const eventoReducer = (state, action) => {
  switch (action.tipo) {
      case 'Añadir_Evento':
          alert("Evento agregado exitosamente.");
          // Asegurarse de no agregar duplicados
          const eventosExistentesIds = new Set(state.map(evento => evento.id));
          const nuevosEventos = action.payload.filter(evento => !eventosExistentesIds.has(evento.id));
          return [...state, ...nuevosEventos];

      case 'Editar_Evento':
          alert("Evento editado exitosamente.");
          return state.map(evento => 
              evento.id === action.payload.id ? action.payload : evento
          );
      case 'Eliminar_Evento':
          alert("Evento eliminado exitosamente.");
          return state.filter(evento => evento.id !== action.payload);
      default:
          return state;
  }
};

// Componente funcional App
const App = () => {
  const [eventos, dispatch] = useReducer(eventoReducer, []);
  const [eventEditar, setEventEditar] = useState(null);
  // Simulación de una operación asíncrona 
  useEffect(() => {
    const fetchEvents = () => {
        return new Promise((resolve) => {
            setTimeout(() => resolve([
                { id: 1, titulo: "Concierto", descripcion: "Concierto de cumbia", date: "2024-10-21", ubicacion: "Estadio Nacional" },
                { id: 2, titulo: "Clases de IA", descripcion: "Aprende IA generativa", date: "2024-10-25", ubicacion: "UPCH" },
            ]), 1000);
        });
    };

    fetchEvents()
        .then((events) => dispatch({ tipo: 'Añadir_Evento', payload: events }))
        .catch((error) => console.error("Error cargando eventos", error));
  }, []);
  // JSX -> Elemento renderizado de la aplicación.
  return (
      <div>
        <h1>Gestión de Eventos</h1>
          <EventoFormu dispatch={dispatch} eventEditar={eventEditar} setEventEditar={setEventEditar}/>
          <EventoLista eventos={eventos} dispatch={dispatch} setEventEditar={setEventEditar} />
      </div>
  );
};

export default App;
