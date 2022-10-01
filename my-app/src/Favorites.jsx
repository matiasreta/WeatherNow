import React from "react";


export const Favorites=(props)=>{

    return(<div>
        <div onClick={()=>console.log("clickeo")}> <p> 1 {props.name}</p> </div>
        </div>)

}