import React from "react";


export const Favorites=(props)=>{

    return(
        <>
            <div>
                <div onClick={()=>console.log("clickeo")}>{props.name}</div>
            </div>
        </>
    )

}