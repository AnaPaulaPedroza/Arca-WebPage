import React from "react";
import RankJI from "../Ranking/Rank/RankJI"
import RankJM from "../Ranking/Rank/RankJM";
import RankJR from "../Ranking/Rank/RankJR";
import RankGlobal from "../Ranking/Rank/RankGlobal";
import upIcon from "./img/uparrowicon.png";

import NavRank from "../Ranking/Rank/NavRank";

import "./styles/Ranking.css";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; //se usa para la navegación de los filtros de medallas 



function Ranking(){
    return(
        <div className="main_content" style={{fontFamily:"hoefler text"}}>
            <Router>
                <div className="shadow-lg" >
                    <div className="card">
                        <div className="card-header">
                            <h1 className="card-title text-center">Ranking</h1>
                        </div>
                        <div className="card-body">
                            <NavRank />
                        </div>
                    </div>
        

                    <div className="card text-center">
                        <Routes>
                            <Route path="/RankJI" element={<RankJI />} />
                            <Route path="/RankJM" element={<RankJM />} />
                            <Route path="/RankJR" element={<RankJR />} />
                            <Route path="/RankGlobal" element={<RankGlobal />} />

                        </Routes>        
                    </div>


                </div>
                
            </Router>
            
            <a href="#Top"><img src = {upIcon} /></a>

        </div>
    );
}




export default Ranking;
