import React from 'react'
import estilos from './Item.module.css'

export const Item = ({name, img}) => {
  return (
    <div className={estilos.container}>
        <h3>{name}</h3>
        <img src={img} alt="" />
    </div>
  )
}
