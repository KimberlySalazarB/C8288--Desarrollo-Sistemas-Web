import React,{useState,useEffect} from "react";
import { v4 as uuidv4 } from 'uuid'; //generar identificadores únicos

/**
 * Componente para crear o editar eventos.
 * @param {Object} props - Propiedades del componente.
 * @param {Function} props.dispatch - Función dispatch para actualizar el estado global.
 * @param {Object|null} props.eventEditar - Evento que se está editando, si existe.
 * @param {Function} props.setEventEditar - Función para establecer el evento a editar.
 * @returns {JSX.Element} Elemento renderizado del formulario.
 */

const EventoFormu = ({ dispatch, eventEditar,setEventEditar }) => {
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [date, setDate] = useState('');
    const [ubicacion, setUbicacion] = useState('');

    // Efecto para cargar los datos del evento a editar
    useEffect(() => {
      if ( eventEditar) {
        setTitulo( eventEditar.titulo);
        setDescripcion( eventEditar.descripcion);
        setDate( eventEditar.date);
        setUbicacion( eventEditar.ubicacion);
      }
    }, [ eventEditar]);

    /**
     * Maneja la creación y edición de eventos.
     * @param {Event} e - Evento del formulario.
     */
    const Eventos_operaciones= (e) => {
        e.preventDefault(); // Evita la recarga de la página
        const nuevoEvento = {
            id: eventEditar ? eventEditar.id : uuidv4(), // Genera un nuevo ID único
            titulo,
            descripcion,
            date,
            ubicacion,
        };
        
        // Validación 
        if (titulo && descripcion && date && ubicacion) {
            if (eventEditar) {
                dispatch({ tipo: 'Editar_Evento', payload: nuevoEvento });
                setEventEditar(null);// Reinicia el estado de edición
            } else {
                dispatch({ tipo: 'Añadir_Evento', payload: [nuevoEvento] });
            }

            limpiarFormu();
        }
    };

    /**
     * Limpia los campos del formulario.
     */

    const limpiarFormu=()=>{
        setTitulo('');
        setDescripcion('');
        setDate('');
        setUbicacion('');
    }

    return (
        <div>
            <h2>{eventEditar ? 'Editar Evento' : 'Crear Evento'}</h2>
            <form onSubmit={Eventos_operaciones}>
                <div>
                    <label>Título:</label>
                    <input type="text" value={titulo} onChange={e => setTitulo(e.target.value)}/>
                </div>
                <div>
                    <label>Descripción:</label>
                    <textarea value={descripcion} onChange={e => setDescripcion(e.target.value)}/>
                </div>
                <div>
                    <label>Fecha:</label>
                    <input type="date" value={date} onChange={e => setDate(e.target.value)}/>
                </div>
                <div>
                    <label>Ubicación:</label>
                    <input type="text" value={ubicacion} onChange={e => setUbicacion(e.target.value)}/>
                </div>
                <button type="submit">{eventEditar ? 'Actualizar' : 'Agregar'} Evento</button>
            </form>
        </div>
    );
};


export default EventoFormu;