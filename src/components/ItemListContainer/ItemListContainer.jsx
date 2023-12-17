import React from 'react'
import estilos from './ItemListContainer.module.css'
import { Item } from '../Item/Item'

export const ItemListContainer = ({greeting}) => {
  return (
    <div className={estilos.container}>
        <h1>{greeting}</h1>
        <div className={estilos.articulos}>
        <Item name={'Producto 1'} img={'https://www.liliana.com.ar/wp-content/uploads/2023/08/VP20P_web_01.jpg'} />
        <Item name={'Producto 2'} img={'https://www.liliana.com.ar/wp-content/uploads/2022/08/VTHD10R_web_01-1.jpg'} />
        <Item name={'Producto 3'} img={'https://www.liliana.com.ar/wp-content/uploads/2022/08/VPHD16G_web_01.jpg'}/>
        </div>
        
    </div>
  )
}
