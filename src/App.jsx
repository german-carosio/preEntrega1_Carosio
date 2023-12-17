import { useState } from 'react'
import './App.css'
import { NavBar } from './components/NavBar/NavBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemCount } from './components/ItemCount/ItemCount'

function App() {

  return (
    <>  
      <div className='cuelpo'>
      <NavBar />
      <ItemListContainer greeting={'Bienvenidos'} />
      <ItemCount initial={1} stock={10} consola={(cantidad)=> console.log('Cantidad agregada:', cantidad)}  />
      </div>              
    </>
  )
}

export default App
