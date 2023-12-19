import React from 'react'
import estilos from './ItemList.module.css'
import { Item } from '../Item/Item'

export const ItemList = ({products}) => {
  return (
    <div className={estilos.articulos}>
        {products.map(prod => <Item key={prod.id} {...prod} />)}
    </div>
  )
}
