import React from "react";
import Body from "./components/Body";
import Nav from "./components/Nav";
import data from "./data"

export default function App () {
   const travel = data.map(items => {
    return  (
        <Body 
           key = {items.id}
            item = {items}
        />
    )
   }
    )



  return (
    <>
     < Nav />
     <section className="trav">
     {travel}
     </section>
    
    </>
   

  )
}
