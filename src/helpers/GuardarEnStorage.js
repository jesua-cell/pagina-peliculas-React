export const GuardarEnStorage = (clave, elemento) => {

    //Conseguir los elementos que ya existen en el LocalStorage
    let elementos = JSON.parse(localStorage.getItem("pelis"))
    console.log(elementos)

    //Comprobar si es un Array
    if (Array.isArray(elementos)) {
        //Añadir dentro del Array un elemento nuevo
        elementos.push(elemento)  /**Insertar un elemento nuevo al [] */
    } else {
        //Crear un array con la nueva pelicula
        elementos = [elemento]
    }

    //Guardar en el LocalStorage
    localStorage.setItem("pelis", JSON.stringify(elementos))

    //Devolver objeto
    return elemento
}

