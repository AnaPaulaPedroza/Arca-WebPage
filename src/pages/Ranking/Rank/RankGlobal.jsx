import React from "react";
import "./styles/table.css";

//import de imagenes
import medBronce from "./img/medallabronce.png";
import medPlata from "./img/medallaplata.png";
import medOro from "./img/medallaoro.png";
import cand from "./img/candado.png";


function RankGlobal(){
    return(
        <div className="table-wrapper-scroll-y my-custom-scrollbar">
            
            <table className="table table-striped table-bordered mb-0" width="100%">
                
                <thead>
                    <tr>
                        <th scope="col">Posicion</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Planta</th>
                        <th scope="col">Puntuacion</th>
                        <th scope="col">Medalla</th>
                    </tr>
                </thead>
                <tbody >
                    <tr>
                        <th scope="row">1</th>
                        <td>Leonardo Mojica</td>
                        <td>Gotham</td>
                        <td>500</td>
                        <td><img src = {medOro} /></td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Leopoldo Maximus</td>
                        <td>Monterrey</td>
                        <td>200</td>
                        <td><img src={medOro} /></td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry (solo larry)</td>
                        <td>Gotham</td>
                        <td>199</td>
                        <td><img src={medOro} /></td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Marco Antonio</td>
                        <td>Springfield</td>
                        <td>40</td>
                        <td><img src={medPlata} /></td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <td>Jacob Donald</td>
                        <td>Leon</td>
                        <td>30</td>
                        <td><img src={medPlata} /></td>
                    </tr>
                    <tr>
                        <th scope="row">6</th>
                        <td>Miguel Raton</td>
                        <td>Orlando</td>
                        <td>20</td>
                        <td><img src={medBronce} /></td>
                    </tr>
                    <tr>
                        <th scope="row">7</th>
                        <td>Sr.Macias</td>
                        <td>Tigre</td>
                        <td>11</td>
                        <td><img src={medBronce} /></td>
                    </tr>
                    <tr>
                        <th scope="row">8</th>
                        <td>Betabel</td>
                        <td>Suculencias</td>
                        <td>10</td>
                        <td><img src={cand} /></td>
                    </tr>
                    <tr>
                        <th scope="row">9</th>
                        <td>EmiNenm</td>
                        <td>Florida</td>
                        <td>6</td>
                        <td><img src={cand} /></td>
                    </tr>
                    <tr>
                        <th scope="row">10</th>
                        <td>Emanem</td>
                        <td>LA</td>
                        <td>5</td>
                        <td><img src={cand} /></td>
                    </tr>
                    <tr>
                        <th scope="row">11</th>
                        <td>Mike wasaunski</td>
                        <td>MonsterCity</td>
                        <td>2</td>
                        <td><img src={cand} /></td>
                    </tr>
                </tbody>


            </table>
        
        </div>   
    );
}

export default RankGlobal;