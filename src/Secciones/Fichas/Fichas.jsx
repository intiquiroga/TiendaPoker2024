import React from 'react'
import { BrowserRouter,Route, Router } from 'react-router-dom'
const Fichas = () => {
  return (
    <>   
    <BrowserRouter>
    <Router>
     <Route path='/fichas' element = {Fichas}/>
    <div>
        <h2>FICHAS TRADICINALES</h2>
        <img src='https://img.freepik.com/vector-gratis/nueve-fichas-poquer-coloridas_1308-2954.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699833600&semt=ais'/>
        <button> VER MAS </button>
     </div>
     <div>
        <h2>FICHAS PERSONALIZADAS</h2>
        <img src='https://cdn.ready-market.com.tw/24cfa4d4/Templates/pic/img-poker-chips-20230728.jpg?v=a13a2772'/>
        <button> VER MAS </button>
     </div>
    </Router>
    </BrowserRouter>
 </>
  )
}

export default Fichas