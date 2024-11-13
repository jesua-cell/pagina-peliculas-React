import React, { useState } from 'react'

const Buscador = ({ listadoState, setListadoState }) => {

    const [busquedad, setBusquedad] = useState('')
    //No econtrado
    const [noEcontrado, setNoEcontrado] = useState(false)

    const buscarPeli = (e) => {

        // Crear estado y actualizarlo
        // Listado completo de las peliculas
        setBusquedad(e.target.value)


        // Filtrar para buscar coincidencias
        let pelis_encontradas = listadoState.filter(peli => {
            return peli.titulo.toLowerCase().includes(busquedad.toLocaleLowerCase())
        })

        if (busquedad.length <= 1 || pelis_encontradas <= 0) {
            pelis_encontradas = JSON.parse(localStorage.getItem("pelis"))
            setNoEcontrado(true)
        } else {
            setNoEcontrado(false)
        }

        // Actualizar estado del listado principal con lo filtrado
        setListadoState(pelis_encontradas)
    }

    return (
        <div className="search">
            <h3 className="title">Buscador: {busquedad}</h3>
            {(noEcontrado === true && busquedad.length > 1) && (
                <span className='no-encontrado'>No se ha encontrado ninguna coincidencia</span>
            )}
            <form className='buscador_edit'>
                <input
                    type="text"
                    id='search_field'
                    name='busquedad'
                    autoComplete='off'
                    value={busquedad}
                    onChange={buscarPeli}
                />
                <button id='search'>Buscar</button>
            </form>
        </div>
    )
}

export default Buscador
