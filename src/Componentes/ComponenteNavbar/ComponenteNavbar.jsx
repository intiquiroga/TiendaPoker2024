
import ComponenteCartwidget from '../ComponenteCartwidget/ComponenteCartwidget';
import ItemCount from '../ComponenteItemCount/ComponenteItemCount';
import { BrowserRouter,Route,Routes,NavLink,Link } from 'react-router-dom';


const ComponenteNavbar = () => {
  return (
    <main className='nav'>
      <BrowserRouter> 
      <Routes>
      <ul >
        <li><Link to= {`/fichas`}>FICHAS </Link> </li>
        <li><Link to= {`/cartas`}>CARTAS </Link> </li>
        <li><Link to= {`/otros`}>OTROS </Link> </li>
      </ul>
      <ComponenteCartwidget></ComponenteCartwidget> 
      <CommponenteItemCount></CommponenteItemCount>
      </Routes>
      </BrowserRouter>
    </main>
  )
}

export default ComponenteNavbar