import React from "react";

import gloglo from '../image/gloglo.png'

export default function Nav () {
    return (
        <div className="nav">
            
            <img src= {gloglo} alt=" " className="nav-img"/>
            <h3 className="nav--text">My travel journal.</h3>
            
           
        </div>
    )
}