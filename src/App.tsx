import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

// COMPONENTS
import { MenuNavi } from './components/MenuNav'
import { MainPrincipal } from './components/MainContent'


function App() {
  

  return (
    <div className="App">
     <MenuNavi value='Cozy&reg;'/>
     <MainPrincipal />
     
    </div>
  )
}

export default App
