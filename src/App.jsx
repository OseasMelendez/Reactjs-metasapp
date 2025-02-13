import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Encabezamiento from './componentes/compartidos/Encabezamiento.jsx'
import Pie from './componentes/compartidos/Pie.jsx'
import Principal from './componentes/compartidos/Principal.jsx'
import Meta from './componentes/lista/Metas.jsx'

function App() {
  
  return (
    <div className='App'>
    <Encabezamiento></Encabezamiento>
    <Principal>
      <Meta></Meta>
    </Principal>
    <Pie></Pie>
    </div>
  )
}

export default App
