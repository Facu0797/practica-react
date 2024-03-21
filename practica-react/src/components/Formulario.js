import React, {useState} from 'react';
import Boton from '../Elementos/Boton';
import DatosUsuario from './DatosUsuarioi';



const Formulario = () => {
    
    const [formulario, setFormulario] = useState(false);

    const abrirFormulario = () => {
        setFormulario(true)
    }

    return (
        <div>
            <Boton onClick={abrirFormulario}>Ingrese sus datos</Boton>
            {formulario === true && <DatosUsuario />}
        </div>
      
        
        
    );
}
 

export default Formulario;
