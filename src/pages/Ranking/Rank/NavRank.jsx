import React from "react";
import "./styles/nav.css";

//import de las imagenes
import jiPic from "./img/jipic.png";
import jmPic from "./img/jmpic.png";
import jrPic from "./img/jrpic.png";
import wPic from "./img/worldicon.png";
import twiPic from "./img/twipic.png";

import { NavLink } from "react-router-dom";

function NavRank(){
    return(
        

        <div className="container" id="Top">
            <div className="row">
                <div className="col text-center bg-light">
                    
                    <NavLink to ="/RankJI"> <img src={jiPic} /></NavLink>
                    
                </div>
                <div className="col text-center bg-light">
                    <NavLink to ="/RankJM"> <img src={jmPic} /></NavLink>
                </div>
                <div className="col text-center bg-light">
                    <NavLink to ="/RankJR"> <img src = {jrPic} /> </NavLink>
                </div>
                <div className="col text-center bg-light">
                    <NavLink to ="/RankGlobal"> <img src = {twiPic} /> </NavLink>
                </div>
            </div>
        </div>

        
    );
}

export default NavRank;