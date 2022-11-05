import { useState } from 'react'
import Header from './componentes/header'
import Session1 from './componentes/session-1'
import Session2 from './componentes/session-2'
import Session3 from './componentes/session-3'
import Sobre from './componentes/sobre'
import Session4 from './componentes/session-4'
import Contato from './componentes/contato'

function App() {
  return (
  <>  
    <Header/>
    <Session1/>
    <Session2/>
    <Session3/>
    <Sobre/>
    <Session4/>
    <Contato/>
  </>  
  )
}

export default App
