import React from 'react';
import ReactDOM from 'react-dom';

const mensaje = "abelito";
const color = "green";
const sesion = true;
const pais = "";
const amigos = ["alex","eli","silvia","oscar","kary"];

//dentro de jsx las condicionales son diferentes ? significa entonces : significa "else"
//para la linea de pais se && como condicional de si existe se muestra osea si existe algun pais entonces se muestra 
//pais && ----------
//para el map(amigo,index) podemos dar index como parametro de numeracion 

//construyendo una componete que no es otra cosa que una funcion

const Usuario = ()=>{

return(
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
);

};
//el JSX
const JSX = (

  <div>
      {sesion === true ? 
      <>
        <Usuario />
        <Usuario />
        <Usuario />
        <Usuario />
        <Usuario />
      
      </>
      :
      <p>NO!!! has iniciado sesion</p>}
      
  </div>
);



ReactDOM.render( JSX , document.getElementById('root')
);

/*ojo en la linea 26
<Usuario />
{amigos.map((amigo,index)=> {
              return <li key={index}>{amigo}</li>
              })
              
TAMBIEN SE PUEDE PONER DE LA SIGUIENTE MANERA SIN EL RETURN
{amigos.map((amigo,index) => <li key={index}>{amigo}</li>)}

*/