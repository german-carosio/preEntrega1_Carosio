import React from 'react'
import estilos from './Navbar.module.css'
import { CartWidget } from '../CartWidget/CartWidget'

export const NavBar = () => {
  return (
    <nav className={estilos.nav}>
      <h1 className={estilos.logo}>Ecommerce</h1>
      <ul className={estilos.menu}>
        <li className={estilos.menuItem}><a className={estilos.menuLink} href="#"> Categoria 1</a></li>
        <li className={estilos.menuItem}><a className={estilos.menuLink} href="#"> Categoria 2 </a></li>
        <li className={estilos.menuItem}><a className={estilos.menuLink} href="#"> Categoria 3 </a></li>
      </ul>

      <CartWidget />
    </nav>
    
  )
}
