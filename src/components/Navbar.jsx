import React from 'react'
import "../Style/Navbar.css"

const Navbar = () => {
  return (
    <div className="nav-container">
        <nav className="navbar">
        <h1 className="navbar-logo">Shop.</h1>
        <h1 className='Categoria'>Categoria</h1>
        <h1 className='Categoria2'>Vistas Previas</h1>
        <h1 className='Categoria3'>Preguntas</h1>
        <h2 className="verCarrito">🛒</h2>
        </nav>
    </div>
  )
}

export default Navbar