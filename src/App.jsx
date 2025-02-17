import { Routes, Route } from 'react-router-dom'
import './App.css'
import Encabezamiento from './componentes/compartidos/Encabezamiento.jsx'
import Pie from './componentes/compartidos/Pie.jsx'
import Principal from './componentes/compartidos/Principal.jsx'
import Meta from './componentes/lista/Metas.jsx'
import Lista from './componentes/lista/lista.jsx'
import Detalles from './componentes/nuevo/Detalles.jsx'
import Layout from './componentes/compartidos/Layout.jsx'
import Page_404 from './componentes/compartidos/Page_404.jsx'


function App() {
  
  return (
    <Routes>
    <Route element={<Layout />}>
      <Route index element={<Lista />} />
      <Route path="*" element={<Page_404 />} />
      <Route path="lista" element={<Lista />} />
      <Route path="crear" element={<Detalles />} />
    </Route>
  </Routes>
  )
}

export default App
