import React from 'react'
import estilos from './Item.module.css'

export const Item = ({id, name, precio, img}) => {
  return (
    <div className={estilos.container}>
        <h3>{name}</h3>
        <img src={img} alt="" />
        <p>${precio}</p>
    </div>
  )
}
