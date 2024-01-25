import React from 'react'
import { BrowserRouter,Router,Route } from 'react-router-dom'

const Cartas = () => {
  return (
    <>   
       <BrowserRouter>
       <Router>
        <Route path='/cartas' element = {Cartas}/>
       <div>
           <h2>BARAJA ESPAÑOLA</h2>
           <img src='https://cosasdepapeleria.com/141211-large_default/baraja-fournier-n1-50-cartas.jpg'/>
           <button> VER MAS </button>
        </div>
        <div>
           <h2>BARAJA INGLESA</h2>
           <img src='https://cdn1.coppel.com/images/catalog/mkp/1970/3000/19701205-1.jpg'/>
           <button> VER MAS </button>
        </div>
       </Router>
       </BrowserRouter>
   
      
    </>
  )
}

export default Cartas