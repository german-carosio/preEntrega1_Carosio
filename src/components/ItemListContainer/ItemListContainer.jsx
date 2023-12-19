import React, { useEffect, useState } from 'react'
import estilos from './ItemListContainer.module.css'
import { Item } from '../Item/Item'
import {getProducts} from '../../AsyncMock'
import { ItemList } from '../ItemList/ItemList'

export const ItemListContainer = ({titulo}) => {

  const [products, setProduts] = useState([])

  useEffect(() => {
    getProducts()
    .then(response => {
      setProduts(response)
    })
    .catch(error => {
      console.error(error)
    })
  }, [])

  return (
    <div className={estilos.container}>
        <h2>{titulo}</h2>
        <div className={estilos.articulos}>
        <ItemList products={products}  />
        </div>
        
    </div>
  )
}
