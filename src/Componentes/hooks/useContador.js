import { useState } from "react";

export const useContador =(valorInicial,valorMaximo) => {
    const [contador,setContador] = useState ();

    const incrementar = () => {
        if (contador < valorMaximo) {
            setContador (contador+1);

        }
    }
    const decrementar = () => {

        if (condaror > valorInicial) {
            setContador (contador - 1);
        }
    }
}