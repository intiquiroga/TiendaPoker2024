import React from 'react'
import { BrowserRouter,Router,Route } from 'react-router-dom'

const Otros = () => {
  return (
    <>   
    <BrowserRouter>
    <Router>
     <Route path='/otros' element = {Otros}/>
    <div>
       <h1>PROXIMAMENTE</h1>
     </div>
    </Router>
    </BrowserRouter>
 </>
  )
}

export default Otros