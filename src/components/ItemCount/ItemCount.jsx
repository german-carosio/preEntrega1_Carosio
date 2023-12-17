import React, { useState } from 'react'
import estilos from './ItemCount.module.css'


export const ItemCount = ({initial, stock, consola}) => {

  const [cantidad, setCantidad] = useState(initial)

  const increment = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1)
    }
  }

  const decrement = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1)
    }
  }

  return (
    <div className={estilos.container}>

      <div className={estilos.contador}>
        <button className={estilos.boton} onClick={decrement}> - </button>
        <p className={estilos.boton}>{cantidad}</p>
        <button className={estilos.boton} onClick={increment}> + </button>
      </div>
      
      <button className='btn' onClick={()=> consola(cantidad)} disabled={!stock}>Agregar al carrito</button>

    </div>
  )
}
