import {React, useReducer } from "react";
import { BotonContador, DivContador } from "../Elementos/ContadorStyles";

const contadorInicial = {contador: 0};


const reducer = (estado, accion) => {
    switch (accion.tipo) {
        
        case "INCREMENTAR" :
            return {contador: estado.contador + 1}
        case "DISMINUIR" : 
            return {contador: estado.contador - 1}
        case "REINICIAR" :
            return {contador: 0}
        default:
            return estado
    }
    
}

const EjemploUseReducer = () => {

    const [estado, dispatch] = useReducer(reducer, contadorInicial);

    return ( 
        <div>
            <h1>Contador: {estado.contador} </h1>
            <DivContador>
                <BotonContador onClick={() => dispatch({tipo: "INCREMENTAR"})}>Incrementar</BotonContador>
                <BotonContador onClick={() => dispatch({tipo: "DISMINUIR"})}>Restar</BotonContador>
                <BotonContador onClick={() => dispatch({tipo: "REINICIAR"})}>Reiniciar</BotonContador>
            </DivContador>
        </div>
    );
}
 
export default EjemploUseReducer;