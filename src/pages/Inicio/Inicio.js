import React from 'react';
import './Inicio.css'; 
import { Link } from "react-router-dom";

import jrPic from './img/jrpic.png';
import jmPic from './img/jmpic.png';
import jiPic from './img/jipic.png';
import background from './img/background-inicio.jpeg';


function Inicio ()
{
   return (

      <div className="container">
         <div className="divplane-inicio">
            <h1 className = "title-inicio">Job Relations</h1>
            <p className = "text-inicio">
               JR enfatiza el respeto por las personas, por lo que
               entrena supervisores a lidiar con problemas y a cómo
               prevenirlos.
            </p>

            <p className = "img-inicio">
               <img  className = "jpic-inicio" src = {jrPic} />
            </p>
      
         </div>
         
         <div className="divplane-inicio">
            <h1 className = "title-inicio">Job Methods</h1>
            <p className = "text-inicio">
               JM se enfoca en mejorar las tareas habituales de los 
               supervisores, al utilizar de mejor manera sus recursos 
               ya disponibles.
            </p>

            <p className = "img-inicio">
               <img className = "jpic-inicio" src = {jmPic} />
            </p>

         </div>
         
         <div className="divplane-inicio">
         <h1 className = "title-inicio">Job Instr.</h1>
            <p className = "text-inicio">
               JI entrena a los supervisores para desarrollar su trabajo 
               de la mejor manera posible para que, a su vez, ellos 
               entrenen a otros.
            </p>

            <p className = "img-inicio">
               <img className = "jpic-inicio" src = {jiPic} />
            </p>
            
         </div>
      </div>

   );
}

export default Inicio;