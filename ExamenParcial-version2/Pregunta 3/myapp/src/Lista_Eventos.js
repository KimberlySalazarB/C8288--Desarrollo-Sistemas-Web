import React from "react";

/**
 * Componente para visualizar y manejar la lista de eventos.
 * @param {Object} props - Propiedades del componente.
 * @param {Array} props.eventos - Lista de eventos.
 * @param {Function} props.dispatch - Función dispatch para actualizar el estado global.
 * @param {Function} props.setEventEditar - Función para establecer el evento a editar.
 * @returns {JSX.Element} Elemento renderizado de la lista de eventos.
 */

const EventoLista=({eventos,dispatch,setEventEditar})=>{

    /**
     * Maneja la eliminación de un evento.
     * @param {string} id - ID del evento a eliminar.
     */
    const manejarEliminar = (id) => {
        dispatch({ tipo: 'Eliminar_Evento', payload: id });
    };

    /**
     * Maneja la edición de un evento. 
     * @param {Object} evento - Evento que se va a editar.
     */
    const manejarEditar = (evento) => {
        setEventEditar(evento);
    };

    return (
        <div>
            <h2>Lista de Eventos</h2>
            <ul>
                {eventos.map((evento) => (
                    <li key={evento.id}>
                    <h3>{evento.titulo}</h3>
                    <p>{evento.descripcion}</p>
                    <p>Fecha: {evento.date}</p>
                    <p>Ubicación: {evento.ubicacion}</p>
                    <button onClick={() => manejarEditar(evento)}>Editar</button>
                    <button onClick={() => manejarEliminar(evento.id)}>Eliminar</button>
                </li>
                ))}
            </ul>
        </div>
    );
};

export default EventoLista;