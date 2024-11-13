import { useState } from "react";
import Buscador from "./components/Buscador";
import Crear from "./components/Crear";
import Listado from "./components/Listado";

function App() {
  
  const [listadoState, setListadoState] = useState([])

  return (
    <div className="layout">

      {/* <!-- Cabezera --> */}
      {/* Componente Estatico */}
      <header className="header">
        <h1>Pagina</h1>
        <div className="logo">
          <div className="play">

          </div>
        </div>
      </header>

      {/* <!-- Barra de Navegacion --> */}
      {/* Componente Estatico */}
      <nav className="nav">
        <ul>
          <li><a href="/#">Inicio</a></li>
          <li><a href="/#">Peliculas</a></li>
          <li><a href="/#">blog</a></li>
          <li><a href="/#">Contact</a></li>
        </ul>
      </nav>

      {/* <!-- Contenido Principal --> */}

      <section id="content" className="content">

        {/* Lista de las Peliclas */}
        {/* Componente Dinamico: Lista  */}
        {/* Actualizar estados */}
        <Listado listadoState={listadoState} setListadoState={setListadoState}></Listado>

      </section>

      {/* Barra lateral */}
      <aside className="lateral">

        {/* Componente Dinamico: Buscador */}
        <Buscador listadoState={listadoState} setListadoState={setListadoState}/>

        {/* Componente Dinamico: Crear Peliculas */}
        <Crear setListadoState={setListadoState}/>

      </aside>
      {/* <!-- Pie de Pagina --> */}
      <footer className="footer">
        &copy; Mondongo
      </footer>
    </div>
  );
}

export default App;
