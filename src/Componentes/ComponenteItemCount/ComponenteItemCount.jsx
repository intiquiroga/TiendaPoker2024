import { useState,useEffect } from "react"

const CommponenteItemCount = () => {
    const Contador = () => {

    const [contador,setContador] = useState (1);

    useEffect ( () => {
      document.title = `Contador $ {contador}`
    },[contador])
  

    const aumentarContador = () =>{
      if (contador<10) {
        setContador (contador +1);
      }
    }
    
    const disminuirContador = () => {
      if (contador >1) {
        setContador (contador -1);
      }
    }
  }

  return (
    <div>
      <h2>Contador </h2>
      <button onClick={disminuirContador}> - </button>
      <p> {contador} </p>
      <button onClick={aumentarContador}> + </button>
    </div>
  )
}

export default CommponenteItemCount ;