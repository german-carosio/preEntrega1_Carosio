import React from 'react'
import estilos from './CartWidget.module.css'

export const CartWidget = () => {
  return (
    <div>
        <button type='button' className={estilos.btnCarrito} onClick={()=> console.log('carrito')}><i className="fa-solid fa-cart-shopping"></i> <span className={estilos.cantidad}>0</span> </button>       
    </div>
  )
}
