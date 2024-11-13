import React, { useState } from 'react'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage'

const Crear = ({setListadoState}) => {

    const tituloComponente = "Añadir Peliculas"

    //Estado del Componente
    const [peliState, setPeliState] = useState({
        titulo: '',
        descripcion: ''
    })

    //Desestructuracion del objeto "peliState"
    const { titulo, descripcion } = peliState

    const conseguirDatosForm = e => {

        // Prevenir el funcionamiento por defecto de un formulario
        e.preventDefault()

        //Conseguir Datos del Formulario
        let target = e.target
        let titulo = target.titulo.value
        let descripcion = target.descripcion.value

        //Crear objeto: Pelicula
        let peli = {
            id: new Date().getTime(),
            titulo,
            descripcion
        }

        //Estado nuevo del objeto "peli"
        //Estado guardado
        setPeliState(peli)
        console.log(peliState)

        //Actualizar el estado del listado principal 
        setListadoState(elementos => {
            return [...elementos, peli]
        })

        //Guardar en el LocalStorage
        GuardarEnStorage("pelis", peli)
    }



    return (
        <div className="add">
            <h3 className="title">{tituloComponente}</h3>
            <strong>
                {(titulo && descripcion) && "Pelicula Creada: " + titulo}
            </strong>
            <form onSubmit={conseguirDatosForm}>
                <input
                    type="text"
                    id="titulo"
                    name='titulo'
                    placeholder="Titulo" />
                <textarea
                    id="descripcion"
                    name='descripcion'
                    placeholder="Descripcion"></textarea>
                <input
                    type="submit"
                    id="save"
                    value="Guardar" />
            </form>
        </div>
    )
}

export default Crear
