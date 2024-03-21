import React from 'react';
import Formulario from './Formulario';
import Contenedor from '../Elementos/Contenedor';
import ContadorFuncional from './ContadorFuncional';
import EjemploUseReducer from './EjemploUseReducer';

const App = () => {
    return ( 
      <Contenedor >
          <h1>Clases de matematicas</h1>
          <p>Bienvenido a la primer clases de matematicas, por favor registrese para pasar al examen</p>
          <Formulario  />
          <EjemploUseReducer />
          {/* <ContadorFuncional /> */}
      </Contenedor>
    );
  }
   
  export default App;