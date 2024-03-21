import React, { useState } from 'react';
import { DivContador, BotonContador } from '../Elementos/ContadorStyles';


const ContadorFuncional = () => {
    
    const [numero, cambiarNumerito] = useState(0)

    const incrementar = (cantidad) => {
        cambiarNumerito(numero + cantidad)
    }

    const disminuir = (cantidad) => {
        cambiarNumerito(numero - cantidad)
    }
    
    return (
     <div>
        <h1>Contador: {numero} </h1>
        <DivContador>
            <BotonContador onClick={() => incrementar(3)}>Incrementar</BotonContador>
            <BotonContador onClick={() =>  disminuir(1)}>Restar</BotonContador>
        </DivContador>
    </div>

    );
}
 
export default ContadorFuncional;