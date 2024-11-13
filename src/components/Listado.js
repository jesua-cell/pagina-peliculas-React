import React, { useEffect, useState } from 'react'
import Editar from './Editar'

const Listado = ({ listadoState, setListadoState }) => {

    //Mostrar por pantalla
    // const [listadoState, setListadoState] = useState([])

    //Funcion de Editar
    const [editar, setEditar] = useState(0)

    //El useEffect se usara cuando se ejecute conseguirPeliculas() para luego modificarse 
    useEffect(() => {
        console.log("Componente del listado de Peliculas cargado")
        conseguirPeliculas()
    }, [])

    //Buscar las peliculas (archivos) desde el LocalStorage
    const conseguirPeliculas = () => {
        let peliculas = JSON.parse(localStorage.getItem("pelis"))
        setListadoState(peliculas)
        return peliculas
    }

    //funcion para Borrar
    const borrarPeli = (id) => {

        //Obtener las peliculas almacenadas
        let pelis_guardadas = conseguirPeliculas()
        //Filtrar la(s) pelicula(s) del array para borrar la que no quiero; 
        let nuevo_array_pelis = pelis_guardadas.filter(peli => peli.id !== parseInt(id))
        //Actualizar el estado del Listado
        setListadoState(nuevo_array_pelis)
        //Actualizar los datos del LocalStorage
        localStorage.setItem('pelis', JSON.stringify(nuevo_array_pelis))
    }

    return (
        <>
            {listadoState != null ? listadoState.map(peli => {
                return (
                    <article key={peli.id} className="peli-item">
                        <h3 className="title">{peli.titulo}</h3>
                        <p className="description">{peli.descripcion}</p>

                        <button className="edit" onClick={() => setEditar(peli.id)}>Editar</button>
                        <button className="delete" onClick={() => borrarPeli(peli.id)}>Borrar</button>

                        {/* Generar un Formulario para Editar */}
                        {editar === peli.id && (
                            <Editar peli={peli}
                            conseguirPeliculas={conseguirPeliculas}
                            setEditar={setEditar}
                            setListadoState={setListadoState}
                            /> /**Prop del objeto */
                            
                        )}

                    </article>
                )
            }) : <h2>No hay Peliculas</h2>
            }
        </>
    )
}

export default Listado
