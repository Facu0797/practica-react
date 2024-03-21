    import React, { useState } from 'react';
    import Formulario from './Formulario';
import Boton from '../Elementos/Boton';
    
    const DatosUsuario = () => {
        
        const [usuario, setUsuario] = useState("");

        const onChange = (e) => {
            setUsuario(e.target.value)
        }

        const onSubmit = (e) => {
            e.preventDefault()
            
            if (usuario) {
                alert("Bienvenido " + usuario)
            }
        }

        return ( 
            <div>
                { <Formulario /> && 
                    <form action="" onSubmit={onSubmit}>
                        <label htmlFor="usuario"></label>
                        <input type="text" id='usuario' value={usuario} onChange={onChange} />
                        <br />
                        <br />
                        <Boton onClick={onSubmit} type='submit'>Enviar datos</Boton>
                    </form>
                }
            </div>
        );
    }
     
    export default DatosUsuario;