import React from "react";

export default function Body (props) {
    return (
        <div className="bodi">
            <img src ={`../images/${props.item.imageUrl}`} alt =" " className="body--img"/>
            <div className="info">
                <div className="icon"> 
            <img src="../images/locon.png" alt =" " className="loc"/>
               <p>{props.item.location}</p> 
               </div>
               <h2> {props.item.title} </h2>
               <h4>{props.item.startDate} - {props.item.endDate}</h4>
               <p>{props.item.description} </p>
               
            </div>
            <hc />
        </div>
    )
}