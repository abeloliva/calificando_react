import React from 'react';
import ReactDOM from 'react-dom';

const mensaje = "abelito";
const color = "blue";
const sesion = true;
const pais = "";
const amigos = ["alex","eli","silvia","oscar","kary","zeno","china","abel"];

//dentro de jsx las condicionales son diferentes ? significa entonces : significa "else"
//para la linea de pais se && como condicional de si existe se muestra osea si existe algun pais entonces se muestra 
//pais && ----------
//para el map(amigo,index) podemos dar index como parametro de numeracion 

const JSX = (

  <div>
      {sesion === true ? 
      <div>
      <p>has iniciado sesion</p>
      <h1 className = "titulo" style ={{color : color}}>!!!hola!!! {mensaje} </h1> 
      <p>tu lista de amigos:</p>
      {pais && <p>yo soy de: {pais}</p>}
      <ul>
          {amigos.map((amigo,index)=> {
              return <li key={index}>{amigo}</li>
          })
          }
      </ul>
      </div>
      :
      <p>NO!!! has iniciado sesion</p>}
      
  </div>
);



ReactDOM.render( JSX , document.getElementById('root')
);

/*ReactDOM.render(
  <React.StrictMode>
    <h1>hola mundo!!!! </h1>
  </React.StrictMode>,
  document.getElementById('root')
);
*/
