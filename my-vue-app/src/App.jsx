import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Menu from './components/Menu.jsx'

export const App = () => {

  return (
    <>
      <Menu/>
      <br/>
      <div className={style[ wrapPrincipal]}>
        <h1>Hello Word</h1>
        <p>Meu Site com React</p>
      </div>   
    
   </>
  )
}
