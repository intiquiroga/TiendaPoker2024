import React from 'react'
import ComponenteCartwidget from '../ComponenteCartwidget/ComponenteCartwidget'

const ComponenteNavbar = () => {
  return (
    <main>
      <ul>
        <li> FICHAS </li>
        <li> CARTAS</li>
        <li> ARTICULOS </li>
      </ul>
      <ComponenteCartwidget></ComponenteCartwidget> 
    </main>
  )
}

export default ComponenteNavbar